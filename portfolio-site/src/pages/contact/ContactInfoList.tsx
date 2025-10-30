import type { JSX } from "react";
import ContactInfoCard from "./ContactInfoCard";


function ContactInfoList(): JSX.Element {
    return (
        <>
        <div className="flex flex-col">
            <ContactInfoCard
                contactMethod="Contact Method 1"
                contactLink="Link 1"
                extraMessage="Extra message 1"
                contactIconSrc="x"
            />
            <br />
            <ContactInfoCard
                contactMethod="Contact Method 2"
                contactLink="Link 2"
                extraMessage="Extra message 2"
                contactIconSrc="x"
            />
        </div>
        </>
    );
}

export default ContactInfoList;
