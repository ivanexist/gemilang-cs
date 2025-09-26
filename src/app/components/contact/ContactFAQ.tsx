import { motion } from "framer-motion";
const faqs = [
  {
    questionEn: "What types of construction projects do you handle?",
    questionId: "Jenis proyek konstruksi apa yang Anda tangani?",
    answerEn:
      "We handle various construction projects including building construction, road development, housing projects, pipe installation, steel construction, drainage systems, and renovation works.",
    answerId:
      "Kami menangani berbagai proyek konstruksi termasuk pembangunan gedung, pembangunan jalan, proyek perumahan, instalasi pipa, konstruksi baja, sistem drainase, dan pekerjaan renovasi.",
  },
  {
    questionEn: "How long does a typical project take?",
    questionId: "Berapa lama waktu yang dibutuhkan untuk proyek biasa?",
    answerEn:
      "Project duration varies depending on scope and complexity. Small projects may take 2-6 months, while larger infrastructure projects can take 1-2 years. We provide detailed timelines during consultation.",
    answerId:
      "Durasi proyek bervariasi tergantung pada ruang lingkup dan kompleksitas. Proyek kecil mungkin memerlukan 2-6 bulan, sementara proyek infrastruktur besar dapat memakan waktu 1-2 tahun. Kami menyediakan jadwal terperinci selama konsultasi.",
  },
  {
    questionEn: "Do you provide free consultations?",
    questionId: "Apakah Anda menyediakan konsultasi gratis?",
    answerEn:
      "Yes, we offer free initial consultations to discuss your project requirements, timeline, and provide preliminary cost estimates.",
    answerId:
      "Ya, kami menawarkan konsultasi awal gratis untuk membahas kebutuhan proyek Anda, jadwal, dan memberikan perkiraan biaya awal.",
  },
  {
    questionEn: "What areas do you serve?",
    questionId: "Area mana saja yang Anda layani?",
    answerEn:
      "We primarily serve East Java and surrounding areas, with our main office in Surabaya. We can also handle projects in other parts of Indonesia for larger scale developments.",
    answerId:
      "Kami terutama melayani Jawa Timur dan sekitarnya, dengan kantor utama di Surabaya. Kami juga dapat menangani proyek di bagian lain Indonesia untuk pembangunan skala besar.",
  },
];
const ContactFAQ = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-masala-900 mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-xl text-masala-600">
            Jawaban atas pertanyaan yang sering diajukan tentang layanan kami.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div>
                <div className="p-6 border border-gray-200 rounded-lg bg-white  shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-lg font-semibold mb-6 text-masala-800">
                    {faq.questionId}
                  </h4>
                  <p className="text-masala-600">{faq.answerId}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactFAQ;
