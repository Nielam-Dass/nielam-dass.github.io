import type { JSX } from "react";
import ProjectCard, { type Project } from "./ProjectCard";


interface ProjectSearchResultsProps {
    projectList: Project[];
}

function ProjectSearchResults(props: ProjectSearchResultsProps): JSX.Element {
    return (
        <div>
            {props.projectList.map((project, index): JSX.Element => {
                return (
                    <ProjectCard project={project} key={index}/>
                );
            })}
        </div>
    );
}

export default ProjectSearchResults;
