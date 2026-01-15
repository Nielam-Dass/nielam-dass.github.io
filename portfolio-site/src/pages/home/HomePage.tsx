import React, { useEffect } from "react";
import type { JSX } from "react";
import WorkHistoryItem from "./WorkHistoryItem";
import EducationItem from "./EducationItem";

import selfieImage from "../../assets/selfie_image.jpg";
import bdLogo from "../../assets/becton_dickinson_logo.png";
import rpiLogo from "../../assets/rpi_logo_colored.svg";
import workHistory from "../../data/workHistory.json";
import educationHistory from "../../data/educationHistory.json";
import aboutContent from "../../data/aboutContent.json";
import ReactGA4 from "react-ga4";


function HomePage(): JSX.Element {
    useEffect(() => {
        ReactGA4.send({hitType: "pageview", page: "/", title: "Home"});
    }, []);

    return (
        <>
        <div id="about-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px]">
            <div>
                <h2 className="text-[36px] font-bold">About Me</h2>
                <p className="text-[24px]">
                    { aboutContent.texContent.join(" ") }
                </p>
            </div>
            <img src={selfieImage} alt="Selfie" className="w-[224px] h-[224px] min-w-[224px] rounded-full drop-shadow-2xl/40"/>
        </div>
        <div id="work-experience-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px]">
            <img src={bdLogo} alt="Prior company logo" className="w-[224px] h-[224px] min-w-[224px]"/>
            <div>
                <h2 className="text-[36px] font-bold">Work Experience</h2>
                <ul className="list-disc pl-5 text-[20px]">
                    {workHistory.map((workHistoryItem, index): JSX.Element => {
                        return (
                            <React.Fragment key={index}>
                                <WorkHistoryItem
                                jobTitle={workHistoryItem.jobTitle}
                                jobCompany={workHistoryItem.jobCompany}
                                startDate={new Date(workHistoryItem.startDate)}
                                endDate={new Date(workHistoryItem.endDate)}
                                jobDetails={workHistoryItem.jobDetails}
                            />
                            { index < workHistory.length-1 && <br/> }
                            </React.Fragment> 
                        )
                    })}
                </ul>
            </div>
        </div>
        <div id="education-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px] mb-[20px]">
            <img src={rpiLogo} alt="Prior school logo" className="h-[224px] w-[224px] min-w-[224px] p-[4px]"/>
            <div>
                <h2 className="font-bold text-[36px]">Education</h2>
                {educationHistory.map((educationHistoryItem, index): JSX.Element => {
                    return (
                        <React.Fragment key={index}>
                            <EducationItem
                                schoolName={educationHistoryItem.schoolName}
                                startDate={new Date(educationHistoryItem.startDate)}
                                endDate={new Date(educationHistoryItem.endDate)}
                                studyDetails={educationHistoryItem.studyDetails}
                            />
                            { index < educationHistory.length-1 && <br/> }
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
        </>
    );
}

export default HomePage;
