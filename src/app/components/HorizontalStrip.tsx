'use client';

import React, { useRef } from "react";
import Image from "next/image";
import "../globals.css";
const Items = () => (
  <div className="flex items-center gap-6 md:gap-10 lg:gap-16 whitespace-nowrap shrink-0">
    <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold ml-8">Grow quicker.</h2>
    <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">Build better.</h2>
    
    <div className="relative h-8 w-8 md:h-16 md:w-20 rounded-lg overflow-hidden shrink-0">
      <Image src="/Images/Bg.jpg" alt="chip" fill className="object-cover" />
      <Image
        src="/Images/image 1.svg"
        alt="overlay"
        fill
        sizes="(max-width: 768px) 2rem, 5rem"
        className="absolute object-contain p-1"
      />
    </div>

    <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">Ideate faster.</h2>
    <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">Work smarter.</h2>
    
    <div className="relative h-8 w-8 md:h-16 md:w-20 rounded-lg overflow-hidden shrink-0">
      <Image src="/Images/Bg.jpg" alt="chip" fill className="object-cover" />
      <Image
        src="/Images/image 1.svg"
        alt="overlay"
        fill
        sizes="(max-width: 768px) 2rem, 5rem"
        className="absolute object-contain "
      />
    </div>
  </div>
);


function HorizontalStrip() {
 
  return (
    <section className="bg-black text-white py-6 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="overflow-hidden">
          <div
           
            className="flex gap-6 marquee-row cursor-pointer"
            style={{ width: "fit-content" }}
          
          >
            {/* Duplicate Items for seamless loop */}
            <Items />
            <Items  aria-hidden="true" />
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalStrip;
