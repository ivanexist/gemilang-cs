import { create } from "zustand";
import data from "@/app/json/gcsdata.json";
// import { getProjects } from "@/app/lib/data";

// Define interfaces for the data structures basedon the JSON
export interface Client {
  id: number;
  name: string;
  description: string;
  logo: string;
  city: string;
  country: string;
}
interface ServiceDescription {
  description_new: string[];
  description_complete: string;
  description_overview: string;
  description_key_benefits: string[];
  description_our_process: string[];
}

export interface Service {
  id: number;
  url: string;
  name: string;
  icon: string;
  image: string;
  description: ServiceDescription[];
}

interface ProjectDescription {
  summary: string;
  overview: string;
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
}

export interface Project {
  id: number;
  clientid: number;
  serviceid: number;
  name: string;
  description: ProjectDescription[];
  location: string;
  yearcompleted: string;
  url: string;
  images: string[];
  Client: Client;
  Service: Service;
}

interface StoreState {
  clients: Client[];
  services: Service[];
  projects: Project[];
  setServices: (services: Service[]) => void;
  setProjects: (projects: Project[]) => void;
  getServices: () => Service[];
  getProjects: () => Project[];
  getClientById: (id: number) => Client | undefined;
  getServiceById: (id: number) => Service | undefined;
  getServiceByUrl: (url: string) => Service | undefined;
  getProjectById: (id: number) => Project | undefined;
  getProjectByUrl: (url: string) => Project | undefined;
  getProjectsByClientId: (clientId: number) => Project[];
  getProjectsByServiceId: (serviceId: number) => Project[];
  getProjectsByServiceUrl: (serviceUrl: string) => Project[];
}

// Create the Zustand store
export const useStore = create<StoreState>((set, get) => ({
  clients: data.Client,
  services: data.Service,
  projects: data.Project,
  setServices: (services) =>
    set({
      services: services.map((service) => ({
        ...service,
        id: service.id,
      })),
    }),
  setProjects: (projects) =>
    set({
      projects: projects.map((project) => ({
        ...project,
        id: project.id,
        clientId: project.clientid,
        serviceId: project.serviceid,
        Client: {
          ...project.Client,
          id: project.Client.id,
        },
        Service: {
          ...project.Service,
          id: project.Service.id,
        },
      })),
    }),
  // Retrieve all services
  getServices: () => get().services,
  // Retrieve all projects
  getProjects: () => get().projects,
  //   Retrieve a client by ID
  getClientById: (id: number) => {
    return get().clients.find((client) => client.id === id);
  },
  //   Retrieve a service by ID
  getServiceById: (id: number) => {
    return get().services.find((service) => service.id === id);
  },
  //   Retrieve a service by URL
  getServiceByUrl: (url: string) =>
    get().services.find((service) => service.url === url),
  //   Retrieve a project by ID
  getProjectById: (id: number) => {
    return get().projects.find((project) => project.id === id);
  },
  //   Retrieve a project by URL
  getProjectByUrl: (url: string) =>
    get().projects.find((project) => project.url === url),
  //   Retrieve projects by client ID
  getProjectsByClientId: (clientId: number) => {
    return get().projects.filter((project) => project.clientid === clientId);
  },
  //   Retrieve projects by service ID
  getProjectsByServiceId: (serviceId: number) => {
    return get().projects.filter((project) => project.serviceid === serviceId);
  },
  //   Retrieve projects by service URL
  getProjectsByServiceUrl: (serviceUrl: string) => {
    const service = get().getServiceByUrl(serviceUrl);
    if (!service) return [];
    return get().getProjectsByServiceId(service.id);
  },
}));
