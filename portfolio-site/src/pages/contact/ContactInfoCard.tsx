import type { JSX } from "react";


interface ContactInfoCardProps {
    contactMethod: string;
    contactLink: string;
    extraMessage: string;
    contactIconSrc: string;
}

function ContactInfoCard(props: ContactInfoCardProps): JSX.Element {
    return (
        <>
        <div>
            <p>{props.contactMethod}</p>
            <p>{props.contactLink}</p>
            <p>{props.extraMessage}</p>
        </div>
        </>
    );
}

export default ContactInfoCard;
