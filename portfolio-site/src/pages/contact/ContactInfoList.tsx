import type { JSX } from "react";
import ContactInfoCard from "./ContactInfoCard";

import contactInfo from "../../data/contactInfo.json";


/**
 * Contact Info List component
 * 
 * @returns JSX Element for contact info list
 */
function ContactInfoList(): JSX.Element {
    return (
        <>
        <div className="flex flex-col gap-[50px]">
            {contactInfo.map((contactOption, index): JSX.Element => {
                return (
                    <ContactInfoCard {...contactOption} key={index}/>
                );
            })}
        </div>
        </>
    );
}

export default ContactInfoList;
