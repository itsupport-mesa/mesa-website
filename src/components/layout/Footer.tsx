import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Food Pantry", href: "/food-pantry" },
    { name: "Emergency Services", href: "/emergency-services" },
    { name: "Resources", href: "/resources" },
    { name: "Volunteer & Donate", href: "/volunteer-donate" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/MesaMadisonCountyVA/",
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
    <footer className="bg-mesa-green-900 text-white" aria-labelledby="footer-heading">
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
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-mesa-green-300" />
                <span>
                  927 Orange Road
                  <br />
                  Madison, VA 22731
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-mesa-green-300" />
                <a href="tel:540-948-4427" className="hover:text-mesa-green-200">
                  540-948-4427
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-mesa-green-300" />
                <a
                  href="mailto:info@mesamadisonva.org"
                  className="hover:text-mesa-green-200"
                >
                  info@mesamadisonva.org
                </a>
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
                    className="text-mesa-green-100 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Food Pantry Hours */}
          <div>
            <h3 className="text-lg font-semibold">Food Pantry Hours</h3>
            <ul className="mt-4 space-y-2 text-mesa-green-100">
              <li>Tuesday: 10:00 AM - 1:00 PM</li>
              <li>Wednesday: 10:00 AM - 1:00 PM</li>
              <li>Wednesday Evening: 6:00 - 7:30 PM</li>
              <li>Saturday: 10:00 AM - 12:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-mesa-green-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Social links */}
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mesa-green-300 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-mesa-green-300">
              &copy; {new Date().getFullYear()} Madison Emergency Services
              Association. All rights reserved.
            </p>
          </div>

          {/* Equal Opportunity Statement */}
          <p className="mt-6 text-center text-xs text-mesa-green-400">
            MESA is an equal opportunity provider. In accordance with Federal
            civil rights law and U.S. Department of Agriculture (USDA) civil
            rights regulations and policies, the USDA, its Agencies, offices,
            and employees, and institutions participating in or administering
            USDA programs are prohibited from discriminating.
          </p>
        </div>
      </div>
    </footer>
  );
}
