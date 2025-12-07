import React from "react";

const HowWeWorkSection = () => {
    const steps = [
        "We will discuss your requirement",
        "Pay 50% as security (Refundable if work not delivered)",
        "We build",
        "We will discuss product revision",
        "We'll deliver the final product with revisions",
        "Handoff",
    ];

    return (
        <section
            id="how-we-work"
            className="py-20 lg:py-32 px-6 lg:px-16 bg-[#FFFFFF]"
        >
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
                <h3 className="font-serif text-3xl lg:text-5xl leading-tight text-[#0F0326]">
                    How We Work
                </h3>
                <div className="space-y-6 lg:space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group flex gap-6 lg:gap-8 items-start transition-all duration-300 hover:translate-x-2"
                        >
                            <span className="text-sm lg:text-base font-medium w-12 flex-shrink-0 text-[#0F0326]/40 tabular-nums group-hover:text-[#0F0326] transition-colors duration-300">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-base lg:text-lg leading-relaxed text-[#0F0326]">
                                {step}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;
