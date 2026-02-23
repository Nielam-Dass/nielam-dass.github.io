import type { JSX } from "react";


interface ContactInfoCardProps {
    contactMethod: string;
    contactLink: string;
    extraMessage: string;
    contactIconSrc: string;
}

/**
 * Contact Info Card component
 * 
 * @param props ContactInfoCard props object
 * @param props.contactMethod Name of contact method
 * @param props.contactLink Link for contact as string
 * @param props.extraMessage Message to display with contact info
 * @param props.contactIconSrc Image source for contact icon
 * @returns JSX Element for contact info card
 */
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
