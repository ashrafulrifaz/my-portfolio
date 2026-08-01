"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import Image from "next/image";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
        }

        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    return (
        <div className="block md:hidden">
            {/* Header with Profile Image and Hamburger */}
            <div className="flex justify-between items-center gap-5 px-4 py-4">
                <Image 
                    src={'/assets/my-image.png'} 
                    alt="my image" 
                    width={40} 
                    height={40} 
                    className="rounded-full h-10 w-10" 
                />
                <div>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop - Transparent, Clickable to Close */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-transparent"
                        />

                        {/* Modal Container */}
                        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-start">
                            {/* Modal Content */}
                            <motion.div
                                initial={{ y: "-100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full pointer-events-auto rounded-b-2xl bg-[#F9F8F6] shadow-2xl overflow-hidden flex flex-col mx-auto"
                                style={{
                                    margin: "60px 20px 0 20px",
                                    maxWidth: "calc(100% - 40px)",
                                }}
                            >
                                {/* Header with Close Button */}
                                <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-[#e0dbd0] flex-shrink-0">
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-[#f0ebe5] rounded-lg transition-colors ml-auto flex-shrink-0"
                                        aria-label="Close modal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-[#4E433D]"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>

                                {/* Scrollable Content - Dynamic Height */}
                                <div className="overflow-y-auto px-5 sm:px-6 py-4 sm:py-6 text-[#4E433D]">
                                    {/* Add your menu items or content here */}
                                    {/* Example: */}
                                    {/* 
                                    <ul className="space-y-4">
                                        <li><a href="/" className="block hover:text-[#8B3100]">Home</a></li>
                                        <li><a href="/about" className="block hover:text-[#8B3100]">About</a></li>
                                        <li><a href="/projects" className="block hover:text-[#8B3100]">Projects</a></li>
                                        <li><a href="/contact" className="block hover:text-[#8B3100]">Contact</a></li>
                                    </ul>
                                    */}
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;