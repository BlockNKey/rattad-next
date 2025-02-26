"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const items = [
  "Esindused ja kontaktid",
  "Minu otsingud ja lemmikud",
  "Rattad24 äriklientidele",
  "Rattad24 äriklientidele",
];

const RecentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  let startX = 0;
  let scrollLeft = 0;
  let isDragging = false;

  const handleDotClick = (index: number) => {
    if (!sliderRef.current) return;
    const itemWidth = 130;
    sliderRef.current.scrollTo({ left: index * itemWidth, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    isDragging = true;
    const slider = sliderRef.current;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const itemWidth = 130;
    const newIndex = Math.round(sliderRef.current.scrollLeft / itemWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full overflow-hidden px-5">
      <div
        ref={sliderRef}
        className="scrollbar-hide flex cursor-grab gap-[10px] overflow-x-auto transition-transform duration-500"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray flex w-[125px] flex-shrink-0 flex-col justify-center gap-3 rounded-lg p-3 pr-4"
          >
            <Image src="file.svg" width={20} height={18} alt="repesent" />
            <div className="small-body-bold">{item}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`size-[3px] rounded-full ${currentIndex === index ? "bg-[#797979]" : "bg-[#E2E2E2]"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentCarousel;
