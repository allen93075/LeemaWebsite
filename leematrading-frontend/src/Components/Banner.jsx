"use client"
import Image from "next/image";
import useScrollPosition from "../Hook/useScrollPosition"

const Banner = () => {
  const scrollY = useScrollPosition();
  const transparency = Math.max(1 - scrollY / 300, 0);

  return (
    <div
      className="relative w-full"
      style={{
        opacity: transparency,
        transform: `translateY(${transparency * 30}px)`,
        transition: "opacity 0.3s, transform 0.3s",
      }}
    >
      <div className="relative w-full h-[40vh]">
        <Image
          src="/Banner.png"
          alt="Company Banner"
          quality={100}
          fill={true}
          priority={true}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
          <p className="mt-4 text-lg max-w-2xl">
            Redefining global trade with precision, innovation, and excellence.
            <br />
            Discover the future of seamless business solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;