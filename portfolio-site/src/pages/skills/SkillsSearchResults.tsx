import { type JSX } from 'react'
import type Skill from './Skill';
import SkillCard from './SkillCard';


interface SkillsSearchResultsProps {
    skillList: Skill[];
}

function SkillsSearchResults(props: SkillsSearchResultsProps): JSX.Element {
  return (
    <div>
        {props.skillList.map((skill, index): JSX.Element => <SkillCard key={index} skill={skill}/>)}
    </div>
  );
}

export default SkillsSearchResults;
