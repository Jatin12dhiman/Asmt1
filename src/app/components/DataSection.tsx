import Image from 'next/image';
import React from 'react';


const DataSection = () => {
  const cards = [
    { name: "Lucident", top: "Top info Lucident", bottom: "Bottom info Lucident" },
    { name: "MORANCE", top: "Top info MORANCE", bottom: "Bottom info MORANCE", tracking: "tracking-[0.25em]" },
    { name: "invarion", top: "Top info invarion", bottom: "Bottom info invarion" },
    { name: "MARCO'<br />PIERRE", top: "Top info MARCO' PIERRE", bottom: "Bottom info MARCO' PIERRE", bold: true },
    { name: "Eisner Stering", top: "Top info Eisner Stering", bottom: "Bottom info Eisner Stering" },
    { name: "Continuum.ai", top: "Top info Continuum.ai", bottom: "Bottom info Continuum.ai", tracking: "tracking-[0.25em]" },
    { name: "DUNHAM & CO.", top: "Top info DUNHAM & CO.", bottom: "Bottom info DUNHAM & CO." },
    { name: "Gridpoint", top: "Top info Gridpoint", bottom: "Bottom info Gridpoint", bold: true },
  ];

  return (
    <section className="bg-white text-black py-20 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Side: Text and Card */}
        <div className="flex flex-col space-y-6">
          <p className="text-lg font-semibold text-gray-500 ">Seamless automation</p>
          <h2 className="leading-tight tracking-tight">
            <span className="block text-3xl md:text-4xl lg:text-[40px] font-semibold text-black">
              Make smarter, faster decisions
            </span>
            <span className="block text-3xl md:text-4xl lg:text-[38px] font-semibold text-gray-400">
              with real-time data and actionable insight.
            </span>
          </h2>

          {/* Composite metric card */}
          <div className="mt-8 md:mt-10 flex w-full max-w-xl items-stretch ">
            <div className="flex-shrink-0 w-20 md:w-24 rounded-l-md bg-gradient-to-br from-orange-500 via-red-600 to-purple-700 flex flex-col items-center justify-center gap-2">
              <img
                src="/Images/h.svg"
                alt="Custom Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>

            <div className="flex-1 bg-[#f3f2f1] rounded-r-md px-5 py-4 md:px-6 md:py-5 shadow-sm ml-2">
              <p className="text-4xl md:text-5xl font-semibold text-black">$1.3bn</p>
              <p className="mt-1 text-sm md:text-base text-gray-700 font-medium">Revenue generated for our partners</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mt-8 lg:mt-0 w-full">
          <Image
            src="/Images/cpl.webp"
            alt="Happy couple using a tablet"
            width={1000}
            height={700}
            className="rounded-md shadow-lg w-full h-auto"
            priority={false}
          />
        </div>
      </div>

      {/* Social proof / brands - Centered below */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Customers love Artifact.
        </h3>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Over 1,000 companies rely on Artifact to power their business.
        </p>

        <div className="mt-8">
          {/* Mobile / tablet: horizontal scroll */}
          <div className="flex gap-4 min-w-max marquee-row lg:hidden overflow-x-hidden">
            {[...cards, ...cards.slice(0, 2)].map((card, idx) => (
              <div key={idx} className="flex-shrink-0 relative bg-[#f6f3ef] rounded-sm h-50 md:h-60 w-48 md:w-60 flex items-center justify-center shadow-sm overflow-hidden group">
                <span
                  className={`text-gray-500 text-lg md:text-xl font-semibold group-hover:text-black transition-colors duration-500 ${card.tracking || ""} ${card.bold ? "font-extrabold leading-tight text-center" : ""}`}
                  dangerouslySetInnerHTML={{ __html: card.name }}
                />
                <span className="absolute top-2 left-0 w-full text-center text-sm md:text-base text-black font-medium opacity-0 transform ">
                  {card.top}
                </span>
                <span className="absolute bottom-2 left-0 w-full text-center text-sm md:text-base text-black font-medium opacity-0 transform ">
                  {card.bottom}
                </span>
              </div>
            ))}
          </div>

          {/* Large screens: 4x2 grid */}
          <div className="hidden lg:grid grid-cols-4 gap-4 max-w-5xl mx-auto">
            {cards.map((card, idx) => (
              <div key={idx} className="relative bg-[#f6f3ef] rounded-sm h-24 md:h-60 flex items-center justify-center shadow-sm overflow-hidden group">
                <span
                  className={`text-gray-500 text-lg md:text-xl font-semibold group-hover:text-black transition-colors duration-700 ${card.tracking || ""} ${card.bold ? "font-extrabold leading-tight text-center" : ""}`}
                  dangerouslySetInnerHTML={{ __html: card.name }}
                />
                <span className="absolute top-2 left-0 w-full text-center text-sm md:text-base text-black font-medium opacity-0 transform translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
                  {card.top}
                </span>
                <span className="absolute bottom-2 left-0 w-full text-center text-sm md:text-base text-black font-medium opacity-0 transform translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
                  {card.bottom}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default DataSection;
