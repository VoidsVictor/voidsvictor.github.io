import React from "react";

// Add-on Item Component
const AddOnItem = ({ name, price }) => {
    return (
        <div className="group flex justify-between items-center py-6 border-b border-[#d4cfc1] transition-all duration-300 hover:border-[#2d2d2d]">
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

export default OptionalAddOnsSection;
