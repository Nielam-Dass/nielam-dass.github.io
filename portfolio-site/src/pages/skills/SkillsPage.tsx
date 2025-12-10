import type { JSX } from "react";
import SkillSearchBar from "./SkillSearchBar";
import SkillsSearchResults from "./SkillsSearchResults";


function SkillsPage(): JSX.Element {
    return (
        <div className="flex flex-col gap-[40px] px-[140px] pb-[20px]">
            <SkillSearchBar/>
            <SkillsSearchResults skillList={["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7", "Skill 8"]}/>
        </div>
    );
}

export default SkillsPage;
