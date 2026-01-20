import { useEffect, useState, type JSX } from "react";
import SkillSearchBar from "./SkillSearchBar";
import SkillsSearchResults from "./SkillsSearchResults";
import fullSkillList from "../../data/skillList.json";
import type Skill from "./Skill";
import ReactGA4 from "react-ga4";


function SkillsPage(): JSX.Element {
    useEffect(() => {
        ReactGA4.send({hitType: "pageview", page: "/skills", title: "Skills"});
    }, []);

    const [skillList, setSkillList] = useState<Skill[]>(
        fullSkillList.sort((skill1: Skill, skill2: Skill) => (skill2.skillWeight || 0) - (skill1.skillWeight || 0))
    );

    const handleSearchUpdate: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSkillList(() => {
            return fullSkillList.filter((skill: Skill) => {
                return skill.skillName.toLowerCase().includes(event.target.value.toLowerCase());
            });
        });
        if(event.target.value.length > 0) {
            ReactGA4.event("skill_search", {searchValue: event.target.value});
        }
    }

    return (
        <div className="flex flex-col gap-[40px] px-[140px] pb-[20px]">
            <SkillSearchBar onSearchUpdate={handleSearchUpdate}/>
            <SkillsSearchResults skillList={skillList}/>
        </div>
    );
}

export default SkillsPage;
