import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import FullScreenMenu from "./components/FullScreenMenu";
import HeroSection from "./components/HeroSection";
import WhatYouGetSection from "./components/WhatYouGetSection";
import OptionalAddOnsSection from "./components/OptionalAddOnsSection";
import PortfolioSection from "./components/PortfolioSection";
import HowWeWorkSection from "./components/HowWeWorkSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
            {/* <OptionalAddOnsSection />*/}
            <PortfolioSection />
            <HowWeWorkSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
