"use client";
import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-white text-black py-20 px-2 md:px-4 lg:px-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
        
        {/* Left Side Content */}
        <motion.div
          className="flex-1 max-w-2xl text-center md:text-left "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-gray-600 mb-2 font-semibold">Welcome to Artifact</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
            <span className='inline'> Streamline operations in </span>one unified platform
          </h1>
          <p className="text text-gray-800 mb-8 font-semibold">
            Artifact’s unified platform transforms scattered insights into optimized
            automation technical knowledge optional.
          </p>
          <button
            className="relative bg-black text-white px-6 py-3 rounded-full text-sm font-medium overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-0 active:outline-none"
          >
            <span className="block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
              Get Started
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Get Started
            </span>
          </button>

          <div className="flex items-center justify-center md:justify-start mt-4">
            <p className="mr-2 text-gray-500">G2</p>
            <div className="flex text-gray-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-500">620+ Reviews</span>
          </div>
        </motion.div>

        {/* Right Side Cards */}
        <motion.div
          className="flex-1 grid gap-2 w-full max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-full">
            {/* Image Card */}
            <motion.div
              className="relative w-full pb-[100%] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/Images/ass1.webp"
                alt="Man looking forward"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </motion.div>

            {/* Black Text Card */}
            <motion.div
              className="relative rounded-lg bg-black text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between h-auto sm:h-72 md:h-96"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug antialiased">
                65% Increase
                <span className="block text-gray-400 text-sm sm:text-base md:text-lg">
                  in operational efficiency
                </span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2 sm:mt-4 font-semibold">
                From customers who used Artifact for at least 12 months.
              </p>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <motion.div
            className="relative rounded-lg h-36 w-full overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Image
              src="/Images/Bg.jpg"
              alt="Sales trends background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover cursor-pointer"
              priority={false}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="flex items-center gap-2 bg-[#2b2524]/90 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg backdrop-blur-sm border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 opacity-90" fill="currentColor">
                  <path d="M3 3h2v18H3zM7 7h2v14H7zM11 11h2v10h-2zM15 5h2v16h-2zM19 9h2v12h-2z"/>
                </svg>
                <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
                  Summarize trends from Q1 sales data
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
