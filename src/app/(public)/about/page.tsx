import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MESA's history, mission, and the dedicated team serving Madison County, Virginia since 1982.",
};

const boardMembers = [
  { name: "Patricia Livingston", role: "President" },
  { name: "Jim Duszynski", role: "Vice President" },
  { name: "Erin Nicholls", role: "Treasurer" },
  { name: "Celene Pumphrey", role: "Secretary" },
  { name: "Robin Sweely", role: "Director" },
];

const staff = [
  { name: "Patricia Livingston", role: "Executive Director" },
  { name: "Catrina Lloyd", role: "Pantry Manager" },
  { name: "Kristina Magel", role: "Operations Manager" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About MESA
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-blue-100">
            Madison Emergency Services Association - A Beacon of Hope since 1982
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
            <div className="mt-6 space-y-4 text-lg text-gray-600">
              <p>
                In 1982, members of local churches, civic organizations, and
                concerned citizens came together to address the growing needs of
                Madison County residents facing difficult times. What started as
                a small group of dedicated volunteers has grown into a vital
                community resource.
              </p>
              <p>
                For over four decades, MESA has been providing food pantry
                services and emergency financial assistance to our neighbors.
                We&apos;ve helped thousands of families through challenging
                circumstances, always treating each person with dignity and
                compassion.
              </p>
              <p>
                Today, MESA continues its mission with the same spirit of
                community service that inspired our founders. We remain
                committed to being a beacon of hope for Madison County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-mesa-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-mesa-blue-800">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                To serve as a resource for our Madison County neighbors in need.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-mesa-blue-800">
                Our Vision
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                To build community by empowering neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                value: "Community",
                description:
                  "We believe in the strength of neighbors helping neighbors.",
              },
              {
                value: "Compassion",
                description:
                  "We approach every interaction with kindness and understanding.",
              },
              {
                value: "Dependability",
                description:
                  "Our community can count on us to be here when needed.",
              },
              {
                value: "Dignity",
                description:
                  "We treat every person with respect and preserve their dignity.",
              },
              {
                value: "Empathy",
                description:
                  "We listen and seek to understand each person's unique situation.",
              },
              {
                value: "Responsiveness",
                description:
                  "We act quickly to address the urgent needs of our neighbors.",
              },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-mesa-blue-700">
                  {item.value}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board & Staff */}
      <section className="bg-mesa-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            MESA is led by a dedicated board of directors and supported by
            caring staff members and volunteers who share a passion for serving
            our community.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Board of Directors */}
            <div>
              <h3 className="text-2xl font-bold text-mesa-blue-800">
                Board of Directors
              </h3>
              <ul className="mt-6 space-y-4">
                {boardMembers.map((member) => (
                  <li
                    key={member.name + member.role}
                    className="rounded-lg bg-white p-4 shadow-sm"
                  >
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-sm text-mesa-blue-600">{member.role}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Staff */}
            <div>
              <h3 className="text-2xl font-bold text-mesa-blue-800">Staff</h3>
              <ul className="mt-6 space-y-4">
                {staff.map((member) => (
                  <li
                    key={member.name + member.role}
                    className="rounded-lg bg-white p-4 shadow-sm"
                  >
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-sm text-mesa-blue-600">{member.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/volunteer-donate"
              className="inline-block rounded-md bg-mesa-blue-700 px-6 py-3 text-white hover:bg-mesa-blue-800"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
