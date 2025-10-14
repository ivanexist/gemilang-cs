"use client";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";

const ContactSection = () => {
  return (
    <section className="pb-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-semibold ml-4 mb-4 pb-2 text-blue-600 text-4xl font-PlayfairDisplay   text-center">
            Hubungi Kami
          </h1>
          <h2 className="text-masala-400 text-xl font-openSans font-light max-w-3xl mx-auto mb-8">
            Siap memulai proyek konstruksi Anda? Hubungi kami untuk konsultasi
            dan penawaran gratis.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-masala-800 mb-6">
                  Kirim Pesan
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-masala-800 mb-2"
                      >
                        Nama Lengkap *
                      </label>
                      <input
                        id="name"
                        type="text"
                        // value={formData.name}
                        // onChange={(e) =>
                        //   handleInputChange("name", e.target.value)
                        // }
                        placeholder="Nama Lengkap Anda"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-background text-masala-600 placeholder-muted-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-masala-800 mb-2"
                      >
                        Alamat Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        // value={formData.email}
                        // onChange={(e) =>
                        //   handleInputChange("email", e.target.value)
                        // }
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-background text-masala-600 placeholder-muted-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-masala-800 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      // value={formData.phone}
                      // onChange={(e) =>
                      //   handleInputChange("phone", e.target.value)
                      // }
                      placeholder="+62 xxx-xxxx-xxxx"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-background text-masala-600 placeholder-muted-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-masala-800 mb-2"
                    >
                      Minat Layanan
                    </label>
                    <select
                      id="service"
                      // value={formData.service}
                      // onChange={(e) =>
                      //   handleInputChange("service", e.target.value)
                      // }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-background text-masala-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    >
                      <option value="" disabled>
                        Pilih layanan yang Anda butuhkan
                      </option>
                      {/* {services.map((service) => (
                        <option key={service.id} value={service.name}>
                          {language === "en" ? service.name : service.nameId}
                        </option>
                      ))} */}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-masala-800 mb-2"
                    >
                      Detail Proyek *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      // value={formData.message}
                      // onChange={(e) =>
                      //   handleInputChange("message", e.target.value)
                      // }
                      placeholder="Silahkan jelaskan kebutuhan proyek Anda secara singkat..."
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-background text-masala-600 placeholder-muted-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    // disabled={contactMutation.isPending}
                    className="w-full bg-[hsl(var(--construction-primary))] hover:bg-[hsl(var(--construction-primary))]/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                  >
                    {/* <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"} */}
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[hsl(207,90%,54%)] to-[hsl(220,70%,35%)] text-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(var(--construction-primary))] rounded-lg flex items-center justify-center flex-shrink-0">
                      {/* <MapPin className="text-white" size={20} /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-10 w-8 text-malachite-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Alamat Kantor
                      </h4>
                      <p className="text-muted-foreground">
                        Jl. Pagesangan Agung Baru No.44
                        <br />
                        Surabaya, Jawa Timur 60233
                        <br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(var(--construction-success))] rounded-lg flex items-center justify-center flex-shrink-0">
                      {/* <Phone className="text-white" size={20} /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-9 w-7 text-malachite-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Nomor Telepon
                      </h4>
                      <p className="text-muted-foreground">+ 62 31 8522710</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(var(--construction-accent))] rounded-lg flex items-center justify-center flex-shrink-0">
                      {/* <Mail className="text-white" size={20} /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-10 w-8 text-malachite-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <p className="text-muted-foreground">
                        gemilangciptasentosa@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(var(--construction-secondary))] rounded-lg flex items-center justify-center flex-shrink-0">
                      {/* <Clock className="text-white" size={20} /> */}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Jam Operasional
                      </h4>
                      <p className="text-muted-foreground">
                        Senin - Jumat: 08:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
