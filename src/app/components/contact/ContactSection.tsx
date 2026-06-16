"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-masala-950 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-malachite-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-PlayfairDisplay">
                  Mari Berdiskusi
                </h2>
                <p className="text-blue-100/80 mb-12 font-openSans font-light leading-relaxed">
                  Kami siap membantu mewujudkan proyek impian Anda. Hubungi kami melalui salah satu kontak di bawah ini atau kunjungi kantor kami secara langsung.
                </p>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-malachite-500 group-hover:border-malachite-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Kantor Pusat</h4>
                      <p className="text-blue-100/90 font-openSans leading-relaxed text-sm">
                        Jl. Semeru 382, Pepelegi<br />
                        Kecamatan Waru<br />
                        Sidoarjo, Jawa Timur 61256
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Telepon / WhatsApp</h4>
                      <p className="text-blue-100/90 font-openSans leading-relaxed text-sm">
                        +62 31 8522710<br />
                        Senin - Jumat: 08:00 - 17:00 WIB
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-amber-500 group-hover:border-amber-400 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Email</h4>
                      <p className="text-blue-100/90 font-openSans leading-relaxed text-sm">
                        gemilangciptasentosa@gmail.com<br />
                        Dukungan email 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-masala-900 font-PlayfairDisplay mb-2">Kirim Pesan</h3>
              <p className="text-masala-500 font-openSans text-sm">
                Isi form di bawah ini dan tim kami akan segera merespon pesan Anda.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-masala-700 font-openSans">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-openSans text-masala-800"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-masala-700 font-openSans">Email *</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-openSans text-masala-800"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-masala-700 font-openSans">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    placeholder="08123456789"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-openSans text-masala-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-masala-700 font-openSans">Kategori Layanan</label>
                  <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-openSans text-masala-800 appearance-none">
                    <option value="">Pilih Layanan</option>
                    <option value="pembangunan-gedung">Pembangunan Gedung</option>
                    <option value="pembangunan-jalan">Pembangunan Jalan</option>
                    <option value="konstruksi-baja">Konstruksi Baja</option>
                    <option value="pekerjaan-tanah">Pekerjaan Tanah</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-masala-700 font-openSans">Pesan Anda *</label>
                <textarea 
                  rows={4}
                  placeholder="Ceritakan detail proyek atau pertanyaan Anda di sini..."
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-openSans text-masala-800 resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="button" // Change to submit if wired to API
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Kirim Pesan
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
