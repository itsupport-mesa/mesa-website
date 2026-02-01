"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Images,
  Link as LinkIcon,
  Users,
  Settings,
  Home,
} from "lucide-react";
import { UserRole } from "@prisma/client";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Content", href: "/admin/content", icon: FileText },
  { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { name: "Slideshow", href: "/admin/slideshow", icon: Images },
  { name: "Resources", href: "/admin/resources", icon: LinkIcon, adminOnly: true },
  { name: "Users", href: "/admin/users", icon: Users, adminOnly: true },
  { name: "Settings", href: "/admin/settings", icon: Settings, adminOnly: true },
];

interface AdminSidebarProps {
  userRole: UserRole;
}

export function AdminSidebar({ userRole }: AdminSidebarProps) {
  const pathname = usePathname();
  const isAdmin = userRole === "ADMIN";

  const filteredNavigation = navigation.filter(
    (item) => !item.adminOnly || isAdmin
  );

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 overflow-y-auto border-r border-gray-200 bg-white lg:block">
      <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-6">
        <Link href="/" className="text-xl font-bold text-mesa-green-700">
          MESA
        </Link>
        <span className="rounded bg-mesa-green-100 px-2 py-0.5 text-xs font-medium text-mesa-green-700">
          Admin
        </span>
      </div>

      <nav className="flex flex-col gap-1 p-4">
        {filteredNavigation.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-mesa-green-50 text-mesa-green-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <Home className="h-5 w-5" />
          Back to Website
        </Link>
      </div>
    </aside>
  );
}
