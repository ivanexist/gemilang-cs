"use client";

import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="relative bg-slate-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-800 font-semibold text-xs tracking-wider uppercase">Lokasi Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-masala-900 font-PlayfairDisplay">
            Kunjungi <span className="text-blue-600">Kantor Kami</span>
          </h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-200 group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.8988636737526!2d112.72314981149488!3d-7.358249679124407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4d8fb85cdab%3A0xc5cfd3df9bfaf17f!2sPT.%20Gemilang%20Cipta%20Sentosa!5e0!3m2!1sen!2sid!4v1709623126245!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="transition-all duration-700 group-hover:filter-none"
          />

          {/* Floating Location Card Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-auto md:w-96 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-masala-900 font-PlayfairDisplay mb-1">PT Gemilang Cipta Sentosa</h4>
                <p className="text-sm text-masala-600 font-openSans leading-relaxed mb-4">
                  Jl. Semeru 382, Pepelegi, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256
                </p>
                <a 
                  href="https://maps.app.goo.gl/YourGoogleMapsLinkHere" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Dapatkan Arah Lokasi
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactMap;
