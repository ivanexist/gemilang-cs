import Breadcrumb from "../components/common/Breadcrumb";
// import GridProjects from "../components/projects/GridProjects";
import ProjectContent from "../components/projects/ProjectContent";

export default function ProjectsPage() {
  return (
    <div>
      <Breadcrumb />
      <div className="">
        <ProjectContent />
      </div>
    </div>
  );
}
