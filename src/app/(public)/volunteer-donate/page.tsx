import { Metadata } from "next";
import Image from "next/image";
import { Heart, Users, Package, Gift, HandHeart } from "lucide-react";
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
      <section className="bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Volunteer & Donate
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-blue-100">
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
              <div className="mt-6 space-y-4 text-lg text-gray-600">
                <p>
                  Since 1982, Madison Emergency Services Association (MESA) has
                  been dedicated to serving the needs of the Madison County, VA
                  community. We operate as a vital resource, offering a
                  comprehensive Food Pantry, essential Client Services, and
                  access to supplementary resources.
                </p>
                <p>
                  While we sincerely appreciate all forms of
                  assistance&mdash;including volunteering, resource sharing, and
                  food donations&mdash;we rely primarily on monetary
                  contributions to support our annual operational expenses.
                </p>
                <p>
                  Please consider making a donation to MESA; your tax-deductible
                  contribution will help provide food and supplies to those in
                  need within our community. Your generosity significantly
                  contributes to sustaining our mission.
                </p>
                <p>
                  Contributions can be submitted via physical checks dropped off
                  or mailed to our pantry, or through digital donation via our
                  PayPal link provided below. Your support is instrumental in
                  promoting the long-term health and well-being of our Madison
                  County residents.
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

            <div className="space-y-8">
              {/* QR Code */}
              <div className="flex flex-col items-center rounded-xl bg-mesa-cream p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  Scan to Donate
                </h3>
                <Image
                  src="/images/mesa-qr-code.png"
                  alt="MESA Donation QR Code - Scan to donate via PayPal"
                  width={200}
                  height={200}
                  className="mt-4"
                />
                <p className="mt-3 text-sm text-gray-500">
                  Scan with your phone camera to donate via PayPal
                </p>
              </div>

              {/* Other Ways to Give */}
              <div className="rounded-xl bg-mesa-cream p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  Other Ways to Give
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-4">
                    <Package className="h-6 w-6 flex-shrink-0 text-mesa-blue-600" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Donate by Mail
                      </h4>
                      <p className="text-gray-600">
                        Send a check to: MESA, 927 Orange Road, Madison, VA
                        22731
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Gift className="h-6 w-6 flex-shrink-0 text-mesa-blue-600" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Amazon Wishlists
                      </h4>
                      <p className="text-gray-600">
                        Shop our wishlists and have items delivered directly to
                        MESA.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-3">
                        <a
                          href="https://a.co/9loRQsi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-mesa-blue-600 hover:text-mesa-blue-700"
                        >
                          Food Wishlist &rarr;
                        </a>
                        <a
                          href="https://a.co/emf5k7G"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-mesa-blue-600 hover:text-mesa-blue-700"
                        >
                          Hygiene Wishlist &rarr;
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Donations */}
      <section id="food-drive" className="bg-mesa-blue-50 py-16">
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
              <h3 className="text-xl font-semibold text-mesa-blue-700">
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
              <h3 className="text-xl font-semibold text-mesa-blue-700">
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
                  className="text-mesa-blue-600 hover:text-mesa-blue-700"
                >
                  540-948-4427
                </a>{" "}
                or{" "}
                <a
                  href="mailto:info@mesamadisonva.org"
                  className="text-mesa-blue-600 hover:text-mesa-blue-700"
                >
                  info@mesamadisonva.org
                </a>{" "}
                to coordinate your food drive.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">
              Drop-Off Information
            </h3>
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
            <Users className="h-8 w-8 text-mesa-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Join Our MESA Volunteer Team!
            </h2>
          </div>
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-gray-600">
            <p>
              Contributing to the well-being of our Madison County community has
              never been more accessible. Our volunteer schedule offers
              flexibility, allowing you to participate in as many or as few
              shifts as your schedule permits.
            </p>
            <p>
              We frequently require assistance with unloading trucks and
              organizing food donations received from our partner
              donors&mdash;including Wal-Mart, Food Lion, Martins, Trader
              Joe&apos;s, Sheetz&mdash;and private donors who contribute daily.
              There are also opportunities to engage with clients by volunteering
              during Food Pantry hours and assisting with the distribution of
              eggs, milk, meat, and hygiene bags.
            </p>
          </div>

          <div className="mt-12 rounded-xl bg-mesa-blue-700 p-8 text-center text-white">
            <HandHeart className="mx-auto h-12 w-12" />
            <h3 className="mt-4 text-2xl font-bold">Ready to Get Started?</h3>
            <p className="mt-2 text-mesa-blue-100">
              Please get in touch with our Operations Manager to begin your
              involvement.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* TODO: Replace with Google Form link when available */}
              <a
                href="mailto:operationsmanager@mesamadisonva.org"
                className="rounded-md bg-white px-6 py-3 font-semibold text-mesa-blue-700 hover:bg-mesa-blue-50"
              >
                Email Operations Manager
              </a>
              <a
                href="tel:540-948-4427"
                className="rounded-md border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-mesa-blue-700"
              >
                Call 540-948-4427
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
