import { Link } from "react-router-dom";


function NavigationBar() {
    return (
        <>
        <div style={{display: "flex", gap: "8px"}}>
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/skills"}>Skills</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
        </>
    );
}

export default NavigationBar;
