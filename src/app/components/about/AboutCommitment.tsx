"use client";

import { motion } from "framer-motion";

const AboutCommitment = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark corporate background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900" />

      {/* Decorative large quote icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-PlayfairDisplay select-none pointer-events-none" style={{ fontSize: '400px', lineHeight: 1 }}>
        &quot;
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-200" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Small accent line */}
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-PlayfairDisplay tracking-wide">
            Komitmen Kami
          </h2>
          
          <div className="relative">
            {/* Small quote icon for the text block */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500 absolute -top-4 -left-4 md:-left-8 opacity-50">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.022 4.573 2.665 6.051a11.542 11.542 0 00-1.114 2.594zM10.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" />
            </svg>
            
            <p className="text-xl md:text-2xl text-blue-50 font-openSans font-light leading-relaxed max-w-4xl mx-auto italic relative z-10">
              "Seiring dengan program pemerintah tentang pembangunan
              berkesinambungan serta penggunaan energi alternatif, maka merupakan
              komitmen utama bagi kami untuk mampu berkarya sebaik mungkin, sehingga
              program pemerataan pembangunan untuk semua masyarakat dapat
              terlayani dan tercukupi dengan baik."
            </p>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500 absolute -bottom-4 -right-4 md:-right-8 opacity-50 transform rotate-180">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.022 4.573 2.665 6.051a11.542 11.542 0 00-1.114 2.594zM10.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-3">
            <div className="w-12 h-px bg-blue-500/50" />
            <span className="text-blue-300 text-sm font-semibold tracking-widest uppercase">PT Gemilang Cipta Sentosa</span>
            <div className="w-12 h-px bg-blue-500/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCommitment;
