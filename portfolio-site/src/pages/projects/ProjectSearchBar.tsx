import type React from "react";
import type { JSX } from "react";


interface ProjectSearchBarProps {
    onSearchUpdate: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Project Search Bar component
 * 
 * @param props ProjectSearchBar props object
 * @param props.onSearchUpdate Event handler function that runs when search text is changed
 * @returns JSX Element for project search bar
 */
function ProjectSearchBar(props: ProjectSearchBarProps): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-[20px] pb-[40px] pt-[60px]">
            <h1 className="text-[48px] font-bold">BROWSE PROJECTS</h1>
            <input type="search" autoComplete="off" placeholder="Search project name, description, or skills used" onChange={props.onSearchUpdate} className="border-1 rounded-full w-[650px] px-[40px] py-[15px] text-[24px] font-light" id="project-search-input"/>
        </div>
    );
}

export default ProjectSearchBar;
