import React from "react";
import { ArrowUpRight } from "lucide-react";

import KDLogo from "../assets/KDIC_logo.webp";
import SCCLogo from "../assets/logo.webp";

// Portfolio Project Component
const PortfolioProject = ({
    number,
    title,
    role,
    description,
    link,
    logos,
}) => {
    return (
        <div className="group">
            <div className="text-xs lg:text-sm text-gray-400 mb-6 tracking-widest">
                {number}
            </div>
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
                <div>
                    <h4 className="font-serif text-2xl lg:text-4xl mb-4 leading-tight group-hover:text-[#5a5a5a] transition-colors duration-300">
                        {title}
                    </h4>
                    <p className="text-sm lg:text-base text-gray-500 mb-3 tracking-wide uppercase">
                        {role}
                    </p>
                    <p className="text-base lg:text-lg text-gray-600 mb-6 max-w-[600px] leading-relaxed">
                        {description}
                    </p>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 text-base border-b-2 border-[#2d2d2d] pb-1 hover:border-[#5a5a5a] transition-all duration-300"
                        >
                            <span>View Project</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                    )}
                </div>
                {logos}
            </div>
        </div>
    );
};

// Portfolio Section Component
const PortfolioSection = () => {
    const projects = [
        {
            number: "01",
            title: "KD Innovation And Incubation Centre",
            role: "Technical Lead",
            description: "Building the web platform for the incubation centre.",
            link: "https://www.kdic.org.in/",
            logos: (
                <div className="flex items-center gap-8 lg:gap-10">
                    <img
                        src={KDLogo}
                        alt="KDIC Logo"
                        className="w-20 h-20 lg:w-28 lg:h-28 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                        style={{ filter: "grayscale(100%)" }}
                    />
                    <img
                        src={SCCLogo}
                        alt="SCC Logo"
                        className="w-16 h-16 lg:w-24 lg:h-24 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                        style={{ filter: "grayscale(100%)" }}
                    />
                </div>
            ),
        },
        {
            number: "02",
            title: "WhiteBox",
            role: "Co-founder and CTO",
            description:
                "Building the platform that will power Vehicle to Everything.",
            logos: (
                <div className="flex justify-start lg:justify-end">
                    <div className="bg-[#2d2d2d] text-white px-10 py-8 lg:px-16 lg:py-12 text-2xl lg:text-3xl font-serif shadow-xl transition-transform duration-300 hover:scale-105">
                        WhiteBox
                    </div>
                </div>
            ),
        },
        {
            number: "03",
            title: "Research Work (Pre-Printed)",
            role: "Co-Author",
            description:
                "Co-built the simulation engine to understand and analyse how humans behave under uncertainty.",
            link: "https://doi.org/10.5281/zenodo.14840926",
        },
    ];

    return (
        <section
            id="portfolio"
            className="py-20 lg:py-32 px-6 lg:px-16 bg-white"
        >
            <div className="max-w-[1200px] mx-auto">
                <h3 className="font-serif text-3xl lg:text-5xl mb-16 lg:mb-24 leading-tight">
                    Notable Portfolio
                </h3>
                <div className="space-y-20 lg:space-y-32">
                    {projects.map((project, index) => (
                        <PortfolioProject key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
