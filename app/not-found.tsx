import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-[#04A1FF]">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/"
            className="bg-[#04A1FF] hover:bg-[#0390e6] text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors"
          >
            Go to Home
          </Link>
          <Link
            href="/contact-us"
            className="border-2 border-[#04A1FF] text-[#04A1FF] hover:bg-[#04A1FF] hover:text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
