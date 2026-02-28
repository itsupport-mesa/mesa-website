import Link from "next/link";
import { Clock, MapPin, Target, Eye, Heart, ShoppingBasket, HandHeart, MessageCircle, CalendarDays } from "lucide-react";
import { DonateButton } from "@/components/shared/DonateButton";
import { FacebookFeed } from "@/components/shared/FacebookFeed";
import { GoogleCalendar } from "@/components/shared/GoogleCalendar";
import { HomepageCarousel } from "@/components/home/HomepageCarousel";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const slideshowImages = await prisma.slideshowImage.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    select: {
      id: true,
      imageUrl: true,
      altText: true,
      caption: true,
      linkUrl: true,
    },
  });
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              A Beacon of Hope
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-mesa-blue-100">
              MESA has proudly served Madison County, Virginia since 1982,
              providing food pantry services and emergency financial assistance
              to our neighbors in need.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DonateButton size="lg" />
              <Link
                href="/stories/submit"
                className="rounded-md border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-mesa-blue-800"
              >
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Row 1: Hours of Operation + Visit Us */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left: Normal Hours of Operation */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Normal Hours of Operation
                </h2>
              </div>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-mesa-blue-700">
                    Food Pantry
                  </h3>
                  <ul className="mt-2 space-y-1 text-gray-600">
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
                <div>
                  <h3 className="font-semibold text-mesa-blue-700">
                    Client Services
                  </h3>
                  <ul className="mt-2 space-y-1 text-gray-600">
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
              </div>
            </div>

            {/* Right: Visit Us */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Visit Us
                </h2>
              </div>
              <div className="mt-6 space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold text-mesa-blue-700">Address</h3>
                  <p className="mt-2 text-gray-600">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=927+Orange+Road+Madison+VA+22731"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-mesa-blue-600"
                    >
                      927 Orange Road
                      <br />
                      Madison, VA 22731
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-mesa-blue-700">Phone</h3>
                  <p className="mt-2 text-gray-600">
                    <a
                      href="tel:+15409484427"
                      className="hover:text-mesa-blue-600"
                    >
                      540-948-4427
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-mesa-blue-700">Email</h3>
                  <p className="mt-2 text-gray-600">
                    <a
                      href="mailto:info@mesamadisonva.org"
                      className="hover:text-mesa-blue-600"
                    >
                      info@mesamadisonva.org
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=927+Orange+Road+Madison+VA+22731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-mesa-blue-700 px-6 py-3 text-white hover:bg-mesa-blue-800"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: Mission/Values + Carousel */}
      <section className="bg-mesa-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left: Mission, Vision, Core Values */}
            <div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-3">
                  <Target className="h-7 w-7 text-mesa-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="mt-4 text-lg text-gray-600">
                  To serve as a resource for our Madison County neighbors in need.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <Eye className="h-7 w-7 text-mesa-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="mt-4 text-lg text-gray-600">
                  To build community by empowering neighbors.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-center gap-3">
                <Heart className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Core Values
                </h2>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
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
                    <span className="font-medium text-mesa-blue-700">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image Carousel */}
            <div>
              <HomepageCarousel images={slideshowImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Row 3: Food Pantry + Client Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <ShoppingBasket className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Food Pantry
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                MESA&apos;s Food Pantry operates multiple days each week,
                including Saturdays, to assist individuals in our community
                who need nourishment. We provide nonperishable food, personal
                hygiene products, and snack bags for children.
              </p>
              <Link
                href="/food-pantry"
                className="mt-6 inline-block text-mesa-blue-600 hover:text-mesa-blue-700"
              >
                Learn more &rarr;
              </Link>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <HandHeart className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Client Services
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                MESA offers crisis support through our Client Services program
                to assist with unforeseen emergencies. Assistance includes
                support with utility bills, rent or mortgage payments, repairs,
                and referrals to community programs.
              </p>
              <Link
                href="/emergency-services"
                className="mt-6 inline-block text-mesa-blue-600 hover:text-mesa-blue-700"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Row 3: Facebook Feed + Calendar */}
      <section className="bg-mesa-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left: Facebook Feed */}
            <div>
              <div className="flex items-center justify-center gap-3">
                <MessageCircle className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Follow Us on Facebook
                </h2>
              </div>
              <p className="mt-4 text-center text-gray-600">
                Stay connected with MESA for updates, events, and community stories.
              </p>
              <div className="mt-8 flex justify-center">
                <FacebookFeed />
              </div>
            </div>

            {/* Right: Google Calendar */}
            <div>
              <div className="flex items-center justify-center gap-3">
                <CalendarDays className="h-7 w-7 text-mesa-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Community Calendar
                </h2>
              </div>
              <p className="mt-4 text-center text-gray-600">
                Upcoming events and important dates.
              </p>
              <div className="mt-8">
                <GoogleCalendar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
