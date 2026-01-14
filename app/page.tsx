import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-[#04A1FF]">Vizion Finance</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Find your dream car with flexible financing options
        </p>
        <Link
          href="/stock-vehicles"
          className="inline-block px-8 py-4 text-lg font-bold text-white rounded-xl shadow-lg hover:shadow-xl "
          style={{ 
            background: "linear-gradient(135deg, #04A1FF 0%, #0284C7 100%)"
          }}
        >
          Browse Stock Vehicles
        </Link>
      </div>
    </div>
  );
}
