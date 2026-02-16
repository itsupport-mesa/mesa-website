import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Food Pantry", href: "/food-pantry" },
    { name: "Client Services", href: "/emergency-services" },
    { name: "Resources", href: "/resources" },
    { name: "Volunteer & Donate", href: "/volunteer-donate" },
    { name: "Let\u2019s Stay Connected!", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/MesaMadisonCountyVA/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/mesamadisonva",
      icon: Instagram,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-mesa-blue-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-mesa-blue-300" />
                <span>
                  927 Orange Road
                  <br />
                  Madison, VA 22731
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-mesa-blue-300" />
                <a href="tel:540-948-4427" className="hover:text-mesa-blue-200">
                  540-948-4427
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-mesa-blue-300" />
                <div className="space-y-1">
                  <a
                    href="mailto:info@mesamadisonva.org"
                    className="block hover:text-mesa-blue-200"
                  >
                    info@mesamadisonva.org
                  </a>
                  <a
                    href="mailto:operationsmanager@mesamadisonva.org"
                    className="block text-sm text-mesa-blue-200 hover:text-white"
                  >
                    operationsmanager@mesamadisonva.org
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-mesa-blue-100 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Partner */}
          <div>
            <h3 className="text-lg font-semibold">Food Pantry Hours</h3>
            <ul className="mt-4 space-y-2 text-mesa-blue-100">
              <li>Tuesday: 10:00 AM - 1:00 PM</li>
              <li>Wednesday: 10:00 AM - 1:00 PM</li>
              <li>Wednesday Evening: 6:00 - 7:30 PM</li>
              <li>Saturday: 10:00 AM - 12:00 PM</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Our Partner</h3>
              <a
                href="https://foodfinder.brafb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block"
              >
                <Image
                  src="/images/blue-ridge-logo.png"
                  alt="Blue Ridge Area Food Bank"
                  width={160}
                  height={60}
                  className="h-12 w-auto rounded bg-white p-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-mesa-blue-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Social links */}
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mesa-blue-300 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-mesa-blue-300">
              &copy; {new Date().getFullYear()} Madison Emergency Services
              Association. All rights reserved.
            </p>
          </div>

          {/* USDA Non-Discrimination Statement */}
          <details className="mt-6">
            <summary className="cursor-pointer text-center text-xs text-mesa-blue-400 hover:text-mesa-blue-200">
              USDA is an equal opportunity provider, employer, and lender. View full non-discrimination statement.
            </summary>
            <div className="mt-3 space-y-3 text-xs text-mesa-blue-400">
              <p>
                In accordance with Federal civil rights law and U.S. Department of Agriculture (USDA) civil rights regulations and policies, the USDA, its Agencies, offices, and employees, and institutions participating in or administering USDA programs are prohibited from discriminating based on race, color, national origin, religion, sex, gender identity (including gender expression), sexual orientation, disability, age, marital status, family/parental status, income derived from a public assistance program, political beliefs, or reprisal or retaliation for prior civil rights activity, in any program or activity conducted or funded by USDA (not all bases apply to all programs). Remedies and complaint filing deadlines vary by program or incident.
              </p>
              <p>
                Persons with disabilities who require alternative means of communication for program information (e.g., Braille, large print, audiotape, American Sign Language, etc.) should contact the responsible Agency or USDA&apos;s TARGET Center at (202) 720-2600 (voice and TTY) or contact USDA through the Federal Relay Service at (800) 877-8339. Additionally, program information may be made available in languages other than English.
              </p>
              <p>
                To file a program discrimination complaint, complete the USDA Program Discrimination Complaint Form, AD-3027, found online at How to File a Program Discrimination Complaint and at any USDA office or write a letter addressed to USDA and provide in the letter all of the information requested in the form. To request a copy of the complaint form, call (866) 632-9992. Submit your completed form or letter to USDA by: (1) mail: U.S. Department of Agriculture, Office of the Assistant Secretary for Civil Rights, 1400 Independence Avenue, SW, Washington, D.C. 20250-9410; (2) fax: (202) 690-7442; or (3) email:{" "}
                <a
                  href="mailto:program.intake@usda.gov"
                  className="underline hover:text-mesa-blue-200"
                >
                  program.intake@usda.gov
                </a>
                .
              </p>
            </div>
          </details>
        </div>
      </div>
    </footer>
  );
}
