import type { JSX } from "react";


interface WorkHistoryItemProps {
    jobTitle: string,
    jobCompany: string,
    startDate: Date,
    endDate: Date,
    jobDetails: string[]
}

/**
 * Work History Item component
 * 
 * @param props WorkHistoryItem props object
 * @param props.jobTitle Job title
 * @param props.jobCompany Company job was at
 * @param props.startDate Start date of the job
 * @param props.endDate End date of the job
 * @param props.jobDetails String array of text bullet points describing the job
 * @returns JSX Element for work history item
 */
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
