import type { JSX } from "react";
import SkillSearchBar from "./SkillSearchBar";
import SkillsSearchResults from "./SkillsSearchResults";


function SkillsPage(): JSX.Element {
    return (
        <div className="flex flex-col gap-[40px] px-[140px] pb-[20px]">
            <SkillSearchBar/>
            <SkillsSearchResults 
                skillList={[
                    {
                        skillName: "Skill 1",
                        skillWeight: 10
                    }, 
                    {
                        skillName: "Skill 2",
                        skillWeight: 10
                    }, 
                    {
                        skillName: "Skill 3",
                        skillWeight: 8
                    }, 
                    {
                        skillName: "Skill 4",
                        skillWeight: 7
                    }, 
                    {
                        skillName: "Skill 5"
                    }, 
                    {
                        skillName: "Skill 6"
                    }, 
                    {
                        skillName: "Skill 7"
                    }, 
                    {
                        skillName: "Skill 8"
                    }
                ]}
            />
        </div>
    );
}

export default SkillsPage;
