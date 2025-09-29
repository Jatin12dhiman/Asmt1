"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const stars = Array(5).fill(Star);

function TestimonialCard() {
  return (
    <div className="p-2 bg-white rounded shadow-sm max-w-sm border border-black/5">
      {/* Star Rating */}
      <div className="flex text-gray-800 mb-3">
        {stars.map((Icon, index) => (
          <Icon key={index} className="w-4 h-4 fill-gray-800" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-800 text-base leading-relaxed mb-4 font-semibold">
        Artifact has transformed how we handle costs while significantly
        increasing our direct revenue stream.
      </p>

      {/* Author/Avatar */}
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden mr-3 bg-gray-200">
          <Image
            src="/Images/ass2.webp"
            alt="Dave C"
            width={34}
            height={34}
            className="object-cover"
          />
        </div>
        <span className="text-sm font-semibold text-gray-800">Dave C</span>
      </div>
    </div>
  );
}

export default function Scaling() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#f7f4f0] px-4 py-16 md:px-8">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left: Heading, subtext, CTA, testimonial */}
        <motion.div className="order-2 md:order-1" variants={fadeLeft}>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-black">
            Effortless scaling.<br />
            No downtime.
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
            Artifact&apos;s unified platform transforms scattered insights into optimized automation—technical knowledge optional.
          </p>

          <motion.button
            className="relative mt-6 inline-flex items-center justify-center bg-black text-white px-5 py-3 rounded-full font-medium overflow-hidden group transition-colors hover:bg-black/90 focus:outline-none focus:ring-0 active:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
              Get Started
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Get Started
            </span>
          </motion.button>

          <div className="mt-7">
            <TestimonialCard />
          </div>
        </motion.div>

        {/* Right: Gradient-backed code panel with layered background */}
        <motion.div
          className="order-1 md:order-1 lg:order-2 relative w-full aspect-[4/3] md:h-[500px] overflow-hidden rounded-xl"
          variants={fadeRight}
        >
          {/* Background image */}
          <div className="absolute bottom-[10px] left-[6px] w-full h-full z-0 rounded-lg cursor-pointer overflow-hidden">
            <Image
              src="/Images/Bg.jpg"
              alt="Background"
              fill
              className="object-cover object-center rounded-lg cursor-pointer"
              priority
            />
          </div>

          {/* Foreground image */}
          <div className="absolute top-0 right-0 w-[95%] h-[95%] z-10 overflow-hidden rounded-lg">
            <Image
              src="/Images/htm1.avif"
              alt="Foreground"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover scale-110 origin-left-bottom rounded-xl ml-6 pb-6 "
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom 3 Columns */}
      <motion.div
        className="bg-[#f7f4f0] py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            title: "Automate workflows",
            desc: "and optimize efficiency with AI-powered task management solutions for any modern business."
          },{
            title: "Enhance collaboration",
            desc: "with intuitive productivity tools for diverse teams, projects, and remote work success worldwide."
          },{
            title: "Scale effortlessly",
            desc: "with cloud-native architecture designed for long-term business growth and sustained innovation."
          }].map((col, idx) => (
            <motion.div key={idx} className="flex flex-col" variants={fadeUp}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{col.title}</h3>
              <p className="text-gray-600">{col.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
