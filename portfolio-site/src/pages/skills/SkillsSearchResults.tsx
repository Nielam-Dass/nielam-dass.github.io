import { type JSX } from 'react'
import type Skill from './Skill';


interface SkillsSearchResultsProps {
    skillList: Skill[];
}

function SkillsSearchResults(props: SkillsSearchResultsProps): JSX.Element {
  return (
    <ul>
        {props.skillList.map((skill, index): JSX.Element => <li key={index}>{skill.skillName}</li>)}
    </ul>
  );
}

export default SkillsSearchResults;
