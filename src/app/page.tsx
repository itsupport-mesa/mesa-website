import Link from "next/link";
import { DonateButton } from "@/components/shared/DonateButton";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-green-700 to-mesa-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              A Beacon of Hope
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-mesa-green-100">
              MESA has proudly served Madison County, Virginia since 1982,
              providing food pantry services and emergency financial assistance
              to our neighbors in need.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DonateButton size="lg" />
              <Link
                href="/stories/submit"
                className="rounded-md border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-mesa-green-800"
              >
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-mesa-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-mesa-green-800">
              Our Mission
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              To serve as a resource for our Madison County neighbors in need.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-mesa-green-700">
              Our Vision
            </h3>
            <p className="mx-auto mt-2 max-w-3xl text-lg text-gray-600">
              To build community by empowering neighbors.
            </p>
          </div>

          {/* Core Values */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {[
              "Community",
              "Compassion",
              "Dependability",
              "Dignity",
              "Empathy",
              "Responsiveness",
            ].map((value) => (
              <div
                key={value}
                className="rounded-lg bg-white p-4 text-center shadow-sm"
              >
                <span className="font-medium text-mesa-green-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            How We Help
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Food Pantry */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-mesa-green-700">
                Food Pantry
              </h3>
              <p className="mt-4 text-gray-600">
                We provide nonperishable food items, personal hygiene products,
                and even birthday cakes for children to Madison County
                residents.
              </p>
              <div className="mt-6">
                <h4 className="font-medium text-gray-900">Hours:</h4>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Tuesday: 10:00 AM - 1:00 PM</li>
                  <li>Wednesday: 10:00 AM - 1:00 PM</li>
                  <li>Wednesday Evening: 6:00 - 7:30 PM</li>
                  <li>Saturday: 10:00 AM - 12:00 PM</li>
                </ul>
              </div>
              <Link
                href="/food-pantry"
                className="mt-6 inline-block text-mesa-green-600 hover:text-mesa-green-700"
              >
                Learn more &rarr;
              </Link>
            </div>

            {/* Emergency Services */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-mesa-green-700">
                Emergency Services
              </h3>
              <p className="mt-4 text-gray-600">
                On a case-by-case basis, we provide financial assistance for
                electric bills, rent/mortgage, fuel, medical expenses, vehicle
                repair, and other life needs.
              </p>
              <p className="mt-4 text-gray-600">
                Our goal is to help our neighbors through difficult times and
                empower them to regain stability.
              </p>
              <Link
                href="/emergency-services"
                className="mt-6 inline-block text-mesa-green-600 hover:text-mesa-green-700"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="bg-mesa-green-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Visit Us</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-mesa-green-700">Address</h3>
                <p className="mt-2 text-gray-600">
                  927 Orange Road
                  <br />
                  Madison, VA 22731
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-mesa-green-700">Phone</h3>
                <p className="mt-2 text-gray-600">
                  <a
                    href="tel:540-948-4427"
                    className="hover:text-mesa-green-600"
                  >
                    540-948-4427
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-mesa-green-700">Email</h3>
                <p className="mt-2 text-gray-600">
                  <a
                    href="mailto:info@mesamadisonva.org"
                    className="hover:text-mesa-green-600"
                  >
                    info@mesamadisonva.org
                  </a>
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md bg-mesa-green-700 px-6 py-3 text-white hover:bg-mesa-green-800"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
