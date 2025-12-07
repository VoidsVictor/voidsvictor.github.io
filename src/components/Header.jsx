import React from "react";
import { Menu, Mail } from "lucide-react";

const Header = ({ onMenuToggle, scrolled }) => (
    <header
        className={`fixed top-0 w-full z-50 px-6 py-6 lg:px-16 lg:py-8 transition-all duration-300 ${
            scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
        }`}
    >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <a href="mailto:katalyse.me@gmail.com" className="group">
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-[#0F0326] cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:opacity-70" />
            </a>
            <h1 className="font-serif text-sm lg:text-base tracking-[0.3em] uppercase text-[#0F0326]">
                Katalyst
            </h1>
            <button
                onClick={onMenuToggle}
                className="group"
                aria-label="Open menu"
            >
                <Menu className="w-5 h-5 lg:w-6 lg:h-6 text-[#0F0326] cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:opacity-70" />
            </button>
        </div>
    </header>
);

export default Header;
