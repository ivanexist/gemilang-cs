"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  {
    questionId: "Jenis proyek konstruksi apa yang Anda tangani?",
    answerId:
      "Kami menangani berbagai proyek konstruksi termasuk pembangunan gedung, pembangunan jalan, proyek perumahan, instalasi pipa, konstruksi baja, sistem drainase, dan pekerjaan renovasi.",
  },
  {
    questionId: "Berapa lama waktu yang dibutuhkan untuk proyek biasa?",
    answerId:
      "Durasi proyek bervariasi tergantung pada ruang lingkup dan kompleksitas. Proyek kecil mungkin memerlukan 2-6 bulan, sementara proyek infrastruktur besar dapat memakan waktu 1-2 tahun. Kami menyediakan jadwal terperinci selama konsultasi.",
  },
  {
    questionId: "Apakah Anda menyediakan konsultasi gratis?",
    answerId:
      "Ya, kami menawarkan konsultasi awal gratis untuk membahas kebutuhan proyek Anda, jadwal, dan memberikan perkiraan biaya awal.",
  },
  {
    questionId: "Area mana saja yang Anda layani?",
    answerId:
      "Kami terutama melayani Jawa Timur dan sekitarnya, dengan kantor utama di Surabaya dan Sidoarjo. Kami juga dapat menangani proyek di bagian lain Indonesia untuk pembangunan skala besar.",
  },
  {
    questionId: "Bagaimana proses memulai proyek dengan Anda?",
    answerId:
      "Prosesnya dimulai dengan konsultasi awal untuk memahami kebutuhan Anda, dilanjutkan dengan survei lokasi, pembuatan rencana dan estimasi biaya, penandatanganan kontrak, lalu pelaksanaan proyek dengan pemantauan berkala hingga serah terima.",
  },
];

const ContactFAQ = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase font-openSans">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-masala-900 mb-6 font-PlayfairDisplay leading-tight">
            Pertanyaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-malachite-600">Umum</span>
          </h2>
          <p className="text-masala-500 text-lg font-openSans font-light max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban atas pertanyaan yang sering diajukan seputar layanan, prosedur operasional, dan area jangkauan kami.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion.Item
                  value={`faq-${index}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 data-[state=open]:border-blue-500 data-[state=open]:shadow-xl data-[state=open]:shadow-blue-900/5"
                >
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer group outline-none">
                    <div className="flex items-center gap-6 flex-1">
                      <span className="w-12 h-12 rounded-xl bg-gray-50 group-data-[state=open]:bg-blue-600 text-gray-400 group-data-[state=open]:text-white flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors duration-500">
                        Q{index + 1}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-masala-800 group-data-[state=open]:text-blue-700 transition-colors duration-300 pr-4 font-PlayfairDisplay">
                        {faq.questionId}
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 group-data-[state=open]:bg-malachite-500 group-data-[state=open]:border-malachite-500 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500 group-data-[state=open]:text-white group-data-[state=open]:rotate-45 transition-transform duration-500"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </Accordion.Trigger>
                  
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp bg-gray-50/50">
                    <div className="px-6 pb-8 md:px-8 pl-[88px] md:pl-[104px]">
                      <div className="border-l-2 border-malachite-400 pl-6 py-2">
                        <p className="text-masala-600 text-base md:text-lg leading-relaxed font-openSans font-light">
                          {faq.answerId}
                        </p>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
