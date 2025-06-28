export interface ServiceDescription {
  description_complete: string;
  description_overview: string;
  description_contact_us?: string;
  description_service_consultant?: string;
  description_our_services_includes?: string;
}

export interface Service {
  id: number;
  url: string;
  name: string;
  icon: string;
  image: string;
  description: ServiceDescription;
}
