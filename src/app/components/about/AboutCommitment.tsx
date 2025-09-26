"use client";
import { motion } from "framer-motion";
const AboutCommitment = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(120,85%,45%)] to-[hsl(130,45%,70%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Komitmen Kami</h2>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Seiring dengan program pemerintah tentang pembangunan
            berkesinambungan serta penggunaan energi alternatif, maka merupakan
            komitmen bagi kami untuk mampu berkarya sebaik mungkin, sehingga
            program pemerataan pembangunan untuk semua masyarakat dapat
            terlayani dan tercukupi dengan baik.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCommitment;
