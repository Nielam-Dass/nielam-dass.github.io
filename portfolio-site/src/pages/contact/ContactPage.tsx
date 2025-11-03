import type { JSX } from "react";
import ContactInfoList from "./ContactInfoList";


function ContactPage(): JSX.Element {
    return (
        <div className="flex flex-col grow-1 justify-center gap-[80px] px-[140px]">
            <h1 className="text-[48px] font-bold">CONTACT INFO</h1>
            <ContactInfoList/>
        </div>
    );
}

export default ContactPage;
