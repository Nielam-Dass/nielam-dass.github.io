import { useEffect, type JSX } from "react";
import ContactInfoList from "./ContactInfoList";
import ReactGA4 from "react-ga4";


/**
 * Component to display the contact page
 * 
 * @returns JSX element for contact page
 */
function ContactPage(): JSX.Element {
    useEffect(() => {
        ReactGA4.send({hitType: "pageview", page: "/contact", title: "Contact"});
    }, []);
    return (
        <div className="flex flex-col grow-1 justify-center gap-[80px] px-[140px] pb-[20px]">
            <h1 className="text-[48px] font-bold">CONTACT INFO</h1>
            <ContactInfoList/>
        </div>
    );
}

export default ContactPage;
