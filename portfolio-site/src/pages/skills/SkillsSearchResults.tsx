import { type JSX } from 'react'
import type Skill from './Skill';
import SkillCard from './SkillCard';


interface SkillsSearchResultsProps {
    skillList: Skill[];
}

function SkillsSearchResults(props: SkillsSearchResultsProps): JSX.Element {
  return (
    <div className="grid grid-cols-3 gap-y-[20px] px-[40px] justify-items-center">
        {props.skillList.map((skill, index): JSX.Element => <SkillCard key={index} skill={skill}/>)}
    </div>
  );
}

export default SkillsSearchResults;
