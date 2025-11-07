import type { JSX } from "react";
import NavigationButton from "./NavigationButton";


function NavigationBar(): JSX.Element {
    return (
        <>
        <nav className="bg-[#272727] text-white flex justify-between h-[128px] sticky top-0 z-10">
            <div className="flex items-center text-[40px] font-bold p-[40px]">NIELAM DASS</div>
            <div className="flex">
                <NavigationButton linkTo="/">HOME</NavigationButton>
                <NavigationButton linkTo="/projects">PROJECTS</NavigationButton>
                <NavigationButton linkTo="/skills">SKILLS</NavigationButton>
                <NavigationButton linkTo="/contact">CONTACT</NavigationButton>
            </div>
        </nav>
        </>
    );
}

export default NavigationBar;
