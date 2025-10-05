"use client";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import ServiceDetails from "@/app/components/services/ServiceDetails";
// import { getServiceBySlug, getServices } from "@/app/lib/data";
import { useStore } from "@/store/useStore";
import { useParams } from "next/navigation";
// import type { PageProps } from "next";
// interface ServiceDetailsPageProps {
//   params: Promise<{ slug: string }>;
// }
// export const dynamic = "force-dynamic"; // this page will be server-side rendered on every request
// export const dynamicParams = true; // enable runtime fallback

export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { getServiceByUrl, getServices } = useStore();
  const service = getServiceByUrl(slug);
  const servicesList = getServices();

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
