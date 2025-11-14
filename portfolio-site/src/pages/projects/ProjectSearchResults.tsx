import type { JSX } from "react";
import ProjectCard, { type Project } from "./ProjectCard";


interface ProjectSearchResultsProps {
    projectList: Project[];
}

function ProjectSearchResults(props: ProjectSearchResultsProps): JSX.Element {
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
