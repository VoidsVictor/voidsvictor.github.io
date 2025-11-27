import React, { useState, useEffect } from "react";
import { Menu, Mail, X, ArrowUpRight } from "lucide-react";

import KDLogo from "./assets/KDIC_logo.webp";
import SCCLogo from "./assets/logo.webp";

// Header Component
const Header = ({ onMenuToggle, scrolled }) => (
    <header
        className={`fixed top-0 w-full z-50 px-6 py-6 lg:px-16 lg:py-8 transition-all duration-300 ${
            scrolled
                ? "bg-[#e8e4dc]/95 backdrop-blur-sm shadow-sm"
                : "bg-[#e8e4dc]"
        }`}
    >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <a href="mailto:sourjyas.work@gmail.com" className="group">
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:text-[#5a5a5a]" />
            </a>
            <h1 className="font-serif text-sm lg:text-base tracking-[0.3em] uppercase">
                Sourjya Sarkar
            </h1>
            <button
                onClick={onMenuToggle}
                className="group"
                aria-label="Open menu"
            >
                <Menu className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:text-[#5a5a5a]" />
            </button>
        </div>
    </header>
);

// Full Screen Menu Component
const FullScreenMenu = ({ isOpen, onClose }) => {
    const menuItems = [
        { name: "What You Get", href: "#what-you-get" },
        { name: "Add Ons", href: "#add-ons" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "How I Work", href: "#how-i-work" },
        { name: "Contact", href: "#contact" },
    ];

    const handleNavClick = (href) => {
        onClose();
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, 300);
    };

    return (
        <div
            className={`fixed inset-0 bg-[#2d2d2d] z-[100] transition-all duration-500 ${
                isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="h-full flex flex-col">
                <div className="px-6 py-6 lg:px-16 lg:py-8 flex justify-between items-center">
                    <h2 className="font-serif text-sm lg:text-base tracking-[0.3em] uppercase text-[#e8e4dc]">
                        Navigation
                    </h2>
                    <button
                        onClick={onClose}
                        className="group"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5 lg:w-6 lg:h-6 text-[#e8e4dc] cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:rotate-90" />
                    </button>
                </div>

                <nav className="flex-1 flex items-center justify-center px-6">
                    <ul className="space-y-6 lg:space-y-8 text-center">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`transform transition-all duration-700 ease-out ${
                                    isOpen
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-8 opacity-0"
                                }`}
                                style={{ transitionDelay: `${index * 80}ms` }}
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className="group font-serif text-3xl lg:text-6xl text-[#e8e4dc] hover:text-[#c8c4b8] transition-all duration-300 inline-block relative"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#c8c4b8] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="px-6 py-6 lg:px-16 lg:py-8 text-center">
                    <p className="text-xs lg:text-sm text-[#b8b4a8] tracking-wider">
                        © 2025 Sourjya Sarkar. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Hero Section Component
const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="pt-32 lg:pt-48 pb-40 lg:pb-48 px-6 lg:px-16 min-h-screen flex items-center relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto text-center w-full relative z-10">
                {/* Main headline */}
                <div
                    className={`transition-all duration-1000 delay-200 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="font-serif text-4xl sm:text-6xl lg:text-8xl leading-[1.1] mb-8 lg:mb-12 tracking-tight">
                        I build everything
                        <br />
                        <span className="italic text-[#5a5a5a]">
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
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-[650px] mx-auto">
                        Web platform, mobile app, AI automation, analytics and
                        more.
                    </p>

                    {/* Pricing section with divider */}
                    <div className="flex items-center justify-center gap-8 lg:gap-12">
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-serif text-[#2d2d2d] mb-2">
                                $1500
                            </div>
                            <div className="text-xs lg:text-sm uppercase tracking-[0.2em] text-gray-500">
                                Fixed Price
                            </div>
                        </div>

                        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#2d2d2d]/30 to-transparent"></div>

                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-serif text-[#2d2d2d] mb-2">
                                30 Days
                            </div>
                            <div className="text-xs lg:text-sm uppercase tracking-[0.2em] text-gray-500">
                                Delivery
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
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2d2d2d] text-[#e8e4dc] text-sm lg:text-base uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#1a1a1a] hover:gap-4"
                        >
                            <span>Start Your Project</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#e8e4dc] to-transparent pointer-events-none"></div>
        </section>
    );
};

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
            <div className="w-12 h-[2px] bg-[#2d2d2d] mt-3 flex-shrink-0 transition-all duration-300"></div>
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

// Add-on Item Component
const AddOnItem = ({ name, price, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group flex justify-between items-center py-6 border-b border-[#d4cfc1] transition-all duration-300 hover:border-[#2d2d2d]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="text-base lg:text-lg transition-all duration-300 group-hover:translate-x-2">
                {name}
            </span>
            <span className="text-base lg:text-lg font-medium tabular-nums">
                {price}
            </span>
        </div>
    );
};

// Optional Add Ons Section Component
const OptionalAddOnsSection = () => {
    const addOns = [
        { name: "iOS Webview App", price: "$100" },
        { name: "Extra View", price: "$75" },
        { name: "Extra AI Automation", price: "$150" },
        { name: "Admin Panel", price: "$400" },
        { name: "Additional Workflow Chain", price: "$300" },
        { name: "Advanced Authentication System", price: "$300" },
    ];

    return (
        <section id="add-ons" className="py-20 lg:py-32 px-6 lg:px-16">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
                <h3 className="font-serif text-3xl lg:text-5xl leading-tight">
                    Optional Add-Ons
                </h3>
                <div>
                    {addOns.map((item, index) => (
                        <AddOnItem key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Portfolio Project Component
const PortfolioProject = ({
    number,
    title,
    role,
    description,
    link,
    logos,
}) => {
    const [isHovered, setIsHovered] = useState(false);

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
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
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

// How I Work Section Component
const HowIWorkSection = () => {
    const steps = [
        "We will discuss your requirement",
        "Pay 50% as security (Refundable if work not delivered)",
        "I build",
        "We will discuss product revision",
        "I'll deliver the final product with revisions",
        "Handoff",
    ];

    return (
        <section id="how-i-work" className="py-20 lg:py-32 px-6 lg:px-16">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
                <h3 className="font-serif text-3xl lg:text-5xl leading-tight">
                    How I Work
                </h3>
                <div className="space-y-6 lg:space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group flex gap-6 lg:gap-8 items-start transition-all duration-300 hover:translate-x-2"
                        >
                            <span className="text-sm lg:text-base font-medium w-12 flex-shrink-0 text-gray-400 tabular-nums group-hover:text-[#2d2d2d] transition-colors duration-300">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-base lg:text-lg leading-relaxed">
                                {step}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const ContactSection = () => (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-16 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
            <h3 className="font-serif text-3xl lg:text-5xl mb-12 leading-tight">
                Let's Work Together
            </h3>
            <a
                href="mailto:sourjyas.work@gmail.com"
                className="group inline-flex items-center gap-3 text-lg lg:text-2xl border-b-2 border-[#2d2d2d] pb-2 hover:border-[#5a5a5a] transition-all duration-300"
            >
                <span>sourjyas.work@gmail.com</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="py-12 lg:py-16 px-6 lg:px-16 border-t border-[#d4cfc1]">
        <div className="max-w-[1200px] mx-auto text-center">
            <p className="text-xs lg:text-sm text-gray-500 tracking-wider">
                © 2025 Sourjya Sarkar. All rights reserved.
            </p>
        </div>
    </footer>
);

// Main Portfolio Component
export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#e8e4dc] text-[#2d2d2d]">
            <Header
                onMenuToggle={() => setMenuOpen(true)}
                scrolled={scrolled}
            />
            <FullScreenMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />

            <HeroSection />
            <WhatYouGetSection />
            <OptionalAddOnsSection />
            <PortfolioSection />
            <HowIWorkSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
