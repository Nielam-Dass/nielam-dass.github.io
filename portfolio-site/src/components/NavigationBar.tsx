import NavigationButton from "./NavigationButton";


function NavigationBar() {
    return (
        <>
        <nav className="bg-black text-white flex justify-between p-3">
            <div className="font-bold">NIELAM DASS</div>
            <div className="flex gap-4">
                <NavigationButton linkTo="/">Home</NavigationButton>
                <NavigationButton linkTo="/projects">Projects</NavigationButton>
                <NavigationButton linkTo="/skills">Skills</NavigationButton>
                <NavigationButton linkTo="/contact">Contact</NavigationButton>
            </div>
        </nav>
        </>
    );
}

export default NavigationBar;
