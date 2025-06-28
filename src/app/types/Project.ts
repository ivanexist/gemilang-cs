export interface ProjectDescription {
  paragraph1: string;
  paragraph2?: string;
  paragraph3: string;
}

export interface Project {
  id: number;
  clientId: number;
  serviceId: number;
  name: string;
  description: ProjectDescription;
  location: string;
  yearCompleted: number;
  images: string[];
  url: string;
}
