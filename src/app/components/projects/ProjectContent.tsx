import { getProjects } from "@/app/lib/data";
import GridProjects from "./GridProjects";
import ProjectServiceList from "./ProjectServiceList";
// import RelatedProjects from "./RelatedProjects";

export default async function ProjectContent() {
  const projects = await getProjects();
  //   const services = await getServices();

  return (
    <div className="flex flex-col overflow-hidden bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-no-repeat pt-8">
      <div className="max-w-screen-xl w-full mx-auto grid sm:grid-cols-1 md:grid-cols-3">
        <div className="col-span-1">
          <ProjectServiceList projects={projects} />
        </div>
        <div className="col-span-2">
          <GridProjects projects={projects} />
        </div>
      </div>
      <div className="w-full mx-auto text-center bg-malachite-400 p-16 text-white">
        <h2 className="text-4xl font-bold">Punya Proyek Konstruksi?</h2>
        <p className="text-lg mt-4">
          Mari diskusikan bagaimana kami dapat membantu mewujudkan visi proyek
          Anda dengan kualitas terbaik
        </p>
        <button className="bg-white rounded-lg text-malachite-400 font-semibold px-6 py-3 mt-6 hover:bg-malachite-600 hover:text-white hover:cursor-pointer transition duration-300">
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}
