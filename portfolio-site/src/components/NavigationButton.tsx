import type { JSX } from "react";
import { Link } from "react-router-dom";


interface NavigationButtonProps {
    linkTo: string;
    children: string;
}

/**
 * Navigation Button component
 * 
 * @param props NaviagationButton props
 * @param props.linkTo Destination link for the button
 * @param props.children String for button text
 * @returns JSX Element for a navigation button
 */
function NavigationButton({linkTo, children}: NavigationButtonProps): JSX.Element {
    return (
        <Link to={linkTo} className="flex items-center px-[30px] text-[36px] font-light hover:bg-black duration-300 ease-out active:bg-white active:text-black active:duration-150">{children}</Link>
    );
}

export default NavigationButton;
