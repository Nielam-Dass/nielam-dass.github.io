import type { JSX } from "react";
import SkillSearchBar from "./SkillSearchBar";
import SkillsSearchResults from "./SkillsSearchResults";
import skillList from "../../data/skillList.json";


function SkillsPage(): JSX.Element {
    return (
        <div className="flex flex-col gap-[40px] px-[140px] pb-[20px]">
            <SkillSearchBar/>
            <SkillsSearchResults 
                skillList={skillList}
            />
        </div>
    );
}

export default SkillsPage;
