import type { JSX } from "react";
import selfieImage from "../../assets/selfie_image.png";
import WorkHistoryItem from "./WorkHistoryItem";


function HomePage(): JSX.Element {
    return (
        <>
        <div id="about-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px]">
            <div>
                <h2 className="text-[36px] font-bold">About Me</h2>
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
        <div id="work-experience-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px]">
            <img src="x" alt="Prior company logo" className="w-[224px] h-[224px] min-w-[224px] border-2"/>
            <div>
                <h2 className="text-[36px] font-bold">Work Experience</h2>
                <ul className="list-disc pl-5 text-[20px]">
                    <WorkHistoryItem
                      jobTitle="Job 1"
                      jobCompany="Company 1"
                      startDate={new Date("01/01/2000")}
                      endDate={new Date("02/01/2000")}
                      jobDetails={[
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", 
                        "Officiis aut laborum fugiat dicta saepe, sint eos incidunt nam debitis, veritatis quidem officia facilis eveniet earum provident?"
                      ]}
                    />
                    <br />
                    <WorkHistoryItem
                      jobTitle="Job 2"
                      jobCompany="Company 2"
                      startDate={new Date("02/01/2000")}
                      endDate={new Date("04/01/2001")}
                      jobDetails={[
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", 
                        "Officiis aut laborum fugiat dicta saepe, sint eos incidunt nam debitis, veritatis quidem officia facilis eveniet earum provident?"
                      ]}
                    />
                </ul>
            </div>
        </div>
        </>
    );
}

export default HomePage;
