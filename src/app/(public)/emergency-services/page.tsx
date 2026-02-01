import { Metadata } from "next";
import Link from "next/link";
import { Phone, FileText, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Services",
  description:
    "MESA provides emergency financial assistance for electric bills, rent, fuel, medical expenses, and other urgent needs to Madison County residents.",
};

export default function EmergencyServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-green-700 to-mesa-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Emergency Services
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-green-100">
            Financial assistance for Madison County residents facing urgent
            needs
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">How We Help</h2>
            <div className="mt-6 space-y-4 text-lg text-gray-600">
              <p>
                Life can present unexpected challenges. MESA provides emergency
                financial assistance on a case-by-case basis to help Madison
                County residents navigate difficult times and regain stability.
              </p>
              <p>
                Our goal is not just to provide temporary relief, but to empower
                our neighbors to overcome obstacles and build a path toward
                self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Assistance */}
      <section className="bg-mesa-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Types of Emergency Assistance
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Electric Bills",
                description:
                  "Help with past-due electric bills to prevent disconnection",
              },
              {
                title: "Rent & Mortgage",
                description:
                  "Assistance with housing payments during financial hardship",
              },
              {
                title: "Heating Fuel",
                description:
                  "Support for heating oil, propane, or other fuel costs",
              },
              {
                title: "Medical Expenses",
                description:
                  "Help with prescription costs and medical bills",
              },
              {
                title: "Vehicle Repair",
                description:
                  "Assistance with essential car repairs for transportation to work",
              },
              {
                title: "Other Urgent Needs",
                description:
                  "Case-by-case assistance for other emergency situations",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-mesa-green-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">How to Apply</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mesa-green-700 text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">1. Contact Us</h3>
                <p className="mt-2 text-gray-600">
                  Call{" "}
                  <a
                    href="tel:540-948-4427"
                    className="text-mesa-green-600 hover:text-mesa-green-700"
                  >
                    540-948-4427
                  </a>{" "}
                  to speak with a staff member about your situation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mesa-green-700 text-white">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  2. Schedule an Appointment
                </h3>
                <p className="mt-2 text-gray-600">
                  We&apos;ll schedule a time for you to meet with us and discuss
                  your needs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mesa-green-700 text-white">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  3. Receive Assistance
                </h3>
                <p className="mt-2 text-gray-600">
                  Based on available funds and your situation, we&apos;ll work
                  to provide appropriate support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-mesa-green-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">What to Bring</h2>
            <p className="mt-4 text-lg text-gray-600">
              When you meet with us, please bring the following documents:
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-mesa-green-600">•</span>
                <span>
                  Photo ID showing your Madison County address (or ID plus a
                  utility bill showing your address)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mesa-green-600">•</span>
                <span>
                  Documentation of the emergency (bill, disconnect notice,
                  estimate, etc.)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mesa-green-600">•</span>
                <span>
                  Proof of income (pay stubs, benefits letter, or similar)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mesa-green-600">•</span>
                <span>
                  Information about other assistance you&apos;ve applied for
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-semibold text-amber-800">Please Note</h3>
            <ul className="mt-4 space-y-2 text-amber-700">
              <li>
                • Emergency assistance is provided on a case-by-case basis and
                subject to available funding.
              </li>
              <li>
                • We serve Madison County, Virginia residents only.
              </li>
              <li>
                • Assistance limits may apply. We&apos;ll discuss specifics when
                you contact us.
              </li>
              <li>
                • We may connect you with other community resources that can
                help.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mesa-green-700 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Need Help?</h2>
          <p className="mt-2 text-mesa-green-100">
            Don&apos;t wait until the situation becomes critical. Reach out
            today.
          </p>
          <a
            href="tel:540-948-4427"
            className="mt-6 inline-block rounded-md bg-white px-8 py-3 text-lg font-semibold text-mesa-green-700 hover:bg-mesa-green-50"
          >
            Call 540-948-4427
          </a>
        </div>
      </section>
    </div>
  );
}
