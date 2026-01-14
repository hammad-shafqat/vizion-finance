"use client";

import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaMapMarkerAlt } from "react-icons/fa";

interface CarCardProps {
  image: string;
  price: string;
  make: string;
  model: string;
  specification: string;
  year: string;
  bodyType: string;
  mileage: string;
  engineSize: string;
  horsepower: string;
  transmission: string;
  fuelType: string;
  history: string;
  location: string;
  financePrice: string;
}

export default function CarCard({
  image,
  price,
  make,
  model,
  specification,
  year,
  bodyType,
  mileage,
  engineSize,
  horsepower,
  transmission,
  fuelType,
  history,
  location,
  financePrice,
}: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden max-w-xl group border border-gray-100">
      <div className="flex flex-col">
        {/* Car Image */}
        <div className="relative w-full h-52 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <Image
            src={image}
            alt={`${make} ${model}`}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 text-2xl transition-all duration-300 rounded-full p-2 bg-transparent hover:scale-110 cursor-pointer "
          >
            {isFavorite ? (
              <FaHeart className="text-[#04A1FF] drop-shadow-lg" />
            ) : (
              <FaRegHeart className="text-[#04A1FF] drop-shadow-lg" />
            )}
          </button>
        </div>

        {/* Car Details */}
        <div className="p-4 flex flex-col gap-2.5">
          {/* Price and Car Name in one line */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-2xl font-extrabold text-gray-900 whitespace-nowrap">{price}</h3>
            <h2 className="text-lg font-bold text-gray-800 truncate transition-all text-right">
              {make} <span className="text-[#04A1FF]">{model}</span>
            </h2>
          </div>

          {/* Specification */}
          <div className="overflow-hidden relative bg-gradient-to-r from-gray-50 to-transparent rounded-lg px-2.5 py-1.5">
            <p className="text-sm text-gray-600 whitespace-nowrap group-hover:animate-slide">
              {specification}
            </p>
          </div>

          {/* Specifications */}
          <div className="overflow-hidden bg-gray-50 rounded-lg px-2.5 py-1.5 relative">
            <p className="text-xs text-gray-700 whitespace-nowrap group-hover:animate-slide">
              <span className="font-semibold text-[#04A1FF]">{year}</span>
              <span className="text-gray-400"> • </span>
              <span>{bodyType}</span>
              <span className="text-gray-400"> • </span>
              <span>{mileage}</span>
              <span className="text-gray-400"> • </span>
              <span>{engineSize}</span>
              <span className="text-gray-400"> • </span>
              <span>{horsepower}</span>
              <span className="text-gray-400"> • </span>
              <span>{transmission}</span>
              <span className="text-gray-400"> • </span>
              <span>{fuelType}</span>
              <span className="text-gray-400"> • </span>
              <span className="text-gray-500 italic">{history}</span>
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-end gap-1.5 text-[#04A1FF] text-sm bg-[#04A1FF]/5 rounded-lg px-2.5 py-1.5">
            <FaMapMarkerAlt className="flex-shrink-0 text-xs" />
            <span className="truncate font-medium">{location}</span>
          </div>

          {/* Finance Section */}
          <div className="border-t border-gray-100 pt-2.5 mt-1">
            <div className="flex items-center justify-between mb-2.5 bg-gradient-to-br from-[#04A1FF]/5 to-blue-50 rounded-lg px-3 py-2">
              <p className="text-xs text-gray-600 font-medium">Finance from</p>
              <div className="text-right">
                <p className="text-2xl font-extrabold text-[#04A1FF]">{financePrice}*</p>
                <p className="text-[10px] text-gray-500 font-medium">Per Month</p>
              </div>
            </div>
            <button
              className="w-full text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-md cursor-pointer "
              style={{ 
                background: "linear-gradient(135deg, #FF9500 0%, #FF8000 100%)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #e68600 0%, #e67300 100%)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #FF9500 0%, #FF8000 100%)")}
            >
              Apply for Finance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
