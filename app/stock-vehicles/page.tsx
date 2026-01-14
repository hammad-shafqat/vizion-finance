"use client";

import { useState, useMemo } from "react";
import CarCard from "../components/CarCard";
import HeroSection from "../components/HeroSection";
import carsData from "../data/cars.json";

interface Filters {
  keyword: string;
  make: string;
  model: string;
  minPrice: string;
  maxPrice: string;
}

export default function StockVehicles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    keyword: "",
    make: "",
    model: "",
    minPrice: "",
    maxPrice: ""
  });
  const carsPerPage = 12;

  // Filter cars based on search criteria
  const filteredCars = useMemo(() => {
    return carsData.filter((car) => {
      // Keyword filter - searches in year, bodyType, mileage, engineSize, horsepower, transmission, fuelType, specification
      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        const matchesKeyword = 
          car.year.toLowerCase().includes(keyword) ||
          car.bodyType.toLowerCase().includes(keyword) ||
          car.mileage.toLowerCase().includes(keyword) ||
          car.engineSize.toLowerCase().includes(keyword) ||
          car.horsepower.toLowerCase().includes(keyword) ||
          car.transmission.toLowerCase().includes(keyword) ||
          car.fuelType.toLowerCase().includes(keyword) ||
          car.specification.toLowerCase().includes(keyword);
        if (!matchesKeyword) return false;
      }

      // Make filter
      if (filters.make && car.make !== filters.make) {
        return false;
      }

      // Model filter
      if (filters.model && car.model !== filters.model) {
        return false;
      }

      // Price filter
      if (filters.minPrice || filters.maxPrice) {
        const carPrice = parseFloat(car.price.replace(/[£,]/g, ""));
        if (filters.minPrice && carPrice < parseFloat(filters.minPrice)) {
          return false;
        }
        if (filters.maxPrice && carPrice > parseFloat(filters.maxPrice)) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  // Calculate pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (searchFilters: Filters) => {
    setFilters(searchFilters);
    setCurrentPage(1); // Reset to first page when filters change
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeroSection onSearch={handleSearch} />
      
      {/* Cars Listing Section */}
      <section className="pb-8">
        <div className="container mx-auto">
          {/* Title and Subtitle */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Browse <span className="text-[#04A1FF]">stock</span> Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              Choose your next car from one of our <span className="text-[#04A1FF]">stock</span> dealerships
            </p>
          </div>

          {currentCars.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl font-bold text-gray-900 mb-2">No vehicles found</p>
              <p className="text-gray-600">Try adjusting your search filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
              {currentCars.map((car) => (
              <CarCard
                key={car.id}
                image={car.image}
                price={car.price}
                make={car.make}
                model={car.model}
                specification={car.specification}
                year={car.year}
                bodyType={car.bodyType}
                mileage={car.mileage}
                engineSize={car.engineSize}
                horsepower={car.horsepower}
                transmission={car.transmission}
                fuelType={car.fuelType}
                history={car.history}
                location={car.location}
                financePrice={car.financePrice}
              />
            ))}
            </div>
          )}

          {/* Pagination Controls */}
          {filteredCars.length > 0 && (
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="p-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ 
                background: currentPage === 1 
                  ? "linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)" 
                  : "linear-gradient(135deg, #04A1FF 0%, #0284C7 100%)"
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.background = "linear-gradient(135deg, #0390e6 0%, #0273a8 100%)";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.background = "linear-gradient(135deg, #04A1FF 0%, #0284C7 100%)";
                }
              }}
            >
              <span className="flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </span>
            </button>

            <div className="bg-gradient-to-br from-[#04A1FF]/10 to-blue-50 px-6 py-3 rounded-xl border-2 border-[#04A1FF]/20">
              <span className="text-lg font-bold text-gray-800">
                <span className="text-[#04A1FF] text-xl">{currentPage}</span> of <span className="text-gray-600">{totalPages}</span>
              </span>
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="p-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ 
                background: currentPage === totalPages 
                  ? "linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)" 
                  : "linear-gradient(135deg, #04A1FF 0%, #0284C7 100%)"
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.background = "linear-gradient(135deg, #0390e6 0%, #0273a8 100%)";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.background = "linear-gradient(135deg, #04A1FF 0%, #0284C7 100%)";
                }
              }}
            >
              <span className="flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
          )}
        </div>
      </section>
    </>
  );
}
