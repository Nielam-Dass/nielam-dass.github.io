import { type JSX } from 'react'
import type Skill from './Skill';

interface SkillCardProps {
    skill: Skill;
}

/**
 * Skill Card component
 * 
 * @param props SkillCard props object
 * @param props.skill Object containing skill information
 * @returns JSX Element for skill card
 */
function SkillCard(props: SkillCardProps): JSX.Element {
  return (
    <div className="flex justify-center text-[32px] font-[Courier_Prime,monospace] w-[320px] border-2 rounded-[10px] px-[40px] py-[15px]">
        {props.skill.skillName}
    </div>
  );
}

export default SkillCard;

