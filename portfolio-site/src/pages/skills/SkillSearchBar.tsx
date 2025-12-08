import type { JSX } from "react";


function SkillSearchBar(): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-[10px] pt-[60px] pb-[40px]">
            <h1 className="text-[48px] font-bold">BROWSE SKILLS</h1>
            <input type="search" autoComplete="off" placeholder="Search skills" className="border-1 rounded-full w-[650px] px-[40px] py-[15px] text-[24px] font-light" id="skill-search-input"/>
        </div>
    );
}

export default SkillSearchBar;
