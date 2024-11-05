import { useEffect, useMemo, useState } from "react";

// Custom hook to check if the device is mobile, with memoization
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const memoizedIsMobile = useMemo(() => {
    if (typeof window !== "undefined") {
      return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
    return false;
  }, []); // Empty dependency array ensures this only runs once

  useEffect(() => {
    setIsMobile(memoizedIsMobile);
  }, [memoizedIsMobile]);

  return isMobile;
}
