"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const cards = [
    {
      id: 1,
      title: "Agents for Anything",
      description:
        "Artifact synchronizes enterprise data across distributed sources for continuous operational intelligence.",
      frontImage: "/Images/Fe1.avif",
      backgroundImage: "/Images/Bg.jpg",
    },
    {
      id: 2,
      title: "Manage Instances",
      description:
        "Through intelligent protocols, Artifact delivers continuous data harmonization across ecosystems.",
      frontImage: "/Images/Fe2.avif",
      backgroundImage: "/Images/Bg.jpg",
    },
    {
      id: 3,
      title: "Seamless Integrations",
      description:
        "Effortlessly connect with your existing tools and workflows for maximum efficiency.",
      frontImage: "/Images/Fe3.avif",
      backgroundImage: "/Images/Bg.jpg",
    },
    {
      id: 4,
      title: "Real-time Insights",
      description:
        "Gain actionable intelligence instantly with Artifact’s real-time analytics and monitoring.",
      frontImage: "/Images/Fe4.avif",
      backgroundImage: "/Images/Bg.jpg",
    }
  ];

  return (
    <section className="bg-[#f7f4f0] text-black py-20 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Main Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mx-auto max-w-[20ch] text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Automation that actually understands you
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Deploy Artifact&apos;s proven optimization protocols for sustainable
            growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 mx-2 md:mx-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative overflow-hidden rounded-sm ring-1 ring-black/5 flex flex-col h-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Top visual area */}
              <div className="relative w-full bg-[#eae6e2] overflow-hidden min-h-[260px] md:min-h-[400px] pt-4">
                {/* Background image */}
                <motion.div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={card.backgroundImage}
                    alt="Background effect"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Foreground image */}
                <motion.div
                  className="relative z-10 transition-transform duration-500 m-6 md:m-8 group-hover:scale-108 group-hover:-translate-y-2 p-8"
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full aspect-[16/9] flex items-center justify-center">
                    <Image
                      src={card.frontImage}
                      alt={card.title}
                      fill
                      className={`object-contain rounded-lg 
                        ${card.id === 2 ? "translate-x-[40%] scale-125" : ""} 
                        ${card.id === 4 ? "translate-y-[20%] scale-133" : ""}`}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Bottom content */}
              <motion.div
                className="w-full bg-white p-4 sm:p-5 md:p-6 text-left flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-base sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-snug text-sm sm:text-sm md:text-base font-normal">
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Support Banner */}
        <motion.div
          className="mt-16 bg-black text-white rounded-xl px-4 py-6 max-w-3xl mx-auto shadow-sm md:hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col items-center text-center gap-3">
            <Image src="/Images/Fe5.avif" alt="Support" width={64} height={64} className="rounded-full ring-2 ring-white/10" />
            <p className="text-base font-semibold">Hello <span className="align-middle">👋</span> I’m Jake from support.</p>
            <p className="text-gray-300 text-sm max-w-xl">Let me know if you have any questions about Artifact.</p>
            <button className="mt-3 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">Contact us</button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 hidden md:flex items-center justify-between bg-black text-white rounded-full px-6 py-4 md:px-10 md:py-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <Image src="/Images/Fe5.avif" alt="Support" width={50} height={50} className="rounded-full" />
            <div>
              <p className="font-semibold">Hello 👋 I’m Jake from support.</p>
              <p className="text-gray-300 text-sm md:text-base">Let me know if you have any questions about Artifact.</p>
            </div>
          </div>
          <button
            className="relative bg-white text-black px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors hover:bg-gray-200 focus:outline-none focus:ring-0 active:outline-none"
          >
            <span className="block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
              Contact us
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 bg-black text-white">
              Contact us
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
