import { prisma } from "./prisma";

// Get all clients
export async function getClients() {
  return await prisma.client.findMany();
}

// get client by ID
export async function getClientById(id: number) {
  const client = await prisma.client.findUnique({ where: { id } });
  return client?.name ?? "Client Not Found";
}

// Get all services
export async function getServices() {
  return await prisma.service.findMany();
}

// Get service by ID
export async function getServiceBySlug(slug: string) {
  const service = await prisma.service.findUnique({ where: { url: slug } });
  if (!service) return null;

  return {
    ...service,
    description: Array.isArray(service.description)
      ? (service.description as {
          description_complete?: string;
          description_overview?: string;
          description_contact_us?: string;
          description_service_consultant?: string;
          description_our_services_includes?: string;
        }[])
      : [],
  };
}

// Get all projects with client and service
export async function getProjects() {
  return await prisma.project.findMany({
    include: {
      Client: true,
      Service: true,
    },
  });
}

// Get project by slug
export async function getProjectBySlug(slug: string) {
  const project = await prisma.project.findUnique({
    where: { url: slug },
    include: {
      Client: true,
      Service: true,
    },
  });

  if (!project) return null;

  return {
    ...project,
    description: Array.isArray(project.description)
      ? (project.description as {
          paragraph1?: string;
          paragraph2?: string;
          paragraph3?: string;
        }[])
      : [],
  };
}

export async function fetchProjectsSlugs() {
  return await prisma.project.findMany({
    select: { url: true },
  });
}

export async function fetchServicesSlugs() {
  return await prisma.service.findMany({
    select: { url: true },
  });
}
