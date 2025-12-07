import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="pt-32 lg:pt-48 pb-40 lg:pb-48 px-6 lg:px-16 min-h-screen flex items-center relative overflow-hidden bg-white">
            <div className="max-w-[1200px] mx-auto text-center w-full relative z-10">
                {/* Main headline */}
                <div
                    className={`transition-all duration-1000 delay-200 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="font-serif text-4xl sm:text-6xl lg:text-8xl leading-[1.1] mb-8 lg:mb-12 tracking-tight text-[#0F0326]">
                        We build everything
                        <br />
                        <span className="italic text-[#0F0326]/70">
                            your business needs
                        </span>
                        <br />
                        to launch.
                    </h2>
                </div>

                {/* Description */}
                <div
                    className={`space-y-10 lg:space-y-12 transition-all duration-1000 delay-300 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <p className="text-lg lg:text-xl text-[#0F0326]/70 leading-relaxed max-w-[650px] mx-auto">
                        Websites, mobile apps, AI automation, e-commerce,
                        payment systems, and more.
                    </p>

                    {/* Pricing section with divider */}
                    <div className="flex items-center justify-center gap-8 lg:gap-12">
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-serif text-[#0F0326] mb-2">
                                From $100
                            </div>
                            <div className="text-xs lg:text-sm uppercase tracking-[0.2em] text-[#0F0326]/50">
                                Starting Price
                            </div>
                        </div>

                        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#0F0326]/30 to-transparent"></div>

                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-serif text-[#0F0326] mb-2">
                                6 Packages
                            </div>
                            <div className="text-xs lg:text-sm uppercase tracking-[0.2em] text-[#0F0326]/50">
                                To Choose From
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div
                        className={`transition-all duration-1000 delay-500 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0F0326] text-white text-sm lg:text-base uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#0F0326]/90 hover:gap-4"
                        >
                            <span>Start Your Project</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
