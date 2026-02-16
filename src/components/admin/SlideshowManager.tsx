"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SlideshowImage } from "@prisma/client";
import {
  Plus,
  GripVertical,
  Trash2,
  Eye,
  EyeOff,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

interface SlideshowManagerProps {
  images: SlideshowImage[];
}

export function SlideshowManager({ images: initialImages }: SlideshowManagerProps) {
  const router = useRouter();
  const [images, setImages] = useState(initialImages);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newImage, setNewImage] = useState({
    imageUrl: "",
    altText: "",
    caption: "",
    linkUrl: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/slideshow/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (!response.ok) throw new Error("Failed to update");

      setImages((prev) =>
        prev.map((img) =>
          img.id === id ? { ...img, isActive: !isActive } : img
        )
      );
    } catch {
      setError("Failed to update image. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(`/api/admin/slideshow/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete");

      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch {
      setError("Failed to delete image. Please try again.");
    }
  };

  const handleAddImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/slideshow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newImage,
          sortOrder: images.length,
        }),
      });

      if (!response.ok) throw new Error("Failed to add image");

      setShowAddForm(false);
      setNewImage({ imageUrl: "", altText: "", caption: "", linkUrl: "" });
      router.refresh();
    } catch {
      setError("Failed to add image. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Add Image Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 rounded-lg bg-mesa-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-mesa-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Image
        </button>
      </div>

      {/* Add Image Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddImage}
          className="mb-6 rounded-xl bg-white p-6 shadow-sm"
        >
          <h3 className="mb-4 font-semibold text-gray-900">Add New Image</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={newImage.imageUrl}
                onChange={(e) =>
                  setNewImage((prev) => ({ ...prev, imageUrl: e.target.value }))
                }
                placeholder="https://drive.google.com/..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Enter the Google Drive direct link or any public image URL
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Alt Text <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={newImage.altText}
                onChange={(e) =>
                  setNewImage((prev) => ({ ...prev, altText: e.target.value }))
                }
                placeholder="Describe the image for accessibility"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Caption (optional)
              </label>
              <input
                type="text"
                value={newImage.caption}
                onChange={(e) =>
                  setNewImage((prev) => ({ ...prev, caption: e.target.value }))
                }
                placeholder="Optional caption overlay"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Link URL (optional)
              </label>
              <input
                type="url"
                value={newImage.linkUrl}
                onChange={(e) =>
                  setNewImage((prev) => ({ ...prev, linkUrl: e.target.value }))
                }
                placeholder="URL to link to when clicked"
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
              {saving ? "Adding..." : "Add Image"}
            </button>
          </div>
        </form>
      )}

      {/* Image List */}
      {images.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-300" />
          <p className="mt-4 text-gray-600">No slideshow images yet.</p>
          <p className="mt-1 text-sm text-gray-500">
            Add images to display in the homepage slideshow.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ${
                !image.isActive ? "opacity-60" : ""
              }`}
            >
              <div className="cursor-move text-gray-400">
                <GripVertical className="h-5 w-5" />
              </div>
              <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                {image.imageUrl ? (
                  <Image
                    src={image.imageUrl}
                    alt={image.altText}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  {image.altText}
                </p>
                {image.caption && (
                  <p className="text-sm text-gray-500 truncate">{image.caption}</p>
                )}
                <p className="text-xs text-gray-400">Position: {index + 1}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleActive(image.id, image.isActive)}
                  className={`rounded-lg p-2 ${
                    image.isActive
                      ? "text-green-600 hover:bg-green-50"
                      : "text-gray-400 hover:bg-gray-50"
                  }`}
                  title={image.isActive ? "Hide from slideshow" : "Show in slideshow"}
                >
                  {image.isActive ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                  title="Delete image"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
