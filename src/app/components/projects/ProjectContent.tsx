import { getProjects, getServices } from "@/app/lib/data";
import GridProjects from "./GridProjects";
import ProjectServiceList from "./ProjectServiceList";

export default async function ProjectContent() {
  const projects = await getProjects();
  //   const services = await getServices();

  return (
    <div className="flex flex-col overflow-hidden bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-no-repeat pt-8 pb-16">
      <div className="grid sm:grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 mx-auto">
          <ProjectServiceList projects={projects} />
        </div>
        <div className="col-span-2">
          <GridProjects projects={projects} />
        </div>
      </div>
    </div>
  );
}
