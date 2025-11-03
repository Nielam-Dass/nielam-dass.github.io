import type { JSX } from "react";


interface ContactInfoCardProps {
    contactMethod: string;
    contactLink: string;
    extraMessage: string;
    contactIconSrc: string;
}

function ContactInfoCard(props: ContactInfoCardProps): JSX.Element {
    const contactIcon = new URL(`../../assets/${props.contactIconSrc}`, import.meta.url).href;
    
    return (
        <>
        <div className="flex gap-[80px] py-[10px]">
            <img src={contactIcon} alt="Contact Icon" className="size-[140px]"/>
            <div>
                <h2 className="text-[32px] font-bold">{props.contactMethod}</h2>
                <a href={props.contactLink} target="_blank" className="text-[24px] font-light text-[#006e8d] underline">{props.contactLink}</a>
                <p className="text-[24px] font-light">{props.extraMessage}</p>
            </div>
        </div>
        </>
    );
}

export default ContactInfoCard;
