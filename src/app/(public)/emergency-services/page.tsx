import { Metadata } from "next";
import { Phone, FileText, HelpCircle, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Services",
  description:
    "MESA offers crisis support through our Client Services program to assist with unforeseen emergencies including utility bills, rent, and repairs for Madison County residents.",
};

export default function EmergencyServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Client Services
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-blue-100">
            Crisis support for Madison County residents facing unforeseen
            emergencies
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
                MESA offers crisis support through our Client Services program
                to assist with unforeseen emergencies. Assistance provided
                includes support with utility bills, rent or mortgage payments,
                and repairs; information regarding local resources; and referrals
                to community programs. Currently, we serve residents of Madison
                County in need of assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="bg-mesa-cream py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-mesa-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Client Services Hours
                </h2>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday</span>
                  <span>10:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Thursday</span>
                  <span>10:00 AM - 1:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-mesa-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Contact Client Services
                </h2>
              </div>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>
                  <a
                    href="tel:540-948-4427"
                    className="hover:text-mesa-blue-600"
                  >
                    540-948-4427
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:operationsmanager@mesamadisonva.org"
                    className="hover:text-mesa-blue-600"
                  >
                    operationsmanager@mesamadisonva.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Assistance */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Types of Assistance
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Utility Bills",
                description:
                  "Help with past-due electric, water, and other utility bills to prevent disconnection",
              },
              {
                title: "Rent & Mortgage",
                description:
                  "Assistance with housing payments during financial hardship",
              },
              {
                title: "Repairs",
                description:
                  "Support for essential home or vehicle repairs",
              },
              {
                title: "Local Resources",
                description:
                  "Information regarding local resources available to Madison County residents",
              },
              {
                title: "Community Referrals",
                description:
                  "Referrals to community programs that can provide additional support",
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
                <h3 className="text-xl font-semibold text-mesa-blue-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-mesa-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">How to Apply</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Kindly complete the Client Services Application online and email a
            copy of the bill requesting services to{" "}
            <a
              href="mailto:operationsmanager@mesamadisonva.org"
              className="text-mesa-blue-600 hover:text-mesa-blue-700"
            >
              operationsmanager@mesamadisonva.org
            </a>
            , or visit the MESA Building during Client Services hours on Mondays
            and Thursdays from 10:00 AM to 1:00 PM.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mesa-blue-700 text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">1. Contact Us</h3>
                <p className="mt-2 text-gray-600">
                  Call{" "}
                  <a
                    href="tel:540-948-4427"
                    className="text-mesa-blue-600 hover:text-mesa-blue-700"
                  >
                    540-948-4427
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:operationsmanager@mesamadisonva.org"
                    className="text-mesa-blue-600 hover:text-mesa-blue-700"
                  >
                    operationsmanager@mesamadisonva.org
                  </a>{" "}
                  to speak with a staff member about your situation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mesa-blue-700 text-white">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  2. Complete Application
                </h3>
                <p className="mt-2 text-gray-600">
                  Complete the Client Services Application and provide
                  documentation of the bill or emergency you need help with.
                </p>
                {/* TODO: Add link to Client Services Application when available */}
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mesa-blue-700 text-white">
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
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">What to Bring</h2>
            <p className="mt-4 text-lg text-gray-600">
              When you visit during Client Services hours, please bring the
              following documents:
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-mesa-blue-600">•</span>
                <span>
                  Photo ID showing your Madison County address (or ID plus a
                  utility bill showing your address)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mesa-blue-600">•</span>
                <span>
                  Documentation of the emergency (bill, disconnect notice,
                  estimate, etc.)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mesa-blue-600">•</span>
                <span>
                  Proof of income (pay stubs, benefits letter, or similar)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-mesa-blue-600">•</span>
                <span>
                  Information about other assistance you&apos;ve applied for
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-mesa-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-semibold text-amber-800">Please Note</h3>
            <ul className="mt-4 space-y-2 text-amber-700">
              <li>
                • Client Services assistance is provided on a case-by-case basis
                and subject to available funding.
              </li>
              <li>
                • We currently serve Madison County, Virginia residents.
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
      <section className="bg-mesa-blue-700 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Need Help?</h2>
          <p className="mt-2 text-mesa-blue-100">
            Don&apos;t wait until the situation becomes critical. Reach out
            today.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:540-948-4427"
              className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-mesa-blue-700 hover:bg-mesa-blue-50"
            >
              Call 540-948-4427
            </a>
            <a
              href="mailto:operationsmanager@mesamadisonva.org"
              className="rounded-md border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white hover:text-mesa-blue-700"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
