import type { JSX } from "react";


function ProjectSearchBar(): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-[20px] pb-[40px] pt-[60px]">
            <h1 className="text-[48px] font-bold">BROWSE PROJECTS</h1>
            <input type="text" placeholder="Search project name, description, or skills used" className="border-1 rounded-full w-[650px] px-[40px] py-[15px] text-[24px] font-light" id="project-search-input"/>
        </div>
    );
}

export default ProjectSearchBar;
