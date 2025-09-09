import { Link } from "react-router-dom";


function NavigationBar() {
    return (
        <>
        <nav className="bg-black text-white flex justify-between p-3">
            <div className="font-bold">NIELAM DASS</div>
            <div className="flex gap-4">
                <Link to={"/"}>Home</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/skills"}>Skills</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </nav>
        </>
    );
}

export default NavigationBar;
