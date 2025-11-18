import type { JSX } from "react";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectSearchResults from "./ProjectSearchResults";
import projectList from "../../data/projectList.json";


function ProjectsPage(): JSX.Element {
    return (
        <div className="flex flex-col gap-[50px] pb-[20px]">
            <ProjectSearchBar/>
            <ProjectSearchResults projectList={projectList}/>
        </div>
    );
}

export default ProjectsPage;
