import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import KDLogo from "../assets/KDIC_logo.webp";
import SCCLogo from "../assets/logo.webp";

// Portfolio Section Component with Carousel
const PortfolioSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: "KD Innovation And Incubation Centre",
            description:
                "Part of the team building the web platform for the KD Innovation and Incubation Centre.",
            link: "https://www.kdic.org.in/",
            logos: [
                { src: KDLogo, alt: "KDIC Logo" },
                { src: SCCLogo, alt: "SCC Logo" },
            ],
        },
        // Future entries can be added here
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + projects.length) % projects.length,
        );
    };

    const currentProject = projects[currentIndex];

    return (
        <section
            id="portfolio"
            className="py-20 lg:py-32 px-6 lg:px-16 bg-[#0F0326]"
        >
            <div className="max-w-[1200px] mx-auto">
                <h3 className="font-serif text-3xl lg:text-5xl mb-16 lg:mb-24 leading-tight text-white">
                    Notable Portfolio
                </h3>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-16 transition-all duration-500 hover:bg-white/15">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                {/* Content */}
                                <div>
                                    <h4 className="font-serif text-2xl lg:text-4xl mb-6 leading-tight text-white group-hover:text-white/80 transition-colors duration-300">
                                        {currentProject.title}
                                    </h4>
                                    <p className="text-base lg:text-lg text-white/70 mb-8 leading-relaxed">
                                        {currentProject.description}
                                    </p>
                                    {currentProject.link && (
                                        <a
                                            href={currentProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn inline-flex items-center gap-2 text-base text-white border-b-2 border-white pb-1 hover:border-white/60 hover:text-white/80 transition-all duration-300"
                                        >
                                            <span>View Project</span>
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                        </a>
                                    )}
                                </div>

                                {/* Logos */}
                                <div className="flex items-center justify-center lg:justify-end gap-8 lg:gap-12">
                                    {currentProject.logos?.map(
                                        (logo, index) => (
                                            <img
                                                key={index}
                                                src={logo.src}
                                                alt={logo.alt}
                                                className="w-20 h-20 lg:w-32 lg:h-32 object-contain opacity-80 hover:opacity-100 transition-all duration-300 brightness-100"
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows - Only show when there's more than one project */}
                    {projects.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-white/90 transition-colors duration-300"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="w-6 h-6 text-[#0F0326]" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-white/90 transition-colors duration-300"
                                aria-label="Next project"
                            >
                                <ChevronRight className="w-6 h-6 text-[#0F0326]" />
                            </button>
                        </>
                    )}

                    {/* Dots Indicator - Only show when there's more than one project */}
                    {projects.length > 1 && (
                        <div className="flex justify-center gap-3 mt-8">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? "bg-white w-8"
                                            : "bg-white/40 hover:bg-white/60"
                                    }`}
                                    aria-label={`Go to project ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
