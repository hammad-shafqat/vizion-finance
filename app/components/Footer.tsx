"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00273A] text-white py-12 relative">
      <div className="container mx-auto px-2 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - Company Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/VF-Logo.svg" 
                alt="Vizion Finance Logo" 
                width={180} 
                height={50}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              Vizion Autos Ltd t/a Vizion finance is an authorised credit broker, not a lender, registered in England, company 
              registration number: 12299957. We are authorised and regulated by the Financial Conduct Authority under reference 
              number 920157. The registered office address 330 Centennial Park, Centennial Avenue, WD6 3TJ.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              We can introduce you to a limited number of finance providers on our panel depending on your credit rating and 
              affordability. By introducing your details, we receive a commission from our finance partners/lenders. This is a fixed 
              service or figure and may vary by lender/partner, however this will never impact the rate or acceptance level you are 
              provided. Further information can be supplied on request. There is no fee charged by us for arranging the car 
              financing or car warranty, but some lenders may charge a fee. All finance is subject to status and income. Written 
              quotations are available on request. ICO Number ZA798078.
            </p>
          </div>

          {/* Middle Section - Where Next Links */}
          <div className="md:pl-12">
            <h3 className="text-2xl font-bold mb-6">Where Next?</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="flex items-center text-gray-300 hover:text-[#00d4ff] transition-colors text-base">
                  <FaArrowRight className="mr-2 text-xs" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="flex items-center text-gray-300 hover:text-[#00d4ff] transition-colors text-base">
                  <FaArrowRight className="mr-2 text-xs" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="flex items-center text-gray-300 hover:text-[#00d4ff] transition-colors text-base">
                  <FaArrowRight className="mr-2 text-xs" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/complaint" className="flex items-center text-gray-300 hover:text-[#00d4ff] transition-colors text-base">
                  <FaArrowRight className="mr-2 text-xs" />
                  Make a Complaint
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="flex items-center text-gray-300 hover:text-[#00d4ff] transition-colors text-base">
                  <FaArrowRight className="mr-2 text-xs" />
                  Disclosure
                </Link>
              </li>
              <li>
                <Link href="/temporary-insurance" className="flex items-center text-gray-300 hover:text-[#00d4ff] transition-colors text-base">
                  <FaArrowRight className="mr-2 text-xs" />
                  Temporary Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#00d4ff] flex-shrink-0" />
                <span className="text-gray-300 text-base">
                  330 Centennial Park, Centennial Avenue, WD6 3TJ
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#00d4ff] flex-shrink-0" />
                <a href="mailto:sales@vizionfinance.co.uk" className="text-gray-300 hover:text-[#00d4ff] transition-colors text-base">
                  sales@vizionfinance.co.uk
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-[#00d4ff] flex-shrink-0" />
                <a href="tel:+02033221905" className="text-gray-300 hover:text-[#00d4ff] transition-colors text-base">
                  +02033 322 1905
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button - Only visible in footer */}
      <a
        href="https://wa.me/02033221905"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors z-50"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </footer>
  );
};

export default Footer;
