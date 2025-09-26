import type { JSX } from "react";
import selfieImage from "../../assets/selfie_image.png";


function HomePage(): JSX.Element {
    return (
        <>
        <div id="about-section" className="flex gap-[150px] px-[140px] pt-[100px] pb-[30px]">
            <div>
                <h2 className="text-[36px] font-bold">About me</h2>
                <p className="text-[24px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet recusandae at, veritatis illum eaque laborum perspiciatis mollitia iste sed expedita accusamus veniam exercitationem, reiciendis voluptatibus quaerat harum ullam accusantium et!</p>
            </div>
            <img src={selfieImage} alt="Selfie" className="w-[224px] h-[224px] min-w-[224px] rounded-full"/>
        </div>
        </>
    );
}

export default HomePage;
