import type { JSX } from "react";


interface SkillSearchBarProps {
    onSearchUpdate: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Skill Search Bar component
 * 
 * @param props SkillSearchBar props object
 * @param props.onSearchUpdate Event handler function that runs when search text is changed
 * @returns JSX Element for skill search bar
 */
function SkillSearchBar(props: SkillSearchBarProps): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-[10px] pt-[60px] pb-[40px]">
            <h1 className="text-[48px] font-bold">BROWSE SKILLS</h1>
            <input type="search" onChange={props.onSearchUpdate} autoComplete="off" placeholder="Search skills" className="border-1 rounded-full w-[650px] px-[40px] py-[15px] text-[24px] font-light" id="skill-search-input"/>
        </div>
    );
}

export default SkillSearchBar;
