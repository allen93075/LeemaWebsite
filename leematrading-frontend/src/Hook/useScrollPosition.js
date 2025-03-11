import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollY(window.scrollY);
    };

    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return scrollY;
};

export default useScrollPosition;