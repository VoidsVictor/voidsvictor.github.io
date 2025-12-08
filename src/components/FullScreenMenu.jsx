import React from "react";
import { X } from "lucide-react";

const FullScreenMenu = ({ isOpen, onClose }) => {
    const menuItems = [
        { name: "Packages", href: "#packages" },
        // { name: "Add Ons", href: "#add-ons" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "How We Work", href: "#how-we-work" },
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
            className={`fixed inset-0 bg-[#0F0326] z-[100] transition-all duration-500 ${
                isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="h-full flex flex-col">
                <div className="px-6 py-6 lg:px-16 lg:py-8">
                    <div className="max-w-[1400px] mx-auto flex justify-between items-center">
                        <div className="w-5 h-5 lg:w-6 lg:h-6" />
                        <h2 className="font-serif text-sm lg:text-base tracking-[0.3em] uppercase text-white">
                            Navigation
                        </h2>
                        <button
                            onClick={onClose}
                            className="group"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5 lg:w-6 lg:h-6 text-white cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:rotate-90" />
                        </button>
                    </div>
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
                                    className="group font-serif text-3xl lg:text-6xl text-white hover:text-white/70 transition-all duration-300 inline-block relative"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="px-6 py-6 lg:px-16 lg:py-8 text-center">
                    <p className="text-xs lg:text-sm text-white/60 tracking-wider">
                        © 2025 Katalyst. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FullScreenMenu;
