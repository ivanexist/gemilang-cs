import { motion } from "framer-motion";
import Link from "next/link";

const Hero3 = () => (
  <section className=" bg-[linear-gradient(to_top,rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url(https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pembangunan-Jalan/Proses-2-jalan.jpeg)] bg-cover bg-center bg-no-repeat sm:h-[40rem] lg:h-screen">
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
          <div className="sm:mx-4 md:mx-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="w-full my-4 flex sm:justify-center lg:justify-start text-3xl lg:text-4xl font-bold uppercase sm:text-center lg:text-left text-blumine-950"
            >
              <h1>Commitment for Excellence</h1>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              exit={{ opacity: 0 }}
              className="w-full mb-4 mt-2 lg:my-8 flex lg:justify-start lg:text-left text-lg text-blumine-950"
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
                <div className="flex w-1/3 cursor-pointer py-3 px-6 my-8 border-2 text-blumine-950 border-blumine-950 md:text-lg font-semibold  justify-center items-center  hover:text-white hover:bg-blumine-950 transition duration-300">
                  <Link href="/contact">
                    <p>Contact Us</p>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="sm:col-span-1 lg:col-span-2">
          <div className="flex sm:justify-center sm:items-center md:justify-end md:items-end">
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
  </section>
);

export default Hero3;
