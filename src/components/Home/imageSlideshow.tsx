import React, { useState, useEffect, useRef } from 'react';

const ImageSlideshow: React.FC<{ images: string[] }> = ({ images }) => {
  // Duplicate images to create a continuous loop effect
  const extendedImages = [images[images.length - 1], ...images, images[0]];
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real image
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTransitioning) {
      timeoutRef.current = setTimeout(() => {
        handleNext();
      }, 3000); // Change image every 3 seconds
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => {
      if (currentIndex === extendedImages.length - 2) {
        setCurrentIndex(1); // Reset to the first real image after reaching the clone
        containerRef.current!.style.transition = 'none'; // Disable transition for reset
      }
      setIsTransitioning(false);
    }, 1000); // Duration of the transition effect
  };

  const handlePrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => {
      if (currentIndex === 0) {
        setCurrentIndex(extendedImages.length - 2); // Reset to the last real image after reaching the clone
        containerRef.current!.style.transition = 'none'; // Disable transition for reset
      }
      setIsTransitioning(false);
    }, 1000); // Duration of the transition effect
  };

  const handleTransitionEnd = () => {
    // Re-enable smooth transition when not resetting
    containerRef.current!.style.transition = 'transform 1s ease-in-out';
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative ">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        ref={containerRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-64 md:h-96 flex-shrink-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: index === currentIndex ? 'none' : 'blur(10px)',
            }}
          ></div>
        ))}
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 bg-opacity-50 p-2 text-white"
        onClick={handlePrevious}
        disabled={isTransitioning}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 bg-opacity-50 p-2 text-white"
        onClick={handleNext}
        disabled={isTransitioning}
      >
        ›
      </button>
    </div>
  );
};

export default ImageSlideshow;
