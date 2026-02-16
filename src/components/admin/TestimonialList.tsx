"use client";

import { useState } from "react";
import { Testimonial, TestimonialStatus } from "@prisma/client";
import {
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { TestimonialModal } from "./TestimonialModal";

type TestimonialWithReviewer = Testimonial & {
  reviewedBy: { name: string | null } | null;
};

interface TestimonialListProps {
  pending: TestimonialWithReviewer[];
  approved: TestimonialWithReviewer[];
  rejected: TestimonialWithReviewer[];
}

type TabType = "pending" | "approved" | "rejected";

export function TestimonialList({
  pending,
  approved,
  rejected,
}: TestimonialListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("pending");
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialWithReviewer | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const tabs = [
    {
      id: "pending" as TabType,
      label: "Pending Review",
      count: pending.length,
      icon: Clock,
      color: "text-yellow-600 bg-yellow-50",
    },
    {
      id: "approved" as TabType,
      label: "Approved",
      count: approved.length,
      icon: CheckCircle,
      color: "text-green-600 bg-green-50",
    },
    {
      id: "rejected" as TabType,
      label: "Rejected",
      count: rejected.length,
      icon: XCircle,
      color: "text-red-600 bg-red-50",
    },
  ];

  const getList = () => {
    switch (activeTab) {
      case "pending":
        return pending;
      case "approved":
        return approved;
      case "rejected":
        return rejected;
    }
  };

  const currentList = getList();

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const formatPermissions = (testimonial: TestimonialWithReviewer) => {
    const permissions = [];
    if (testimonial.shareOnWebsite) permissions.push("Website");
    if (testimonial.shareOnFacebook) permissions.push("Facebook");
    if (testimonial.shareInNewsletter) permissions.push("Newsletter");
    return permissions.length > 0 ? permissions.join(", ") : "None";
  };

  return (
    <div>
      {/* Tabs */}
      <div className="mb-6 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-mesa-blue-50 text-mesa-blue-700"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                activeTab === tab.id ? "bg-mesa-blue-100" : "bg-gray-100"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* List */}
      {currentList.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">
            No {activeTab} testimonials to display.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {currentList.map((testimonial) => {
            const isExpanded = expandedIds.has(testimonial.id);

            return (
              <div
                key={testimonial.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mesa-blue-100">
                      <span className="text-sm font-medium text-mesa-blue-700">
                        {testimonial.clientInitials || "?"}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {testimonial.displayName ||
                          testimonial.clientName ||
                          "Anonymous"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Submitted{" "}
                        {new Date(testimonial.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedTestimonial(testimonial)}
                      className="flex items-center gap-2 rounded-lg bg-mesa-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-mesa-blue-700"
                    >
                      <Eye className="h-4 w-4" />
                      {activeTab === "pending" ? "Review" : "View"}
                    </button>
                    <button
                      onClick={() => toggleExpand(testimonial.id)}
                      className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                    >
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-gray-100 bg-gray-50 p-4">
                    <p className="text-sm text-gray-700">
                      {testimonial.story.slice(0, 300)}
                      {testimonial.story.length > 300 ? "..." : ""}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                      <span>
                        <strong>Permissions:</strong>{" "}
                        {formatPermissions(testimonial)}
                      </span>
                      {testimonial.clientEmail && (
                        <span>
                          <strong>Email:</strong> {testimonial.clientEmail}
                        </span>
                      )}
                      {testimonial.imageUrl && (
                        <span className="text-mesa-blue-600">Has photo</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {selectedTestimonial && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </div>
  );
}
