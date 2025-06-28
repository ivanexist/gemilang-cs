import Breadcrumb from "@/app/components/common/Breadcrumb";
import ServiceDetails from "@/app/components/services/ServiceDetails";
import {
  fetchServicesSlugs,
  getServiceBySlug,
  getServices,
} from "@/app/lib/data";

interface ServiceDetailsPageProps {
  params: {
    slug: string;
  };
}

export default async function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const service = await getServiceBySlug(params.slug);
  const servicesList = await getServices();

  if (isNaN(service))
    <div className="text-center text-red-500">Invalid service ID</div>;

  if (!service)
    <div className="text-center text-red-500">Service Not Found</div>;

  return (
    <div>
      <Breadcrumb serviceName={service?.name} />
      <div className="">
        <ServiceDetails service={service} servicesList={servicesList} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const services = await fetchServicesSlugs();
  return services.map((service) => ({ slug: service.url }));
}
