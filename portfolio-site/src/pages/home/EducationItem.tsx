import type { JSX } from "react";

interface EducationItemProps {
    schoolName: string;
    startDate: Date;
    endDate: Date;
    studyDetails: string[];
}

function EducationItem(props: EducationItemProps): JSX.Element {
    return (
        <ul className="list-disc pl-5 text-[20px]">
            <li>{props.schoolName} ({props.startDate.toLocaleDateString("en-us", {month:"short", year:"numeric"})} - {props.endDate.toLocaleDateString("en-us", {month:"short", year:"numeric"})})</li>
            {props.studyDetails.map((detail, index) => <li key={index}>{detail}</li>)}
        </ul>
    );
}

export default EducationItem;