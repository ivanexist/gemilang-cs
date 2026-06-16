import { motion } from "framer-motion";
import Link from "next/link";

const Hero1 = () => (
  <section className="bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url(https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Gedung-Barak-Siswa-Lantamal-VI/Side-2.jpg)] bg-cover bg-center bg-no-repeat sm:h-screen">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mx-auto max-w-screen-xl text-white h-screen">
        <div className="sm:col-span-1 lg:col-span-2 sm:my-40 md:my-60 pr-2">
          <div className="sm:mx-4 lg:mx-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="w-full my-4 flex sm:justify-center lg:justify-start text-3xl lg:text-5xl font-bold uppercase sm:text-center lg:text-left drop-shadow-lg"
            >
              <h1>Commitment for Excellence</h1>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              exit={{ opacity: 0 }}
              className="w-full mb-4 mt-2 lg:my-8 flex lg:justify-start lg:text-left text-lg text-white/90 drop-shadow-md"
            >
              <p>
                Dengan sumber daya dan relasi yang luas, kami siap bersinergi
                menawarkan kerjasama yang produktif untuk menghasilkan karya
                yang berkualitas.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.4,
                type: "tween",
                stiffness: 110,
                duration: 1,
              }}
            >
              <div className="flex justify-center items-center lg:justify-start lg:items-start lg:text-left">
                <Link
                  href="/kontak"
                  className="flex cursor-pointer py-4 px-8 my-8 bg-blue-600 text-white sm:text-base md:text-lg font-semibold justify-center items-center hover:bg-blue-500 transition-all duration-300 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="sm:col-span-1 lg:col-span-2">
          <div className="flex sm:justify-center sm:items-center md:justify-end md:items-end ">
            <svg
              className="h-screen text-white opacity-10 transform sm:hidden lg:block z-10"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Scroll down indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
    >
      <span className="text-white/60 text-xs uppercase tracking-widest mb-2 font-light">Gulir ke bawah</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white/60">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero1;
