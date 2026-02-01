"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserRole } from "@prisma/client";
import { Shield, User as UserIcon, Mail, Calendar } from "lucide-react";
import Image from "next/image";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  role: UserRole;
  createdAt: Date;
}

interface UsersManagerProps {
  users: User[];
  currentUserId: string;
}

export function UsersManager({ users: initialUsers, currentUserId }: UsersManagerProps) {
  const router = useRouter();
  const [users, setUsers] = useState(initialUsers);
  const [saving, setSaving] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    if (userId === currentUserId) {
      setError("You cannot change your own role.");
      return;
    }

    setSaving(userId);
    setError(null);

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      if (!response.ok) throw new Error("Failed to update");

      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
      );
      router.refresh();
    } catch {
      setError("Failed to update user role. Please try again.");
    } finally {
      setSaving(null);
    }
  };

  const admins = users.filter((u) => u.role === "ADMIN");
  const staff = users.filter((u) => u.role === "STAFF");

  return (
    <div>
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
        <strong>Note:</strong> Users are automatically created when they sign in
        with their @mesamadisonva.org Google account. The first user to sign in
        becomes an Admin.
      </div>

      {/* Admins */}
      <div className="mb-8">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
          <Shield className="h-5 w-5 text-mesa-green-600" />
          Administrators ({admins.length})
        </h2>
        <div className="space-y-3">
          {admins.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isCurrentUser={user.id === currentUserId}
              onRoleChange={handleRoleChange}
              saving={saving === user.id}
            />
          ))}
        </div>
      </div>

      {/* Staff */}
      <div>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
          <UserIcon className="h-5 w-5 text-gray-600" />
          Staff ({staff.length})
        </h2>
        {staff.length === 0 ? (
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <p className="text-gray-500">
              No staff members yet. They will appear here once they sign in.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {staff.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isCurrentUser={user.id === currentUserId}
                onRoleChange={handleRoleChange}
                saving={saving === user.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface UserCardProps {
  user: User;
  isCurrentUser: boolean;
  onRoleChange: (userId: string, newRole: UserRole) => void;
  saving: boolean;
}

function UserCard({ user, isCurrentUser, onRoleChange, saving }: UserCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={48}
            height={48}
            className="rounded-full"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mesa-green-100">
            <UserIcon className="h-6 w-6 text-mesa-green-700" />
          </div>
        )}
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-900">
              {user.name || "Unknown"}
            </p>
            {isCurrentUser && (
              <span className="rounded bg-mesa-green-100 px-2 py-0.5 text-xs font-medium text-mesa-green-700">
                You
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              {user.email}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Joined {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div>
        <select
          value={user.role}
          onChange={(e) => onRoleChange(user.id, e.target.value as UserRole)}
          disabled={isCurrentUser || saving}
          className={`rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-mesa-green-500 focus:outline-none focus:ring-1 focus:ring-mesa-green-500 ${
            isCurrentUser ? "cursor-not-allowed bg-gray-100" : ""
          }`}
        >
          <option value="ADMIN">Admin</option>
          <option value="STAFF">Staff</option>
        </select>
      </div>
    </div>
  );
}
