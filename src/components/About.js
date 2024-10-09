import React from "react";
import Services from "../components/Services";
import carImage1 from "../assets/projects/DDU-GKY_page-0001.jpg";
import carImage2 from "../assets/projects/react.jpg";
import carImage3 from "../assets/projects/uipath.jpg";
import carImage4 from "../assets/projects/word.jpg";

const About = () => {
    const skills = [
        { name: "SOFTWARE DEVELOPMENT" },
    ];

    return (
        <div className="md:px-10 px-7 sm:-mt-24" id="about">
            <h1 className="text-primary font-semibold text-3xl mt-5">ABOUT ME</h1>
            <p className="my-3 text-white md:w-2/3 leading-[2] text-xl">
                I am dedicated to performing at the best of my abilities and
                consistently striving for excellence in all of my endeavors.
                I am eager to take on new responsibilities and challenges, and
                I am committed to working diligently to achieve success.
            </p>
            <br />
            <h1 className="text-primary font-semibold text-3xl mt-5">EXPERIENCE</h1>

            <h2 className="text-primary font-semibold text-xl mt-14">NATMCO SOLUTION</h2>
            <div className="md:flex my-7 items-center">
                <p className="my-3 text-white md:w-2/3 leading-[2] text-xl">
                    I am currently a backend developer with experience working on real projects
                    that contribute to the development of innovative software solutions. My role
                    involves designing and implementing robust backend systems to ensure efficiency and scalability.
                </p>
            </div>

            <h2 className="text-primary font-semibold text-xl mt-14">TECHZIA</h2>
            <div className="md:flex my-7 items-center">
                <p className="my-3 text-white md:w-2/3 leading-[2] text-xl">
                    I successfully completed a React.js internship at Techzia, where I gained valuable
                    experience and completed several React projects.
                </p>
            </div>

            <h2 className="text-primary font-semibold text-xl mt-14">KKM-SOFT Pvt Ltd</h2>
            <div className="md:flex my-7 items-center">
                <p className="my-3 text-white md:w-2/3 leading-[2] text-xl">
                    I have training experience in software development, contributing to projects using PHP, C++, ASP.NET,
                    MVC, MS SQL, JavaScript, jQuery, and C# at KKMSoft Pvt Ltd under the DDU-GKY.
                </p>
            </div>

            <br></br>
            <h1 className="text-primary font-semibold text-3xl mt-5">CERTIFICATES </h1>
            <div className="md:flex my-7 items-center">
                <br></br><br></br>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                    <img src={carImage1} alt="DDU-GKY Certificate" className="w-2/3 h-auto rounded-md mx-auto" />
                    <img src={carImage2} alt="React Certificate" className="w-2/3 h-auto rounded-md mx-auto" />
                    <img src={carImage4} alt="Word Certificate" className="w-2/3 h-auto rounded-md mx-auto" />
                    <img src={carImage3} alt="UiPath Certificate" className="w-2/3 h-auto rounded-md mx-auto" />

                </div>

            </div>

            <Services />

            {/* Certificates Section */}

        </div>
    );
};

export default About;
