import ServiceCard from "./ServiceCard";
import { getServices } from "@/app/lib/data";

export default async function ServicesContent() {
  const services = await getServices();

  return (
    <div className="flex flex-col pt-12 pb-24 overflow-hidden bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-xl w-full mx-auto grid sm:grid-cols-1 sm:place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            serviceId={service.id}
          />
        ))}
      </div>
    </div>
  );
}
