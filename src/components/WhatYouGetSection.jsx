import React, { useState, useEffect } from "react";

// Service Item Component
const ServiceItem = ({ title, description, examples, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 100);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`flex items-start gap-6 lg:gap-8 transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
            }`}
        >
            <div className="w-12 h-0.5 bg-[#2d2d2d] mt-3 shrink-0 transition-all duration-300"></div>
            <div className="flex-1">
                <h4 className="font-serif text-xl lg:text-2xl mb-3 leading-tight">
                    {title}
                </h4>
                {description && (
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        {description}
                    </p>
                )}
                {examples && (
                    <div className="mt-4">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                            Examples:
                        </p>
                        <ul className="text-base text-gray-600 space-y-2">
                            {examples.map((example, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#2d2d2d] mt-1">
                                        —
                                    </span>
                                    <span className="leading-relaxed">
                                        {example}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

// What You Get Section Component
const WhatYouGetSection = () => {
    const services = [
        {
            title: "One Fixed Workflow",
            description:
                "Example: user order → process order → notify delivery",
        },
        {
            title: "Web App with 3 Views (pages)",
        },
        {
            title: "Up to 3 AI Automations",
            examples: [
                "Automatic email/WhatsApp reply",
                "Schedule-based reminders",
                "AI-assisted lead sorting",
                "Data sync (single input, single output)",
            ],
        },
        {
            title: "AI FAQ Chatbot",
            description: "Note: Involves recurring cost due to model usage",
        },
        {
            title: "Basic Analytics",
        },
        {
            title: "1 Android Webview App",
        },
        {
            title: "Basic Authentication (email + password)",
        },
    ];

    return (
        <section
            id="what-you-get"
            className="py-20 lg:py-32 px-6 lg:px-16 bg-white"
        >
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
                <h3 className="font-serif text-3xl lg:text-5xl leading-tight">
                    What You Get
                </h3>
                <div className="space-y-12 lg:space-y-16">
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYouGetSection;
