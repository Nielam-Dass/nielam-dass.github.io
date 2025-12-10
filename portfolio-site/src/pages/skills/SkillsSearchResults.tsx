import { type JSX } from 'react'


interface SkillsSearchResultsProps {
    skillList: string[];
}

function SkillsSearchResults(props: SkillsSearchResultsProps): JSX.Element {
  return (
    <ul>
        {props.skillList.map((skill, index): JSX.Element => <li key={index}>{skill}</li>)}
    </ul>
  );
}

export default SkillsSearchResults;
