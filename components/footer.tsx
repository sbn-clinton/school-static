import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Horizon Academy</h3>
          <p className="text-sm text-muted-foreground">
            Empowering minds, shaping futures. A premier educational institution
            dedicated to excellence since 1995.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/academics"
                className="text-muted-foreground hover:text-foreground"
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                href="/admissions"
                className="text-muted-foreground hover:text-foreground"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/campus-life"
                className="text-muted-foreground hover:text-foreground"
              >
                Campus Life
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Student Portal
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Parent Portal
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Faculty & Staff
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Library
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Calendar
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact</h3>
          <address className="not-italic text-sm text-muted-foreground">
            <p>123 Education Avenue</p>
            <p>Learning City, ED 12345</p>
            <p className="mt-2">Email: info@modernacademy.edu</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 px-4 md:px-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Modern Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
