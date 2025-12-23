import { type JSX } from 'react'
import type Skill from './Skill';
import SkillCard from './SkillCard';


interface SkillsSearchResultsProps {
    skillList: Skill[];
}

function SkillsSearchResults(props: SkillsSearchResultsProps): JSX.Element {
  if(props.skillList.length===0) {
    return (
      <div className="flex justify-center text-[24px] font-bold">No matching skills found, but I'm always excited to learn something new!</div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-y-[20px] px-[40px] justify-items-center">
        {props.skillList.map((skill, index): JSX.Element => <SkillCard key={index} skill={skill}/>)}
    </div>
  );
}

export default SkillsSearchResults;
