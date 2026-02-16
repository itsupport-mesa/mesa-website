"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Resource } from "@prisma/client";
import {
  Plus,
  Trash2,
  Eye,
  EyeOff,
  ExternalLink,
  Edit2,
  X,
  Check,
} from "lucide-react";

interface ResourcesManagerProps {
  resources: Resource[];
  categories: string[];
}

export function ResourcesManager({
  resources: initialResources,
  categories: initialCategories,
}: ResourcesManagerProps) {
  const router = useRouter();
  const [resources, setResources] = useState(initialResources);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newResource, setNewResource] = useState({
    name: "",
    description: "",
    url: "",
    category: "",
  });
  const [editResource, setEditResource] = useState({
    name: "",
    description: "",
    url: "",
    category: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const allCategories = Array.from(
    new Set([...initialCategories, newResource.category, editResource.category])
  )
    .filter(Boolean)
    .sort();

  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/resources/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (!response.ok) throw new Error("Failed to update");

      setResources((prev) =>
        prev.map((r) => (r.id === id ? { ...r, isActive: !isActive } : r))
      );
    } catch {
      setError("Failed to update resource. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;

    try {
      const response = await fetch(`/api/admin/resources/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete");

      setResources((prev) => prev.filter((r) => r.id !== id));
    } catch {
      setError("Failed to delete resource. Please try again.");
    }
  };

  const handleAddResource = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newResource),
      });

      if (!response.ok) throw new Error("Failed to add resource");

      setShowAddForm(false);
      setNewResource({ name: "", description: "", url: "", category: "" });
      router.refresh();
    } catch {
      setError("Failed to add resource. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const startEditing = (resource: Resource) => {
    setEditingId(resource.id);
    setEditResource({
      name: resource.name,
      description: resource.description || "",
      url: resource.url,
      category: resource.category,
    });
  };

  const handleSaveEdit = async (id: string) => {
    setSaving(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/resources/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editResource),
      });

      if (!response.ok) throw new Error("Failed to update");

      setResources((prev) =>
        prev.map((r) =>
          r.id === id
            ? {
                ...r,
                ...editResource,
              }
            : r
        )
      );
      setEditingId(null);
    } catch {
      setError("Failed to update resource. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Group resources by category
  const groupedResources = resources.reduce(
    (acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = [];
      }
      acc[resource.category].push(resource);
      return acc;
    },
    {} as Record<string, Resource[]>
  );

  return (
    <div>
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Add Resource Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 rounded-lg bg-mesa-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-mesa-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Resource
        </button>
      </div>

      {/* Add Resource Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddResource}
          className="mb-6 rounded-xl bg-white p-6 shadow-sm"
        >
          <h3 className="mb-4 font-semibold text-gray-900">Add New Resource</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={newResource.name}
                onChange={(e) =>
                  setNewResource((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Category <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                list="categories"
                value={newResource.category}
                onChange={(e) =>
                  setNewResource((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }))
                }
                placeholder="e.g., Government, Food, Housing"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
              />
              <datalist id="categories">
                {allCategories.map((cat) => (
                  <option key={cat} value={cat} />
                ))}
              </datalist>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={newResource.url}
                onChange={(e) =>
                  setNewResource((prev) => ({ ...prev, url: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={newResource.description}
                onChange={(e) =>
                  setNewResource((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={2}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-mesa-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-mesa-blue-700 disabled:opacity-50"
            >
              {saving ? "Adding..." : "Add Resource"}
            </button>
          </div>
        </form>
      )}

      {/* Resources by Category */}
      {Object.keys(groupedResources).length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">No resources have been added yet.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedResources)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([category, categoryResources]) => (
              <div key={category}>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  {category}
                </h3>
                <div className="space-y-3">
                  {categoryResources.map((resource) => (
                    <div
                      key={resource.id}
                      className={`rounded-xl bg-white p-4 shadow-sm ${
                        !resource.isActive ? "opacity-60" : ""
                      }`}
                    >
                      {editingId === resource.id ? (
                        <div className="space-y-3">
                          <input
                            type="text"
                            value={editResource.name}
                            onChange={(e) =>
                              setEditResource((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                          />
                          <input
                            type="url"
                            value={editResource.url}
                            onChange={(e) =>
                              setEditResource((prev) => ({
                                ...prev,
                                url: e.target.value,
                              }))
                            }
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                          />
                          <textarea
                            value={editResource.description}
                            onChange={(e) =>
                              setEditResource((prev) => ({
                                ...prev,
                                description: e.target.value,
                              }))
                            }
                            rows={2}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setEditingId(null)}
                              className="rounded p-1 text-gray-400 hover:bg-gray-100"
                            >
                              <X className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleSaveEdit(resource.id)}
                              disabled={saving}
                              className="rounded p-1 text-green-600 hover:bg-green-50"
                            >
                              <Check className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-gray-900">
                                {resource.name}
                              </p>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-mesa-blue-600"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </div>
                            {resource.description && (
                              <p className="mt-1 text-sm text-gray-500">
                                {resource.description}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => startEditing(resource)}
                              className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() =>
                                handleToggleActive(resource.id, resource.isActive)
                              }
                              className={`rounded-lg p-2 ${
                                resource.isActive
                                  ? "text-green-600 hover:bg-green-50"
                                  : "text-gray-400 hover:bg-gray-50"
                              }`}
                            >
                              {resource.isActive ? (
                                <Eye className="h-4 w-4" />
                              ) : (
                                <EyeOff className="h-4 w-4" />
                              )}
                            </button>
                            <button
                              onClick={() => handleDelete(resource.id)}
                              className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
