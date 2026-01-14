"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isCarFinanceOpen, setIsCarFinanceOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-2 lg:px-4">
        <div className="flex items-baseline-last justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/VF-Logo.svg"
              alt="Vizion Finance"
              width={220}
              height={80}
              priority
              className="w-[180px] sm:w-[190px] lg:w-[230px] h-auto"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-[#04A1FF] transition-colors text-[16px] font-semibold"
            >
              Home
            </Link>

            {/* Car Finance Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCarFinanceOpen(true)}
              onMouseLeave={() => setIsCarFinanceOpen(false)}
            >
              <button className="text-gray-900 hover:text-[#04A1FF] transition-colors text-[16px] font-semibold flex items-center gap-1">
                Car Finance
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isCarFinanceOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isCarFinanceOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    href="/car-finance/new"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    New Car Finance
                  </Link>
                  <Link
                    href="/car-finance/used"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Used Car Finance
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/how-it-works"
              className="text-gray-900 hover:text-[#04A1FF] transition-colors text-[16px] font-semibold"
            >
              How It Works
            </Link>

            <Link
              href="/temporary-insurance"
              className="text-gray-900 hover:text-[#04A1FF] transition-colors text-[16px] font-semibold"
            >
              Temporary Insurance
            </Link>

            <Link
              href="/stock-vehicles"
              className="text-gray-900 hover:text-[#04A1FF] transition-colors text-[16px] font-semibold"
            >
              Stock Vehicles
            </Link>

            <Link
              href="/contact-us"
              className="text-gray-900 hover:text-[#04A1FF] transition-colors text-[16px] font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/quote"
            className="hidden xl:block bg-[#04A1FF] hover:bg-[#0390e6] text-white px-8 py-2 rounded-lg text-[16px] font-semibold transition-colors whitespace-nowrap"
          >
            Get a Free Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden flex items-center justify-center w-12 h-12 text-[#04A1FF]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#04A1FF] z-50 overflow-y-auto">
            {/* Mobile Menu Header with Close Button */}
            <div className="flex items-center justify-center h-20 px-4 relative">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/VF-Logo.svg"
                  alt="Vizion Finance"
                  width={320}
                  height={120}
                  priority
                  className="w-[280px] h-auto brightness-0 invert"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute right-4 flex items-center justify-center w-12 h-12 text-white"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 space-y-2 text-center">
              <Link
                href="/"
                className="text-white text-base font-semibold hover:opacity-80 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Car Finance Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setIsCarFinanceOpen(!isCarFinanceOpen)}
                  className="text-white text-base font-semibold hover:opacity-80 transition-opacity flex items-center gap-2 justify-center w-full"
                >
                  Car Finance
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      isCarFinanceOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isCarFinanceOpen && (
                  <div className="mt-4 flex flex-col space-y-1">
                    <Link
                      href="/car-finance/new"
                      className="text-white text-sm hover:opacity-80"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      New Car Finance
                    </Link>
                    <Link
                      href="/car-finance/used"
                      className="text-white text-sm hover:opacity-80"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Used Car Finance
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/how-it-works"
                className="text-white text-base font-semibold hover:opacity-80 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>

              <Link
                href="/temporary-insurance"
                className="text-white text-base font-semibold hover:opacity-80 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Temporary Insurance
              </Link>

              <Link
                href="/stock-vehicles"
                className="text-white text-base font-semibold hover:opacity-80 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stock Vehicles
              </Link>

              <Link
                href="/contact-us"
                className="text-white text-base font-semibold hover:opacity-80 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                href="/quote"
                className="bg-white text-[#04A1FF] px-12 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors mt-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>

              {/* Contact Info Section */}
              <div className="mt-12 space-y-1 text-white">
                <h3 className="text-sm font-semibold">Phone</h3>
                <a href="tel:02033221905" className="text-sm">0203 322 1905</a>
                
                <h3 className="text-sm font-semibold mt-6">Email</h3>
                <a href="mailto:sales@vizionfinance.co.uk" className="text-sm">sales@vizionfinance.co.uk</a>
                
                <h3 className="text-sm font-semibold mt-6">Business Hours</h3>
                <p className="text-sm">Monday to Friday 09:00 - 20:30</p>
                <p className="text-sm">Saturday 10:00 - 19:00</p>
                <p className="text-sm">Sunday 10:00 - 17:00</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
