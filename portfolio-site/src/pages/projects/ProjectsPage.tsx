import type { JSX } from "react";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectSearchResults from "./ProjectSearchResults";


function ProjectsPage(): JSX.Element {
    const exampleProjectList = [
        {
            projectName: "Project 1",
            projectDescription: [
                "Description of project 1",
                "More description of project 1",
                "Even more description of project 1"
            ],
            skillsUsed: ["ABC", "DEF"]
        },
        {
            projectName: "Project 2",
            projectDescription: [
                "Description of project 2",
                "More description of project 2"
            ],
            skillsUsed: ["GHI", "JKL", "DEF"]
        },
        {
            projectName: "Project 3",
            projectDescription: [
                "Description of project 3"
            ],
            skillsUsed: ["JKL", "ABC"]
        },
        {
            projectName: "Project 4",
            projectDescription: [
                "Description of project 4"
            ],
            skillsUsed: ["DEF", "MNO"]
        }
    ];
    return (
        <div className="flex flex-col gap-[50px] pb-[20px]">
            <ProjectSearchBar/>
            <ProjectSearchResults projectList={exampleProjectList}/>
        </div>
    );
}

export default ProjectsPage;
