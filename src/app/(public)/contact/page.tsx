import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MESA or visit us at 927 Orange Road, Madison, VA. Get directions, hours, and contact information.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-green-700 to-mesa-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-green-100">
            We&apos;re here to help. Reach out or visit us today.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-mesa-green-100">
                    <MapPin className="h-6 w-6 text-mesa-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600">
                      927 Orange Road
                      <br />
                      Madison, VA 22731
                    </p>
                    <a
                      href="https://maps.google.com/?q=927+Orange+Road+Madison+VA+22731"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-mesa-green-600 hover:text-mesa-green-700"
                    >
                      Get Directions &rarr;
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-mesa-green-100">
                    <Phone className="h-6 w-6 text-mesa-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="mt-1">
                      <a
                        href="tel:540-948-4427"
                        className="text-gray-600 hover:text-mesa-green-600"
                      >
                        540-948-4427
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-mesa-green-100">
                    <Mail className="h-6 w-6 text-mesa-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="mt-1">
                      <a
                        href="mailto:info@mesamadisonva.org"
                        className="text-gray-600 hover:text-mesa-green-600"
                      >
                        info@mesamadisonva.org
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-mesa-green-100">
                    <Clock className="h-6 w-6 text-mesa-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Food Pantry Hours
                    </h3>
                    <ul className="mt-1 space-y-1 text-gray-600">
                      <li>Tuesday: 10:00 AM - 1:00 PM</li>
                      <li>Wednesday: 10:00 AM - 1:00 PM</li>
                      <li>Wednesday Evening: 6:00 - 7:30 PM</li>
                      <li>Saturday: 10:00 AM - 12:00 PM</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">
                      Emergency services by appointment. Call to schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.9036!2d-78.2536!3d38.3877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b46c7c4c4c4c4c%3A0x0!2s927%20Orange%20Rd%2C%20Madison%2C%20VA%2022731!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MESA Location Map"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="bg-mesa-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Directions</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-mesa-green-700">
                From Madison (Town Center)
              </h3>
              <p className="mt-2 text-gray-600">
                Head north on Main Street (Business 29) toward Orange. Turn left
                onto Orange Road. MESA will be on your right after approximately
                0.5 miles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-mesa-green-700">
                From Orange
              </h3>
              <p className="mt-2 text-gray-600">
                Take Route 15 South toward Madison. Turn right onto Orange Road.
                MESA will be on your left.
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            Look for our building with the MESA sign. Parking is available on
            site.
          </p>
        </div>
      </section>

      {/* Calendar Section - Placeholder */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          <p className="mt-4 text-gray-600">
            Check our calendar for special events, holiday distributions, and
            other activities.
          </p>
          {/* TODO: Add Google Calendar embed when URL is provided */}
          <div className="mt-8 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <p className="text-gray-500">
              Calendar coming soon. Check back later or follow us on Facebook
              for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
