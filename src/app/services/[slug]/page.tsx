import Breadcrumb from "@/app/components/common/Breadcrumb";
import ServiceDetails from "@/app/components/services/ServiceDetails";
import {
  fetchServicesSlugs,
  getServiceBySlug,
  getServices,
} from "@/app/lib/data";
// import type { PageProps } from "next";
interface ServiceDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const servicesList = await getServices();

  if (!service) {
    return <div className="text-center text-red-500">Service Not Found</div>;
  }

  return (
    <div>
      <Breadcrumb serviceName={service?.name} />
      <div className="">
        <ServiceDetails service={service} servicesList={servicesList} />
      </div>
    </div>
  );
}
export const revalidate = 60;
export async function generateStaticParams() {
  const services = await fetchServicesSlugs();
  return services.map((service) => ({ slug: service.url }));
}
