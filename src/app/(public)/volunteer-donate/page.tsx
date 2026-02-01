import { Metadata } from "next";
import { Heart, Users, Package, Calendar, Gift, HandHeart } from "lucide-react";
import { DonateButton } from "@/components/shared/DonateButton";

export const metadata: Metadata = {
  title: "Volunteer & Donate",
  description:
    "Support MESA through donations or volunteer work. Help us serve Madison County families in need.",
};

export default function VolunteerDonatePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-green-700 to-mesa-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Volunteer & Donate
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-green-100">
            Join us in serving our Madison County neighbors
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-mesa-gold" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Make a Donation
                </h2>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Your financial support helps us provide food, emergency
                assistance, and hope to families throughout Madison County.
                Every dollar makes a difference.
              </p>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  <strong>$25</strong> can provide a week&apos;s worth of groceries
                  for a family of four.
                </p>
                <p>
                  <strong>$50</strong> can help cover a utility bill disconnect
                  fee.
                </p>
                <p>
                  <strong>$100</strong> can provide emergency heating fuel
                  during winter months.
                </p>
              </div>
              <div className="mt-8">
                <DonateButton size="lg" />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                MESA is a 501(c)(3) nonprofit organization. Your donation is
                tax-deductible to the extent allowed by law.
              </p>
            </div>

            <div className="rounded-xl bg-mesa-cream p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Other Ways to Give
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-4">
                  <Package className="h-6 w-6 flex-shrink-0 text-mesa-green-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Donate by Mail
                    </h4>
                    <p className="text-gray-600">
                      Send a check to: MESA, 927 Orange Road, Madison, VA 22731
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Gift className="h-6 w-6 flex-shrink-0 text-mesa-green-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Amazon Wishlist
                    </h4>
                    <p className="text-gray-600">
                      Shop our wishlist and have items delivered directly to
                      MESA.
                    </p>
                    {/* TODO: Add Amazon wishlist link from site settings */}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Calendar className="h-6 w-6 flex-shrink-0 text-mesa-green-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Monthly Giving
                    </h4>
                    <p className="text-gray-600">
                      Set up a recurring donation to provide ongoing support for
                      our programs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Food Donations */}
      <section id="food-drive" className="bg-mesa-green-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Donate Food & Supplies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our food pantry relies on donations from the community. Here&apos;s
            how you can help stock our shelves.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-mesa-green-700">
                Most Needed Items
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-600">
                <li>• Canned vegetables</li>
                <li>• Canned fruit</li>
                <li>• Peanut butter</li>
                <li>• Pasta & sauce</li>
                <li>• Rice & beans</li>
                <li>• Cereal</li>
                <li>• Soup</li>
                <li>• Tuna & chicken</li>
                <li>• Cooking oil</li>
                <li>• Toilet paper</li>
                <li>• Soap & shampoo</li>
                <li>• Toothpaste</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-mesa-green-700">
                Organize a Food Drive
              </h3>
              <p className="mt-4 text-gray-600">
                Want to collect food at your workplace, school, church, or
                community organization? We can help you get started!
              </p>
              <p className="mt-4 text-gray-600">
                Contact us at{" "}
                <a
                  href="tel:540-948-4427"
                  className="text-mesa-green-600 hover:text-mesa-green-700"
                >
                  540-948-4427
                </a>{" "}
                or{" "}
                <a
                  href="mailto:info@mesamadisonva.org"
                  className="text-mesa-green-600 hover:text-mesa-green-700"
                >
                  info@mesamadisonva.org
                </a>{" "}
                to coordinate your food drive.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Drop-Off Information</h3>
            <p className="mt-2 text-gray-600">
              Donations can be dropped off at our location during pantry hours:
              Tuesday and Wednesday 10 AM - 1 PM, Wednesday evening 6 - 7:30 PM,
              or Saturday 10 AM - 12 PM. For large donations or other
              arrangements, please call ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-mesa-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Volunteer</h2>
          </div>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            MESA is powered by volunteers who give their time and talents to
            serve our community. We have a variety of opportunities for people
            of all ages and abilities.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Food Pantry Assistant",
                description:
                  "Help clients select items, stock shelves, and organize donations during pantry hours.",
              },
              {
                title: "Client Intake",
                description:
                  "Welcome clients, complete intake forms, and connect them with appropriate services.",
              },
              {
                title: "Delivery Driver",
                description:
                  "Pick up food donations from local stores and deliver to homebound clients.",
              },
              {
                title: "Special Events",
                description:
                  "Help with holiday food distributions, community events, and fundraisers.",
              },
              {
                title: "Office Support",
                description:
                  "Assist with data entry, phone calls, mailings, and administrative tasks.",
              },
              {
                title: "Board Member",
                description:
                  "Provide leadership and strategic direction as a member of our board of directors.",
              },
            ].map((opportunity) => (
              <div
                key={opportunity.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-mesa-green-700">
                  {opportunity.title}
                </h3>
                <p className="mt-2 text-gray-600">{opportunity.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-mesa-green-700 p-8 text-center text-white">
            <HandHeart className="mx-auto h-12 w-12" />
            <h3 className="mt-4 text-2xl font-bold">Ready to Get Started?</h3>
            <p className="mt-2 text-mesa-green-100">
              Contact us to learn more about volunteer opportunities and find
              the right fit for you.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:540-948-4427"
                className="rounded-md bg-white px-6 py-3 font-semibold text-mesa-green-700 hover:bg-mesa-green-50"
              >
                Call 540-948-4427
              </a>
              <a
                href="mailto:info@mesamadisonva.org"
                className="rounded-md border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-mesa-green-700"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
