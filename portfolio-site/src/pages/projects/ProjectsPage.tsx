import React, { useEffect, useState, type JSX } from "react";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectSearchResults from "./ProjectSearchResults";
import fullProjectList from "../../data/projectList.json";
import type { Project } from "./Project";
import ReactGA4 from "react-ga4";


function ProjectsPage(): JSX.Element {
    useEffect(() => {
        ReactGA4.send({hitType: "pageview", page: "/projects", title: "Projects"});
    }, []);

    const [projectList, setProjectList] = useState<Project[]>(
        fullProjectList.sort((proj1: Project, proj2: Project) => (proj2.visibilityScore || 0) - (proj1.visibilityScore || 0))
    );

    const isRelevantToSearch = (content: string, search: string): boolean => content.toLowerCase().includes(search.toLowerCase());

    const handleSearchUpdate: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery: string = event.target.value;
        setProjectList((): Project[] => {
            return fullProjectList.filter((project: Project) => {
                return isRelevantToSearch(project.projectName, searchQuery) || 
                    project.projectDescription.some((descriptionPoint: string) => isRelevantToSearch(descriptionPoint, searchQuery)) || 
                    project.skillsUsed.some((skill: string) => isRelevantToSearch(skill, searchQuery));
            });
        });
        if(searchQuery.length > 0) {
            ReactGA4.event("project_search", {searchValue: searchQuery});
        }
    }
    
    return (
        <div className="flex flex-col gap-[50px] pb-[20px]">
            <ProjectSearchBar onSearchUpdate={handleSearchUpdate}/>
            <ProjectSearchResults projectList={projectList}/>
        </div>
    );
}

export default ProjectsPage;
