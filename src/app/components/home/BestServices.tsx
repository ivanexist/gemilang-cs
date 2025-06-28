import Link from "next/link";
import BestServiceCard from "./BestServicesCard";
import { getServices } from "@/app/lib/data";

export default async function BestServices() {
  const services = await getServices();

  return (
    <div className=" flex flex-col pt-12 pb-12 overflow-hidden bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-repeat">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="font-bold mt-8 mb-16 pb-2 text-blue-600 text-3xl font-PlayfairDisplay w-fit text-center mx-auto">
            BEST SERVICES
          </h1>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 sm:place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto text-center">
        {services.slice(0, 3).map((service) => (
          <BestServiceCard
            key={service.id}
            service={service}
            serviceId={service.id}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-16 mb-8">
        <Link href="/services">
          <button className="py-4 px-8 bg-malachite-600 hover:bg-malachite-500 text-white font-semibold text-xl cursor-pointer uppercase">
            All Services
          </button>
        </Link>
      </div>
    </div>
  );
}
