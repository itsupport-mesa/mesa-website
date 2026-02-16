import { Metadata } from "next";
import { TestimonialForm } from "./TestimonialForm";

export const metadata: Metadata = {
  title: "Share Your Story",
  description:
    "Share your experience with MESA. Your story helps us spread the word about our services and may inspire others.",
};

export default function SubmitStoryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Share Your Story
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-blue-100">
            Help us inspire others by sharing how MESA has helped you
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-xl bg-mesa-cream p-6">
            <h2 className="font-semibold text-gray-900">Why Share Your Story?</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                • Your story may help others in our community learn about
                resources available to them
              </li>
              <li>
                • It helps our donors and volunteers understand the impact of
                their support
              </li>
              <li>
                • Sharing your experience can reduce stigma around asking for
                help
              </li>
            </ul>
          </div>

          <TestimonialForm />

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900">What Happens Next?</h3>
            <p className="mt-2 text-gray-600">
              After you submit your story, our staff will review it. If
              approved, we&apos;ll use it according to the permissions you
              granted. We may edit for length or clarity, but we&apos;ll never
              change the meaning of your words. If you have questions, contact
              us at{" "}
              <a
                href="mailto:info@mesamadisonva.org"
                className="text-mesa-blue-600 hover:text-mesa-blue-700"
              >
                info@mesamadisonva.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
