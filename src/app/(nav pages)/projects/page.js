import Image from "next/image";
import bg from "../../../../public/background/project.png";
import ProjectList from "@/components/projects";
import { projectData } from "../../portfolioData";

export default function Projects() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed w-full h-full object-cover object-center opacity-90"
      />
      <div className="absolute w-full h-full bg-black opacity-70 -z-40"></div>
      <ProjectList projects={projectData} />
    </>
  );
}
