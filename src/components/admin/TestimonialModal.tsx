"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Testimonial, TestimonialStatus } from "@prisma/client";
import {
  X,
  CheckCircle,
  XCircle,
  Mail,
  Calendar,
  Globe,
  Facebook,
  Newspaper,
} from "lucide-react";
import Image from "next/image";

type TestimonialWithReviewer = Testimonial & {
  reviewedBy: { name: string | null } | null;
};

interface TestimonialModalProps {
  testimonial: TestimonialWithReviewer;
  onClose: () => void;
}

export function TestimonialModal({
  testimonial,
  onClose,
}: TestimonialModalProps) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(
    testimonial.displayName || testimonial.clientName || ""
  );
  const [reviewNotes, setReviewNotes] = useState(testimonial.reviewNotes || "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAction = async (status: TestimonialStatus) => {
    setSaving(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/testimonials/${testimonial.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status,
          displayName: displayName || null,
          reviewNotes: reviewNotes || null,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update testimonial");
      }

      router.refresh();
      onClose();
    } catch {
      setError("Failed to update testimonial. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const isPending = testimonial.status === "PENDING";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {isPending ? "Review Testimonial" : "Testimonial Details"}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Submitted on{" "}
              {new Date(testimonial.submittedAt).toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Submitter Info */}
          <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-600">
            {testimonial.clientName && (
              <span>
                <strong>Name:</strong> {testimonial.clientName}
              </span>
            )}
            {testimonial.clientInitials && (
              <span>
                <strong>Initials:</strong> {testimonial.clientInitials}
              </span>
            )}
            {testimonial.clientEmail && (
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {testimonial.clientEmail}
              </span>
            )}
          </div>

          {/* Permissions */}
          <div className="mb-6 flex flex-wrap gap-3">
            <span
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                testimonial.shareOnWebsite
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              <Globe className="h-3 w-3" />
              Website
            </span>
            <span
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                testimonial.shareOnFacebook
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              <Facebook className="h-3 w-3" />
              Facebook
            </span>
            <span
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                testimonial.shareInNewsletter
                  ? "bg-purple-100 text-purple-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              <Newspaper className="h-3 w-3" />
              Newsletter
            </span>
          </div>

          {/* Image */}
          {testimonial.imageUrl && (
            <div className="mb-6">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.imageAlt || "Testimonial photo"}
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          )}

          {/* Story */}
          <div className="mb-6">
            <h3 className="mb-2 font-medium text-gray-900">Story</h3>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="whitespace-pre-wrap text-gray-700">
                {testimonial.story}
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Editable Fields */}
          {isPending && (
            <>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Display Name (shown publicly)
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="e.g., 'Sarah M.' or 'Anonymous'"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Internal Notes (staff only)
                </label>
                <textarea
                  value={reviewNotes}
                  onChange={(e) => setReviewNotes(e.target.value)}
                  rows={3}
                  placeholder="Optional notes about this testimonial..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-mesa-blue-500 focus:outline-none focus:ring-1 focus:ring-mesa-blue-500"
                />
              </div>
            </>
          )}

          {/* Review Info (for non-pending) */}
          {!isPending && testimonial.reviewedBy && (
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              Reviewed by {testimonial.reviewedBy.name || "Unknown"} on{" "}
              {testimonial.reviewedAt
                ? new Date(testimonial.reviewedAt).toLocaleDateString()
                : "unknown date"}
            </div>
          )}
        </div>

        {/* Actions */}
        {isPending && (
          <div className="flex justify-end gap-3 border-t border-gray-200 p-6">
            <button
              onClick={() => handleAction("REJECTED")}
              disabled={saving}
              className="flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50 disabled:opacity-50"
            >
              <XCircle className="h-4 w-4" />
              Reject
            </button>
            <button
              onClick={() => handleAction("APPROVED")}
              disabled={saving}
              className="flex items-center gap-2 rounded-lg bg-mesa-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-mesa-blue-700 disabled:opacity-50"
            >
              <CheckCircle className="h-4 w-4" />
              {saving ? "Saving..." : "Approve"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
