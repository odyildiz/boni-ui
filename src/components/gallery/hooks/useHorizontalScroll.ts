import { useEffect, RefObject } from 'react';

interface UseHorizontalScrollProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
  hasMore: boolean;
  onLoadMore: () => void;
  threshold?: number;
}

/**
 * Custom hook to handle horizontal scrolling with infinite loading
 */
const useHorizontalScroll = ({
  scrollContainerRef,
  hasMore,
  onLoadMore,
  threshold = 300
}: UseHorizontalScrollProps) => {
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollWidth - (scrollLeft + clientWidth) < threshold && hasMore) {
        onLoadMore();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      container.scrollLeft += e.deltaY;
      handleScroll();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef, hasMore, onLoadMore, threshold]);
};

export default useHorizontalScroll;