import type { JSX } from "react";
import selfieImage from "../../assets/selfie_image.png";


function HomePage(): JSX.Element {
    return (
        <>
        <div id="about-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px]">
            <div>
                <h2 className="text-[36px] font-bold">About me</h2>
                <p className="text-[24px]">
                    Hey! My name is Niel, and I'm a software developer based in the United States.
                    My primary programming languages are Python, Java, and TypeScript.
                    I love building software projects and have hands-on experience in a variety of specialty areas.
                    These include web development, data science, and embedded systems.
                    I'm currently looking to kickstart my tech career, so if you have an opportunity for me, feel free to reach out!
                </p>
            </div>
            <img src={selfieImage} alt="Selfie" className="w-[224px] h-[224px] min-w-[224px] rounded-full"/>
        </div>
        </>
    );
}

export default HomePage;
