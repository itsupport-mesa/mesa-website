import { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Food Pantry",
  description:
    "MESA's food pantry provides nonperishable food, personal hygiene products, and birthday cakes for children to Madison County residents.",
};

export default function FoodPantryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-green-700 to-mesa-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Food Pantry
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-green-100">
            Providing food and essentials to Madison County families in need
          </p>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="bg-mesa-cream py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Hours */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-mesa-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Pantry Hours
                </h2>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Tuesday</span>
                  <span>10:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Wednesday</span>
                  <span>10:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Wednesday Evening</span>
                  <span>6:00 - 7:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 12:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-mesa-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">Location</h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>927 Orange Road</p>
                <p>Madison, VA 22731</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block text-mesa-green-600 hover:text-mesa-green-700"
                >
                  Get directions &rarr;
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-mesa-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  <a
                    href="tel:540-948-4427"
                    className="hover:text-mesa-green-600"
                  >
                    540-948-4427
                  </a>
                </p>
                <p className="mt-2">
                  <a
                    href="mailto:info@mesamadisonva.org"
                    className="hover:text-mesa-green-600"
                  >
                    info@mesamadisonva.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">What We Provide</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-mesa-green-600" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Nonperishable Food
                </h3>
                <p className="mt-1 text-gray-600">
                  Canned goods, pasta, rice, cereals, and other shelf-stable
                  items
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-mesa-green-600" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Personal Hygiene Products
                </h3>
                <p className="mt-1 text-gray-600">
                  Soap, shampoo, toothpaste, and other essential toiletries
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-mesa-green-600" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Birthday Cakes for Children
                </h3>
                <p className="mt-1 text-gray-600">
                  Helping families celebrate their children&apos;s special days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-mesa-green-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Who Can Use the Food Pantry?
            </h2>
            <div className="mt-6 space-y-4 text-lg text-gray-600">
              <p>
                Our food pantry is available to all Madison County, Virginia
                residents who are experiencing food insecurity. We believe no
                one in our community should go hungry.
              </p>
              <p>
                <strong>What to bring:</strong> Please bring a photo ID showing
                your Madison County address. If your ID doesn&apos;t show your
                current address, please bring a piece of mail (such as a utility
                bill) that shows your name and Madison County address.
              </p>
              <p>
                <strong>First-time visitors:</strong> We&apos;ll ask you to
                complete a brief intake form. This helps us serve you better and
                allows us to report our impact to funders who support our
                mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Help Stock Our Shelves
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our food pantry relies on donations from the community. Consider
              donating nonperishable food items or making a financial
              contribution to help us purchase supplies.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/volunteer-donate"
                className="rounded-md bg-mesa-green-700 px-6 py-3 text-white hover:bg-mesa-green-800"
              >
                Donate Now
              </Link>
              <Link
                href="/volunteer-donate#food-drive"
                className="rounded-md border border-mesa-green-700 px-6 py-3 text-mesa-green-700 hover:bg-mesa-green-50"
              >
                Organize a Food Drive
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
