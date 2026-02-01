"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";

export function TestimonialForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    story: "",
    clientName: "",
    clientEmail: "",
    shareOnWebsite: false,
    shareOnFacebook: false,
    shareInNewsletter: false,
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate at least one sharing option is selected
    if (
      !formData.shareOnWebsite &&
      !formData.shareOnFacebook &&
      !formData.shareInNewsletter
    ) {
      setError("Please select at least one way to share your story");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit story");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Thank You for Sharing!
        </h2>
        <p className="mt-2 text-gray-600">
          Your story has been submitted and will be reviewed by our staff.
          We&apos;ll be in touch if we have any questions.
        </p>
        <button
          onClick={() => router.push("/stories")}
          className="mt-6 rounded-md bg-mesa-green-700 px-6 py-3 text-white hover:bg-mesa-green-800"
        >
          View Stories
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Story */}
      <div>
        <label
          htmlFor="story"
          className="block text-sm font-medium text-gray-900"
        >
          Your Story <span className="text-red-500">*</span>
        </label>
        <p className="mt-1 text-sm text-gray-500">
          Tell us about your experience with MESA. How did we help you? What
          difference did it make?
        </p>
        <textarea
          id="story"
          name="story"
          rows={6}
          required
          minLength={50}
          maxLength={2000}
          value={formData.story}
          onChange={(e) => setFormData({ ...formData, story: e.target.value })}
          className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-mesa-green-500 focus:ring-mesa-green-500"
          placeholder="When I came to MESA, I was facing..."
        />
        <p className="mt-1 text-sm text-gray-500">
          {formData.story.length}/2000 characters (minimum 50)
        </p>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="clientName"
          className="block text-sm font-medium text-gray-900"
        >
          Your Name (Optional)
        </label>
        <p className="mt-1 text-sm text-gray-500">
          If you&apos;d like to be identified, enter your name. You can also
          remain anonymous or use your initials.
        </p>
        <input
          type="text"
          id="clientName"
          name="clientName"
          value={formData.clientName}
          onChange={(e) =>
            setFormData({ ...formData, clientName: e.target.value })
          }
          className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-mesa-green-500 focus:ring-mesa-green-500"
          placeholder="John D. or Anonymous"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="clientEmail"
          className="block text-sm font-medium text-gray-900"
        >
          Email Address (Optional)
        </label>
        <p className="mt-1 text-sm text-gray-500">
          We&apos;ll only use this to contact you if we have questions. It will
          never be shared publicly.
        </p>
        <input
          type="email"
          id="clientEmail"
          name="clientEmail"
          value={formData.clientEmail}
          onChange={(e) =>
            setFormData({ ...formData, clientEmail: e.target.value })
          }
          className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-mesa-green-500 focus:ring-mesa-green-500"
          placeholder="email@example.com"
        />
      </div>

      {/* Sharing Permissions */}
      <fieldset>
        <legend className="text-sm font-medium text-gray-900">
          Where can we share your story? <span className="text-red-500">*</span>
        </legend>
        <p className="mt-1 text-sm text-gray-500">
          Select at least one option. We will only share your story in the ways
          you permit.
        </p>
        <div className="mt-4 space-y-3">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={formData.shareOnWebsite}
              onChange={(e) =>
                setFormData({ ...formData, shareOnWebsite: e.target.checked })
              }
              className="mt-1 h-4 w-4 rounded border-gray-300 text-mesa-green-600 focus:ring-mesa-green-500"
            />
            <span className="text-gray-600">
              <strong>On MESA&apos;s website</strong> — Your story may appear on
              our Stories page
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={formData.shareOnFacebook}
              onChange={(e) =>
                setFormData({ ...formData, shareOnFacebook: e.target.checked })
              }
              className="mt-1 h-4 w-4 rounded border-gray-300 text-mesa-green-600 focus:ring-mesa-green-500"
            />
            <span className="text-gray-600">
              <strong>On MESA&apos;s Facebook page</strong> — Your story may be
              shared on our social media
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={formData.shareInNewsletter}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  shareInNewsletter: e.target.checked,
                })
              }
              className="mt-1 h-4 w-4 rounded border-gray-300 text-mesa-green-600 focus:ring-mesa-green-500"
            />
            <span className="text-gray-600">
              <strong>In MESA&apos;s newsletter</strong> — Your story may appear
              in our printed or emailed newsletters
            </span>
          </label>
        </div>
      </fieldset>

      {/* Consent */}
      <div className="rounded-md bg-gray-50 p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ ...formData, consent: e.target.checked })
            }
            className="mt-1 h-4 w-4 rounded border-gray-300 text-mesa-green-600 focus:ring-mesa-green-500"
          />
          <span className="text-gray-600">
            <strong>I confirm</strong> that this story is true and accurate, and
            I give MESA permission to share it according to the options I
            selected above. I understand MESA may edit for length or clarity.{" "}
            <span className="text-red-500">*</span>
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-mesa-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-mesa-green-800 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </span>
        ) : (
          "Submit Your Story"
        )}
      </button>
    </form>
  );
}
