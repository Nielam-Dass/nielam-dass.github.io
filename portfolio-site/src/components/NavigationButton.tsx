import { Link } from "react-router-dom";


interface NavigationButtonProps {
    linkTo: string;
    children: string;
}

function NavigationButton({linkTo, children}: NavigationButtonProps) {
    return (
        <Link to={linkTo}>{children}</Link>
    )
}

export default NavigationButton;
