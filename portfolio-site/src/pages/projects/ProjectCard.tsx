import type { JSX } from "react";


export interface Project {
    projectName: string;
    projectDescription: string[];
    skillsUsed: string[];
    projectImageSrc?: string;
}

interface ProjectCardProps {
    project: Project;
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
    return (
        <div className="flex gap-[80px] pl-[70px] pr-[120px] py-[20px] border-2 rounded-[20px]">
            <img src="x" alt="Project Image" className="size-[160px] min-w-[160px] bg-gray-300"/>
            <div className="text-[24px]">
                <h2 className="text-[36px] font-bold">{props.project.projectName}</h2>
                <ul className="list-disc pl-5">
                {props.project.projectDescription.map((descriptionPoint, index) => {
                    return (
                        <li key={index}>{descriptionPoint}</li>
                    );
                })}
                </ul>
                <div>Skills: {props.project.skillsUsed.join(", ")}</div>
            </div>
        </div>
    );
}

export default ProjectCard;
