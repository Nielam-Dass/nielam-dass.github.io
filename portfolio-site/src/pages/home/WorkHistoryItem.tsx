import type { JSX } from "react";


interface WorkHistoryItemProps {
    jobTitle: string,
    jobCompany: string,
    startDate: Date,
    endDate: Date,
    jobDetails: string[]
}

function WorkHistoryItem(props: WorkHistoryItemProps): JSX.Element {
    return (
        <li>
            {props.jobTitle} @ {props.jobCompany} ({props.startDate.toLocaleDateString("en-us", {month:"short", year:"numeric"})} - {props.endDate.toLocaleDateString("en-us", {month:"short", year:"numeric"})})
            <ul className="list-disc pl-7">
                {props.jobDetails.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
        </li>
    );
}

export default WorkHistoryItem;
