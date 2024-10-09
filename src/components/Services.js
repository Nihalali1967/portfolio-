import React from "react";
import '../App.css';

const Services = () => {
    const services = [
        { id: 1, name: 'BSC COMPUTER SCIENCE', description: 'ERANAD KNOWLEDGE CITY ,Manjeri   (Calicut University)' },
        
        { id: 3, name: 'SOFTWARE DEVELOPMENT', description: 'Successfully completed a software development course. Skilled in PHP, C++, ASP.NET, MVC, MS SQL, JavaScript, jQuery, and C#.' },
    ];

    const skills = [
        { name: "ADVANCED PHP" },
        { name: "REACT JS" },
        { name: "JAVASCRIPT" },
        { name: "jQuery" },
        { name: "MySQL" },
         { name: "PostgreSQL" },
        { name: "Node Js" },
        { name: "HTML & CSS" },
        { name: "ASP .NET" },
        { name: "C#" },
        { name: "BOOTSTRAP" },
        { name: "TAILWIND" },
        { name: "C#" },
    ];

    const softSkills = [
        { name: "TIME MANAGEMENT" },
        { name: "ADAPTABILITY" },
        { name: "COLLABORATION" },
        { name: "PROFESSIONALISM" },
        { name: "PROBLEM-SOLVING" },
    ];

    return (
        <div>
            <h1 className="text-primary font-semibold text-2xl mt-14">EDUCATION</h1>
            <div className='grid md:grid-cols-3 my-8 gap-5'>
                {services.map(service => (
                    <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
                        <h6 className='text-xl mb-4'>{service.name}</h6>
                        <p className='text-sm'>{service.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <h1 className="text-primary font-semibold text-2xl mt-14">TECHNICAL SKILLS</h1>
                <div className="flex flex-col md:flex-row flex-wrap">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="md:w-[200px] md:h-[120px] bg-light bg-primary flex flex-wrap items-baseline justify-end md:m-3 my-3 p-4 shadow-sm skills transition-all duration-500"
                        >
                            <p className="mt-3 text-xl text-white font-semibold">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>

                <h1 className="text-primary font-semibold text-2xl mt-14">SOFT SKILLS</h1>
                <div className="flex flex-col md:flex-row flex-wrap">
                    {softSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="md:w-[200px] md:h-[120px] bg-light bg-primary flex flex-wrap items-baseline justify-end md:m-3 my-3 p-4 shadow-sm skills transition-all duration-500"
                        >
                            <p className="mt-3 text-xl text-white font-semibold">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
