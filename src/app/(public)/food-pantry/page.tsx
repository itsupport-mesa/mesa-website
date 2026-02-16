import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone, ShoppingCart, Heart, Apple, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Food Pantry",
  description:
    "MESA's food pantry provides nonperishable food, personal hygiene products, and snack bags for children to Madison County residents.",
};

export default function FoodPantryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Food Pantry
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-blue-100">
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
                <Clock className="h-6 w-6 text-mesa-blue-600" />
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
                <MapPin className="h-6 w-6 text-mesa-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Location</h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>927 Orange Road</p>
                <p>Madison, VA 22731</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block text-mesa-blue-600 hover:text-mesa-blue-700"
                >
                  Get directions &rarr;
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-mesa-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  <a
                    href="tel:540-948-4427"
                    className="hover:text-mesa-blue-600"
                  >
                    540-948-4427
                  </a>
                </p>
                <p className="mt-2">
                  <a
                    href="mailto:info@mesamadisonva.org"
                    className="hover:text-mesa-blue-600"
                  >
                    info@mesamadisonva.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Pantry */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">About Our Food Pantry</h2>
            <div className="mt-6 space-y-4 text-lg text-gray-600">
              <p>
                MESA&apos;s Food Pantry operates multiple days each week, including
                Saturdays, to assist individuals in our community who need
                nourishment.
              </p>
              <p>
                MESA Food Pantry is run by one full-time staff member, supported by
                numerous dedicated volunteers and food pickup drivers, and dedicates
                hundreds of hours to receiving, sorting, and storing thousands of
                pounds of food for Madison households each week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="bg-mesa-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">What We Provide</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Apple className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Healthy Food Options
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                The Food Pantry aims to provide healthy options, such as low-sugar,
                low-sodium canned goods and cereals. Fresh produce and eggs are
                supplied by local farmers and larger chain food stores in the area.
                The most substantial and consistent donations originate from the
                Blue Ridge Area Food Bank, local churches, and community members.
                Additionally, MESA benefits from various food drives organized by
                the U.S. Postal Service, local schools, and other community entities.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Package className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Personal Hygiene &amp; Cleaning Products
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                The Food Pantry also supplies personal hygiene and cleaning products
                monthly, including items such as toilet paper, toothpaste,
                deodorant, and diapers, which are not eligible for purchase with
                food stamps. Our donations of cleaning and personal hygiene products
                are vital in enhancing the overall health and wellness of the
                Madison County community.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Snack Bags for Children
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Children under 18 receive snack bags composed of items donated and
                prepared by our volunteers.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-6 w-6 text-mesa-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Impact
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Annually, MESA&apos;s Food Pantry serves approximately{" "}
                <strong>16,200 individuals</strong> and{" "}
                <strong>6,100 households</strong>; however, these figures are
                increasing as needs in our local community continue to escalate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16">
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

      {/* Amazon Wishlists */}
      <section className="bg-mesa-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Help Stock Our Shelves
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Shop our Amazon Wishlists and have items delivered directly to
              MESA, or make a financial contribution to help us purchase
              supplies.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://a.co/9loRQsi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-mesa-blue-700 px-6 py-3 text-white hover:bg-mesa-blue-800"
              >
                Food Wishlist
              </a>
              <a
                href="https://a.co/emf5k7G"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-mesa-blue-700 px-6 py-3 text-white hover:bg-mesa-blue-800"
              >
                Hygiene Wishlist
              </a>
              <Link
                href="/volunteer-donate"
                className="rounded-md border border-mesa-blue-700 px-6 py-3 text-mesa-blue-700 hover:bg-mesa-blue-50"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Ridge Area Food Bank Partner */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Partner</h2>
            <a
              href="https://foodfinder.brafb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block"
            >
              <Image
                src="/images/blue-ridge-logo.png"
                alt="Blue Ridge Area Food Bank"
                width={250}
                height={90}
                className="h-20 w-auto"
              />
            </a>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              MESA partners with the Blue Ridge Area Food Bank to provide food
              to our community. Find a local pantry near you.
            </p>
            <a
              href="https://foodfinder.brafb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-mesa-blue-600 hover:text-mesa-blue-700"
            >
              Find a Local Pantry &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* USDA Non-Discrimination Statement */}
      <section className="bg-mesa-cream py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <details>
            <summary className="cursor-pointer text-center text-sm font-medium text-mesa-blue-700 hover:text-mesa-blue-800">
              USDA Non-Discrimination Statement
            </summary>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>
                In accordance with Federal civil rights law and U.S. Department
                of Agriculture (USDA) civil rights regulations and policies, the
                USDA, its Agencies, offices, and employees, and institutions
                participating in or administering USDA programs are prohibited
                from discriminating based on race, color, national origin,
                religion, sex, gender identity (including gender expression),
                sexual orientation, disability, age, marital status,
                family/parental status, income derived from a public assistance
                program, political beliefs, or reprisal or retaliation for prior
                civil rights activity, in any program or activity conducted or
                funded by USDA (not all bases apply to all programs). Remedies
                and complaint filing deadlines vary by program or incident.
              </p>
              <p>
                Persons with disabilities who require alternative means of
                communication for program information (e.g., Braille, large
                print, audiotape, American Sign Language, etc.) should contact
                the responsible Agency or USDA&apos;s TARGET Center at (202)
                720-2600 (voice and TTY) or contact USDA through the Federal
                Relay Service at (800) 877-8339. Additionally, program
                information may be made available in languages other than
                English.
              </p>
              <p>
                To file a program discrimination complaint, complete the USDA
                Program Discrimination Complaint Form, AD-3027, found online at
                How to File a Program Discrimination Complaint and at any USDA
                office or write a letter addressed to USDA and provide in the
                letter all of the information requested in the form. To request a
                copy of the complaint form, call (866) 632-9992. Submit your
                completed form or letter to USDA by: (1) mail: U.S. Department
                of Agriculture, Office of the Assistant Secretary for Civil
                Rights, 1400 Independence Avenue, SW, Washington, D.C.
                20250-9410; (2) fax: (202) 690-7442; or (3) email:{" "}
                <a
                  href="mailto:program.intake@usda.gov"
                  className="underline hover:text-mesa-blue-600"
                >
                  program.intake@usda.gov
                </a>
                .
              </p>
              <p className="font-medium">
                USDA is an equal opportunity provider, employer, and lender.
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
