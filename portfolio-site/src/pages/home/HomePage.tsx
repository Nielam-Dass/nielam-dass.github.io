import type { JSX } from "react";
import WorkHistoryItem from "./WorkHistoryItem";
import EducationItem from "./EducationItem";
import selfieImage from "../../assets/selfie_image.jpg";
import bdLogo from "../../assets/becton_dickinson_logo.png";
import rpiLogo from "../../assets/rpi_logo_colored.svg";


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
            <img src={selfieImage} alt="Selfie" className="w-[224px] h-[224px] min-w-[224px] rounded-full drop-shadow-2xl/40"/>
        </div>
        <div id="work-experience-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px]">
            <img src={bdLogo} alt="Prior company logo" className="w-[224px] h-[224px] min-w-[224px]"/>
            <div>
                <h2 className="text-[36px] font-bold">Work Experience</h2>
                <ul className="list-disc pl-5 text-[20px]">
                    <WorkHistoryItem
                      jobTitle="Algorithms Tutor"
                      jobCompany="Rensselaer Polytechnic Institute"
                      startDate={new Date("10/16/2023")}
                      endDate={new Date("12/10/2023")}
                      jobDetails={[
                        "Tutored two students taking the Introduction to Algorithms course at my university", 
                        "Enabled tutees to understand how to design optimal algorithm solutions for different types of problems",
                        "Scheduled tutoring sessions with individuals based on availability"
                      ]}
                    />
                    <br />
                    <WorkHistoryItem
                      jobTitle="Python Developer Intern"
                      jobCompany="Becton Dickinson"
                      startDate={new Date("09/01/2019")}
                      endDate={new Date("06/10/2020")}
                      jobDetails={[
                        "Supported material research by developing a Python program utilizing OpenCV to visually analyze biaxial stress test videos and collect deformation data in a CSV file", 
                        "Refactored codebase using object-oriented modularization to improve maintainability and readability",
                        "Implemented a more precise computer vision algorithm to calculate the radius of curvature for a contour",
                        "Collaborated with research mentor and project manager by sharing updates and discussing new features"
                      ]}
                    />
                </ul>
            </div>
        </div>
        <div id="education-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px]">
            <img src={rpiLogo} alt="Prior school logo" className="h-[224px] w-[224px] min-w-[224px] p-[4px]"/>
            <div>
                <h2 className="font-bold text-[36px]">Education</h2>
                <EducationItem 
                  schoolName="Rensselaer Polytechnic Insititute" 
                  startDate={new Date("08/28/2020")} 
                  endDate={new Date("05/17/2024")} 
                  studyDetails={[
                    "Degree: Bachelor of Science in Biomedical Engineering; Data Science specialization", 
                    "Minors: Computer Science and Economics", 
                    "Coursework: Principles of Software, Database Systems, Embedded Systems, Cryptography & Network Security, Data Structures", 
                    "GPA: 3.8/4.0"
                  ]}
                />
            </div>
        </div>
        </>
    );
}

export default HomePage;
