import React from "react";
import carImage from "../assets/projects/car.jpg";
import saveImage from "../assets/projects/save.jpg";

const Projects = () => {
    const projects = [
        {
            title: "PRE OWNED WHEELS",
            description:
                "It is an online platform for purchasing used vehicles, where customers can select or request, and own a vehicle with easy.Direct chat communication is also available for seamless interaction",
            photo: carImage,
        },

        {
            title: "ROYAL DRIVE",
            description:
                "This project is designed so as to be used by Car Rental Company specializing in renting cars to customers. It is an online system through which customers can view available cars, register, view profile and book car.",
            photo: saveImage,
        },
    ];
    return (
        <div className="md:px-10 px-7 my-8" id="projects">
            <h1 className="text-primary font-semibold text-3xl mt-16">
                PROJECTS
            </h1>
            <p className="my-3 text-white md:w-3/4 leading-[2]">
                I have worked on many projects over the course of being a Software Developer,
                here are a few of my live
            </p>
            {/* featured projects */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
                        >
                            <a
                                href={project.photo}
                                target="_blank"
                                rel="noreferrer"
                                className="mb-4"
                                style={{ border: "none" }} // Added inline style to remove border
                            >
                                <img src={project.photo} alt={project.title} style={{ border: "none" }} /> {/* Added inline style to remove border */}
                            </a>
                            <h3 className="text-primary font-semibold text-lg">
                                {project.title}
                            </h3>
                            <p className=" text-white mt-1">{project.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
