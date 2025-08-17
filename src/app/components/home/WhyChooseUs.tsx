import { UserCheck, Cog, ClipboardList, Award } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: UserCheck,
    title: "Experienced Leadership Team",
    description:
      "Pimpinan senior kami memiliki pengalaman lebih dari 15 tahun di industri konstruksi, memastikan setiap proyek mendapatkan manfaat dari keahlian yang terbukti dan wawasan strategis.",
  },
  {
    icon: Cog,
    title: "Advanced Construction Technology",
    description:
      "We leverage cutting-edge BIM software, drone surveying, and IoT monitoring systems to optimize construction processes and ensure precision in every build.",
  },
  {
    icon: ClipboardList,
    title: "Comprehensive Project Management",
    description:
      "From initial planning to final handover, our integrated project management approach ensures seamless execution, clear communication, and on-time delivery.",
  },
  {
    icon: Award,
    title: "Quality Assurance Processes",
    description:
      "Rigorous quality control protocols at every stage, backed by ISO 9001 certification and regular third-party inspections, guarantee superior construction standards.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            Mengapa Memilih PT Gemilang Cipta Sentosa?
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Inovasi dan standar keunggulan kami menjadi pembeda utama dalam
            dunia konstruksi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <reason.icon className="text-accent text-xl" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-secondary">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional construction team planning"
              className="rounded-xl shadow-lg w-full h-auto"
              width={800}
              height={600}
            />

            {/* Statistics Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-sm text-secondary">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-secondary">Safety Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
