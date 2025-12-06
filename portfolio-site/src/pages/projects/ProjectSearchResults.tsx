import type { JSX } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./Project";


interface ProjectSearchResultsProps {
    projectList: Project[];
}

function ProjectSearchResults(props: ProjectSearchResultsProps): JSX.Element {
    if(props.projectList.length==0) {
        return (
            <div className="flex justify-center text-[24px] font-bold">No matching projects found</div>
        );
    }
    return (
        <div className="flex flex-col gap-[30px] px-[70px]">
            {props.projectList.map((project, index): JSX.Element => {
                return (
                    <ProjectCard project={project} key={index}/>
                );
            })}
        </div>
    );
}

export default ProjectSearchResults;
