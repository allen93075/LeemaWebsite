import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScrollPosition = () => {
      setScrollY(window.scrollY);
    };

    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return scrollY ?? 0;
};

export default useScrollPosition;