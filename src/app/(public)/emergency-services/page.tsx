import { Metadata } from "next";
import { Phone, FileText, HelpCircle, HandHeart, AlertTriangle, ClipboardList, Zap, Home, Wrench, BookOpen, Users, LifeBuoy, ClipboardCheck } from "lucide-react";

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

      {/* How We Help + Please Note (2-column) */}
      <section className="pb-8 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left: How We Help */}
            <div>
              <div className="flex items-center gap-3">
                <HandHeart className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">How We Help</h2>
              </div>
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

            {/* Right: Please Note */}
            <div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-7 w-7 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Please Note</h2>
              </div>
              <ul className="mt-6 space-y-3 text-lg text-gray-600">
                <li className="flex gap-3">
                  <span className="text-amber-600">•</span>
                  <span>
                    Client Services assistance is provided on a case-by-case basis
                    and subject to available funding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600">•</span>
                  <span>We currently serve Madison County, Virginia residents.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600">•</span>
                  <span>
                    Assistance limits may apply. We&apos;ll discuss specifics when
                    you contact us.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600">•</span>
                  <span>
                    We may connect you with other community resources that can help.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Assistance */}
      <section className="pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <ClipboardList className="h-7 w-7 text-mesa-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Types of Assistance
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-mesa-blue-700">
                  Utility Bills
                </h3>
              </div>
              <p className="mt-2 text-gray-600">
                Help with past-due electric, water, and other utility bills to prevent disconnection
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Home className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-mesa-blue-700">
                  Rent &amp; Mortgage
                </h3>
              </div>
              <p className="mt-2 text-gray-600">
                Assistance with housing payments during financial hardship
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Wrench className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-mesa-blue-700">
                  Repairs
                </h3>
              </div>
              <p className="mt-2 text-gray-600">
                Support for essential home or vehicle repairs
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-mesa-blue-700">
                  Local Resources
                </h3>
              </div>
              <p className="mt-2 text-gray-600">
                Information regarding local resources available to Madison County residents
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-mesa-blue-700">
                  Community Referrals
                </h3>
              </div>
              <p className="mt-2 text-gray-600">
                Referrals to community programs that can provide additional support
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <LifeBuoy className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-mesa-blue-700">
                  Other Urgent Needs
                </h3>
              </div>
              <p className="mt-2 text-gray-600">
                Case-by-case assistance for other emergency situations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply + Steps (2-column) */}
      <section className="bg-mesa-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left: How to Apply + What to Bring */}
            <div>
              <div className="flex items-center gap-3">
                <FileText className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">How to Apply</h2>
              </div>
              <p className="mt-6 text-lg text-gray-600">
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

              <div className="mt-10 flex items-center gap-3">
                <ClipboardCheck className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">What to Bring</h2>
              </div>
              <p className="mt-3 text-gray-600">
                When you visit during Client Services hours, please bring the
                following documents:
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
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

            {/* Right: Steps */}
            <div className="space-y-8">
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
