import React, { useState } from "react";
import images from "../data/galleryImages.json";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [yearFilter, setYearFilter] = useState("all");

  // Years
  const years = [
    { id: "all", name: "All Years", count: images.length },
    {
      id: "2024",
      name: "2024",
      count: images.filter((img) => img.year === 2024).length,
    },
    {
      id: "2025",
      name: "2025",
      count: images.filter((img) => img.year === 2025).length,
    },
  ];

  // Apply year filter
  const filteredImages = images
    .filter((img) => {
      const yearMatch =
        yearFilter === "all" || img.year.toString() === yearFilter;
      return yearMatch;
    })
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return b.id - a.id;
    });

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-8">
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Memories of Quizzing.
          </p>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Year Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {years.map((year) => (
            <button
              key={year.id}
              onClick={() => setYearFilter(year.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 backdrop-blur-lg border border-white/20 
                ${
                  yearFilter === year.id
                    ? "bg-accent-cyan text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {year.name} ({year.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              className="group bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg hover:shadow-accent-cyan/40 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer p-0 text-left w-full"
              onClick={() => openModal(image)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(image);
                }
              }}
              aria-label={`View ${image.caption || "image"} in full size`}
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
                <img
                  src={image.src}
                  alt={image.caption || "Gallery image"}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Caption Below Image */}
              {image.caption && (
                <div className="p-4">
                  <p className="text-white text-sm text-center line-clamp-2 group-hover:text-accent-cyan transition-colors duration-200">
                    {image.caption}
                  </p>
                </div>
              )}

              {/* Fallback spacing if no caption */}
              {!image.caption && <div className="p-2"></div>}
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 
                           w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-40"
              >
                <span className="text-3xl font-bold">✕</span>
              </button>

              {/* Prev */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white 
                           hover:text-gray-300 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-black bg-opacity-40"
              >
                <span className="text-4xl">‹</span>
              </button>

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white 
                           hover:text-gray-300 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-black bg-opacity-40"
              >
                <span className="text-4xl">›</span>
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-full object-contain rounded-xl"
              />

              {/* Caption */}
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-center">
                    {selectedImage.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
