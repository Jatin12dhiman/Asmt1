"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  const testimonials = [
    { id: 1, name: "José Morales", title: "Head of Innovation", quote: "We expected performance improvements, but the strategic implementation delivered unprecedented operational excellence.", image: "/Images/Cs1.webp" },
    { id: 2, name: "Andrew Ye", title: "Product Strategy Lead", quote: "Beyond the clear ROI metrics, what stood out was how the solution scaled with our strategic objectives.", image: "/Images/Cs2.webp" },
    { id: 3, name: "Sarah Chen", title: "Operations Director", quote: "The implementation exceeded our expectations and transformed our entire workflow process.", image: "/Images/Cs3.webp" },
    { id: 4, name: "Michael Torres", title: "Chief Technology Officer", quote: "Artifact's solution provided the scalability and reliability we needed for our growing business.", image: "/Images/Cs4.webp" }
  ];

  useEffect(() => {
    const updateCards = () => setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  const maxIndex = testimonials.length - cardsPerView;
  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));

  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } };
  const bounceHover = { scale: [1, 1.05, 1], transition: { duration: 0.4 } };

  return (
    <div className="container mx-auto px-2 md:px-4 lg:px-4 py-12 bg-white">
      
      {/* Header */}
      <motion.div className="mb-12 text-left" initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.h1 className="text-5xl font-semibold text-gray-900 mb-6" variants={fadeUp}>
          See why customers use Artifact <br />
          to power their businesses
        </motion.h1>

        <motion.button
          className="relative bg-black text-white px-6 py-3 rounded-full text-sm font-medium overflow-hidden group transition-colors hover:bg-gray-800"
          variants={fadeUp}
          whileHover="hover"
          whileTap="hover"
        >
          <span className="block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">Customer stories</span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">Customer stories</span>
        </motion.button>
      </motion.div>

      {/* Testimonials Slider */}
      <motion.div className="relative overflow-hidden" initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (cardsPerView === 1 ? 100 : 50)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex-shrink-0 w-full md:w-1/2 px-0"
              variants={fadeUp}
            >
              <div className="relative h-[600px] sm:h-[460px] md:h-[430px] lg:h-[440px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Images/Bg.jpg"
                  alt="background"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'left bottom' }}
                />
                <div className="relative z-10 h-full p-3 sm:p-4">
                  <div className="h-full flex flex-col gap-3 md:grid md:grid-cols-2">
                    <div className="flex-shrink-0 h-[400px] sm:h-[350px] md:col-span-1 md:h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-[1px] md:min-h-[300px]">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3 md:col-span-1">
                      <div className="bg-white rounded-xl shadow border p-3 sm:p-4 md:p-5 flex-1 flex items-center md:min-h-[190px]">
                        <blockquote className="text-gray-900 text-sm sm:text-[15px] md:text-base leading-relaxed font-semibold">
                          {`"${testimonial.quote}"`}
                        </blockquote>
                      </div>
                      <div className="bg-white rounded-xl shadow border p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 text-[13px] sm:text-base">{testimonial.name}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-snug">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Arrows */}
      <div className="flex gap-3 mt-6 justify-center md:justify-start">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-400 hover:bg-gray-50'}`}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          disabled={currentIndex >= maxIndex}
          onClick={handleNext}
          className={`w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center transition-all ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-400 hover:bg-gray-50'}`}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* FAQ Section */}
      <motion.div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.2 } } }}>
        {[
          { q: 'What is Artifact?', a: 'Artifact is a SaaS platform that helps businesses automate workflows, integrate tools, and scale effortlessly with smart, intuitive software.' },
          { q: 'How does Artifact improve efficiency?', a: 'Artifact automates repetitive tasks, simplifies workflows, and provides real-time insights so teams can focus on strategic work instead of manual processes.' },
          { q: 'What support options do you offer?', a: 'We offer 24/7 customer support, a knowledge base, and dedicated account managers for enterprise customers.' },
          { q: 'Is Artifact secure?', a: 'Absolutely. We use enterprise-grade security, data encryption, and compliance standards to keep your information safe and operations running smoothly.' },
          { q: 'Who is Artifact for?', a: 'Artifact is designed for startups, growing businesses, and enterprises looking to streamline operations, reduce manual work, and make data-driven decisions.' },
          { q: 'Is there a free trial available?', a: "Yes! We offer a free trial so you can explore Artifact's features before committing. No credit card required to get started." },
        ].map((f, i) => (
          <motion.div key={i} className="bg-white rounded-xl shadow-lg p-5 md:p-6" variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } } }}>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{f.a}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div className="mt-16 md:mt-24 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.2 } } }}>
        <motion.p className="text-gray-600 text-sm md:text-base mb-4" variants={fadeIn}>
          If you have any further questions or just want to reach our team, click the button below.
        </motion.p>
        <motion.a
          href="#contact"
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium overflow-hidden group"
          whileHover={bounceHover}
        >
          <span className="block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
            Get in touch
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Get in touch
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default CustomerTestimonials;
