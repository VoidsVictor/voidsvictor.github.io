import React from "react";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-16 bg-[#0F0326]">
        <div className="max-w-[1200px] mx-auto text-center">
            <h3 className="font-serif text-3xl lg:text-5xl mb-12 leading-tight text-white">
                Let's Work Together
            </h3>
            <a
                href="mailto:katalyse.me@gmail.com"
                className="group inline-flex items-center gap-3 text-lg lg:text-2xl border-b-2 border-white pb-2 hover:border-white/70 transition-all duration-300 text-white"
            >
                <span>katalyse.me@gmail.com</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
        </div>
    </section>
);

export default ContactSection;
