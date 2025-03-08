import React, { useState, useEffect, RefObject } from 'react';

interface ScrollIndicatorProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
  showOnlyOnHover?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  scrollContainerRef,
  showOnlyOnHover = false,
  onPrevious,
  onNext
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(container.scrollWidth - container.scrollLeft - container.clientWidth > 20);
    };

    // Initial check
    checkScroll();

    // Add event listener
    container.addEventListener('scroll', checkScroll);
    
    // Cleanup
    return () => {
      container.removeEventListener('scroll', checkScroll);
    };
  }, [scrollContainerRef]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const scrollLeft = () => {
    if (onPrevious) {
      onPrevious();
    } else {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (onNext) {
      onNext();
    } else {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  const shouldShow = showOnlyOnHover ? isHovering : true;

  return (
    <>
      {shouldShow && showLeftArrow && (
        <div 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10 transition-opacity duration-300"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      )}
      {shouldShow && showRightArrow && (
        <div 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10 transition-opacity duration-300"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;