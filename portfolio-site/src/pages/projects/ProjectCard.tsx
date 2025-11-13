import type { JSX } from "react";


export interface Project {
    projectName: string;
    projectDescription: string;
    skillsUsed: string[];
    projectImageSrc?: string;
}

interface ProjectCardProps {
    project: Project;
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
    return (
        <div className="border-1 m-1">
            <div>{props.project.projectName}</div>
            <div>{props.project.projectDescription}</div>
            <div>{props.project.skillsUsed.join(", ")}</div>
        </div>
    );
}

export default ProjectCard;
