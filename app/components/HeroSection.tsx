"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import carsData from "../data/cars.json";

interface HeroSectionProps {
  onSearch: (filters: {
    keyword: string;
    make: string;
    model: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [showPricePopup, setShowPricePopup] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPriceError, setMinPriceError] = useState("");
  const [maxPriceError, setMaxPriceError] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const pricePopupRef = useRef<HTMLDivElement>(null);

  // Extract unique makes from cars data
  const makes = useMemo(() => {
    const uniqueMakes = [...new Set(carsData.map(car => car.make))];
    return uniqueMakes.sort();
  }, []);

  // Extract models based on selected make
  const models = useMemo(() => {
    if (!selectedMake) return [];
    const filteredModels = carsData
      .filter(car => car.make === selectedMake)
      .map(car => car.model);
    return [...new Set(filteredModels)].sort();
  }, [selectedMake]);

  // Reset model when make changes
  useEffect(() => {
    setSelectedModel("");
  }, [selectedMake]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pricePopupRef.current && !pricePopupRef.current.contains(event.target as Node)) {
        setShowPricePopup(false);
      }
    };

    if (showPricePopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPricePopup]);

  const handleMinPriceChange = (value: string) => {
    if (value === "" || parseFloat(value) >= 0) {
      setMinPrice(value);
      setMinPriceError("");
      
      // Check if max price is set and if min is greater than max
      if (maxPrice && value && parseFloat(value) >= parseFloat(maxPrice)) {
        setMinPriceError("Min price must be less than max price");
      } else {
        setMaxPriceError(""); // Clear max price error if it was about being less than min
      }
    }
  };

  const handleMaxPriceChange = (value: string) => {
    if (value === "" || parseFloat(value) >= 0) {
      setMaxPrice(value);
      setMaxPriceError("");
      
      // Check if min price is set and if max is less than min
      if (minPrice && value && parseFloat(value) <= parseFloat(minPrice)) {
        setMaxPriceError("Max price must be greater than min price");
      } else {
        setMinPriceError(""); // Clear min price error if it was about being greater than max
      }
    }
  };

  const handleApplyPrice = () => {
    // Final validation before closing
    if (minPrice && maxPrice && parseFloat(minPrice) >= parseFloat(maxPrice)) {
      setMinPriceError("Min price must be less than max price");
      setMaxPriceError("Max price must be greater than min price");
      return;
    }
    setShowPricePopup(false);
  };

  return (
    <section className="relative py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden rounded-2xl md:rounded-3xl">
          <Image
            src="/car-flyer.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 -mt-6 sm:-mt-8 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl lg:rounded-full shadow-2xl px-4 sm:px-6 md:px-6 lg:px-6 py-4 md:py-5 lg:py-4">
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-3 md:gap-4 lg:gap-3 items-stretch md:items-center">
            {/* Keyword Input */}
            <div className="flex-1 md:min-w-[180px] lg:min-w-[150px] w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full px-4 py-3 md:py-3 text-sm sm:text-base border border-gray-200 md:border md:border-gray-200 lg:border-none focus:outline-none bg-transparent rounded-lg md:rounded-lg lg:rounded-none focus:ring-2 focus:ring-[#04A1FF] md:focus:ring-2 lg:focus:ring-0"
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Divider - Hidden on mobile and md, shown on lg */}
            <div className="hidden lg:block h-10 w-px bg-gray-200"></div>

            {/* Make Dropdown */}
            <div className="flex-1 md:min-w-[140px] lg:min-w-[120px] w-full md:w-auto">
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-bold text-gray-700 mb-1">Make</label>
                <div className="relative">
                  <select 
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-200 md:border md:border-gray-200 lg:border-none focus:outline-none bg-transparent appearance-none cursor-pointer rounded-lg md:rounded-lg lg:rounded-none focus:ring-2 focus:ring-[#04A1FF] md:focus:ring-2 lg:focus:ring-0">
                    <option value="">Any</option>
                    {makes.map((make) => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Divider - Hidden on mobile and md, shown on lg */}
            <div className="hidden lg:block h-10 w-px bg-gray-200"></div>

            {/* Model Dropdown */}
            <div className="flex-1 md:min-w-[140px] lg:min-w-[120px] w-full md:w-auto">
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-bold text-gray-700 mb-1">Model</label>
                <div className="relative">
                  <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    disabled={!selectedMake}
                    className={`w-full px-3 py-2 text-sm sm:text-base border border-gray-200 md:border md:border-gray-200 lg:border-none focus:outline-none bg-transparent appearance-none rounded-lg md:rounded-lg lg:rounded-none focus:ring-2 focus:ring-[#04A1FF] md:focus:ring-2 lg:focus:ring-0 ${!selectedMake ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
                    <option value="">Any</option>
                    {models.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                  <svg
                    className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none ${!selectedMake ? 'opacity-50' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Price Input */}
            <div className="flex-1 md:min-w-[140px] lg:min-w-[120px] w-full md:w-auto relative" ref={pricePopupRef}>
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-bold text-gray-700 mb-1">Price</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select price range"
                    value={minPrice && maxPrice ? `£${minPrice} - £${maxPrice}` : minPrice ? `From £${minPrice}` : maxPrice ? `Up to £${maxPrice}` : "Select price range"}
                    onClick={() => setShowPricePopup(!showPricePopup)}
                    readOnly
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-200 md:border md:border-gray-200 lg:border-none focus:outline-none bg-transparent cursor-pointer rounded-lg md:rounded-lg lg:rounded-none focus:ring-2 focus:ring-[#04A1FF] md:focus:ring-2 lg:focus:ring-0"
                  />
                </div>
              </div>

              {/* Price Popup */}
              {showPricePopup && (
                <div className="absolute top-full mt-2 left-0 right-0 sm:left-0 sm:right-auto md:left-0 bg-white rounded-2xl shadow-2xl p-4 w-full sm:w-64 md:w-72 lg:w-64 z-50 border border-gray-100">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-bold text-gray-800">Price Range</h3>
                    
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Min Price</label>
                      <input
                        type="number"
                        placeholder="£0"
                        value={minPrice}
                        onChange={(e) => handleMinPriceChange(e.target.value)}
                        min="0"
                        className={`w-full px-3 py-2 border-2 ${minPriceError ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                      />
                      {minPriceError && (
                        <p className="text-xs text-red-500 mt-1">{minPriceError}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Max Price</label>
                      <input
                        type="number"
                        placeholder="£100,000"
                        value={maxPrice}
                        onChange={(e) => handleMaxPriceChange(e.target.value)}
                        min="0"
                        className={`w-full px-3 py-2 border-2 ${maxPriceError ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                      />
                      {maxPriceError && (
                        <p className="text-xs text-red-500 mt-1">{maxPriceError}</p>
                      )}
                    </div>

                    <button
                      onClick={handleApplyPrice}
                      className="text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                      style={{ backgroundColor: '#04A1FF' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0390e6'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#04A1FF'}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto lg:w-auto">
              <button 
                onClick={() => {
                  onSearch({
                    keyword,
                    make: selectedMake,
                    model: selectedModel,
                    minPrice,
                    maxPrice
                  });
                }}
                className="cursor-pointer text-white font-bold px-6 sm:px-8 md:px-10 lg:px-8 py-3 sm:py-4 md:py-4 lg:py-4 text-base sm:text-lg rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full md:w-auto"
                style={{ backgroundColor: '#04A1FF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0390e6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#04A1FF'}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
