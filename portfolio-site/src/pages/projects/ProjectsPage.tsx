import React, { useState, type JSX } from "react";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectSearchResults from "./ProjectSearchResults";
import fullProjectList from "../../data/projectList.json";
import type { Project } from "./ProjectCard";


function ProjectsPage(): JSX.Element {
    const [projectList, setProjectList] = useState<Project[]>(
        fullProjectList.sort((proj1: Project, proj2: Project) => (proj2.visibilityScore || 0) - (proj1.visibilityScore || 0))
    );

    const isRelevantToSearch = (content: string, search: string): boolean => content.toLowerCase().includes(search);

    const handleSearchUpdate: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery: string = event.target.value;
        setProjectList((): Project[] => {
            return fullProjectList.filter((project: Project) => {
                return isRelevantToSearch(project.projectName, searchQuery) || 
                    project.projectDescription.some((descriptionPoint: string) => isRelevantToSearch(descriptionPoint, searchQuery)) || 
                    project.skillsUsed.some((skill: string) => isRelevantToSearch(skill, searchQuery));
            });
        });
    }
    
    return (
        <div className="flex flex-col gap-[50px] pb-[20px]">
            <ProjectSearchBar onSearchUpdate={handleSearchUpdate}/>
            <ProjectSearchResults projectList={projectList}/>
        </div>
    );
}

export default ProjectsPage;
