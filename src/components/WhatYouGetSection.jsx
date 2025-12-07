import React, { useState, useEffect } from "react";

// Fullscreen Offerings Overlay Component
const OfferingsOverlay = ({ isOpen, onClose, name, offerings }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                setCurrentIndex((prev) =>
                    prev < offerings.length - 1 ? prev + 1 : prev,
                );
            }
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, offerings.length, onClose]);

    if (!isOpen) return null;

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const goToNext = () => {
        setCurrentIndex((prev) =>
            prev < offerings.length - 1 ? prev + 1 : prev,
        );
    };

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
                <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl truncate pr-4">
                    {name}
                </h2>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-[#2d2d2d] transition-colors text-2xl sm:text-3xl leading-none p-2 shrink-0"
                    aria-label="Close"
                >
                    ×
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-16 py-8">
                <div className="max-w-2xl w-full text-center">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                        {currentIndex + 1} of {offerings.length}
                    </p>
                    <p className="font-serif text-lg sm:text-2xl lg:text-4xl leading-relaxed px-2">
                        {offerings[currentIndex]}
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <div className="border-t border-gray-200 p-4 sm:p-6">
                {/* Progress dots - visible on all screens */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mb-4">
                    {offerings.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                                i === currentIndex
                                    ? "bg-[#2d2d2d]"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to offering ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between items-center gap-4">
                    <button
                        onClick={goToPrevious}
                        disabled={currentIndex === 0}
                        className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-[#2d2d2d] transition-colors text-sm sm:text-base ${
                            currentIndex === 0
                                ? "opacity-30 cursor-not-allowed"
                                : "hover:bg-[#2d2d2d] hover:text-white active:bg-[#2d2d2d] active:text-white"
                        }`}
                    >
                        <span>←</span>
                        <span className="hidden sm:inline">Previous</span>
                    </button>

                    <button
                        onClick={goToNext}
                        disabled={currentIndex === offerings.length - 1}
                        className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-[#2d2d2d] transition-colors text-sm sm:text-base ${
                            currentIndex === offerings.length - 1
                                ? "opacity-30 cursor-not-allowed"
                                : "hover:bg-[#2d2d2d] hover:text-white active:bg-[#2d2d2d] active:text-white"
                        }`}
                    >
                        <span className="hidden sm:inline">Next</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Package Card Component
const PackageCard = ({
    name,
    idealFor,
    offerings,
    pricing,
    index,
    isCustom,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 150);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <>
            <div
                className={`border border-[#2d2d2d] p-4 sm:p-6 transition-all duration-700 flex flex-col h-full min-h-[280px] sm:min-h-[320px] ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                } hover:shadow-lg`}
            >
                <h4 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">
                    {name}
                </h4>

                <div className="flex-1 flex flex-col">
                    {idealFor && (
                        <div className="mb-3 sm:mb-4">
                            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1.5 sm:mb-2">
                                Ideal For
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                {idealFor}
                            </p>
                        </div>
                    )}

                    {isCustom ? (
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1">
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Call Katalyst with your budget and
                                    requirement. We will scope it out and
                                    provide for you.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
                                    <span className="font-medium">
                                        Minimum budget:
                                    </span>{" "}
                                    $100
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col">
                            {/* Spacer to push content down */}
                            <div className="flex-1" />

                            {/* Fixed position button */}
                            <div className="mb-3 sm:mb-4">
                                <button
                                    onClick={() => setIsOverlayOpen(true)}
                                    className="text-xs sm:text-sm border border-[#2d2d2d] px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-[#2d2d2d] hover:text-white active:bg-[#2d2d2d] active:text-white transition-colors"
                                >
                                    View Offerings
                                </button>
                            </div>

                            <div className="border-t border-gray-200 pt-3 sm:pt-4">
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1.5 sm:mb-2">
                                    Pricing
                                </p>
                                <div className="space-y-0.5 sm:space-y-1">
                                    <p className="text-sm sm:text-base">
                                        <span className="font-medium">
                                            One-time:
                                        </span>{" "}
                                        <span className="font-serif">
                                            {pricing.oneTime}
                                        </span>
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-600">
                                        <span className="font-medium">
                                            Update:
                                        </span>{" "}
                                        <span>{pricing.update}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Fullscreen Offerings Overlay */}
            {!isCustom && (
                <OfferingsOverlay
                    isOpen={isOverlayOpen}
                    onClose={() => setIsOverlayOpen(false)}
                    name={name}
                    offerings={offerings}
                />
            )}
        </>
    );
};

// Packages Section Component (formerly WhatYouGetSection)
const WhatYouGetSection = () => {
    const packages = [
        {
            name: "Nano",
            idealFor:
                "Personal or individual purposes. For example, personal portfolio, bio-page, etc.",
            offerings: [
                "Single view static webpage with up to 8 sections",
                "One contact form",
            ],
            pricing: {
                oneTime: "$100",
                update: "$50",
            },
        },
        {
            name: "Micro",
            idealFor:
                "Businesses of individuals, like doctor's chamber, photography studio, consultant's office, accountant's office, law office, repair shops, etc.",
            offerings: [
                "Website with up to 3 views",
                "One contact form",
                "One appointment booking system",
                "1 AI Automation (e.g., automating WhatsApp/Email messages)",
            ],
            pricing: {
                oneTime: "$500",
                update: "$100",
            },
        },
        {
            name: "Macro",
            idealFor:
                "Businesses and boutiques requiring digital/online presence. For example, Saree/Instagram boutiques, small businesses, etc.",
            offerings: [
                "Website with up to 5 views",
                "One contact form",
                "One appointment booking system",
                "3 AI Automations (e.g., automating WhatsApp/Email messages, data sync between Excel files and digital platforms, etc.)",
                "One e-commerce system or event-management system",
                "One payment system",
                "One basic update panel",
            ],
            pricing: {
                oneTime: "$1000",
                update: "$500",
            },
        },
        {
            name: "Meta",
            idealFor:
                "Established businesses requiring comprehensive digital solutions.",
            offerings: [
                "Everything included with Macro, plus:",
                "One Blogging system",
                "One Android App",
                "One iOS App",
                "Full fledged admin panel",
                "One store management system (e.g., digital menu based booking system for restaurants, offline product catalogue, self-checkout, etc.)",
                "Advanced Analytics",
            ],
            pricing: {
                oneTime: "$5000",
                update: "$2500",
            },
        },
        {
            name: "Beyond",
            idealFor:
                "Businesses that will require emerging technologies like blockchain, AI, etc.",
            offerings: [
                "A research based whitepaper on how to solve your unique problem",
                "A set of practical goals and scope of the system",
                "Implementation of the system",
                "Website with 4 views",
                "One payment system",
                "Full fledged admin panel",
                "Advanced analytics",
                "Blogging Platform",
            ],
            pricing: {
                oneTime: "$15000",
                update: "$7500",
            },
        },
        {
            name: "Custom",
            isCustom: true,
        },
    ];

    return (
        <section
            id="packages"
            className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 bg-white"
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-8 sm:mb-12 lg:mb-16">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-5xl leading-tight mb-3 sm:mb-4">
                        Packages
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                        Choose the package that best fits your needs. Each
                        package is designed to provide maximum value for your
                        specific use case.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {packages.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYouGetSection;
