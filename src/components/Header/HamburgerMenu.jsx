"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
  
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
                <Link href={'/'}>
                    <Image 
                        src={'/assets/my-image.png'} 
                        alt="my image" 
                        width={40} 
                        height={40} 
                        className="rounded-full h-10 w-10" 
                    />
                </Link>
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

                                {/* Scrollable Content - Dynamic Height */}
                                <div className="overflow-y-auto px-5 sm:px-6 py-4 sm:py-6 text-[#4E433D]">
                                    
                                    <ul className="space-y-4">
                                        <li onClick={() => setIsOpen(false)}>
                                            <Link href={'/'} className={`${pathname === '/' ? "text-[#8B3100]" : "font-medium text-[#4E433D] hover:text-[#8B3100]" }`}>Home</Link>
                                        </li>
                                        <li onClick={() => setIsOpen(false)}>
                                            <Link href={'/about'} className={`${pathname === '/about' ? "text-[#8B3100]" : "font-medium text-[#4E433D] hover:text-[#8B3100]" }`}>About</Link>
                                        </li>
                                        <li onClick={() => setIsOpen(false)}>
                                            <Link href={'/projects'} className={`${pathname === '/projects' ? "text-[#8B3100]" : "font-medium text-[#4E433D] hover:text-[#8B3100]" }`}>Projects</Link>
                                        </li>
                                        <li onClick={() => setIsOpen(false)}>
                                            <Link href={'/contact'} className={`${pathname === '/contact' ? "text-[#8B3100]" : "font-medium text-[#4E433D] hover:text-[#8B3100]" }`}>Contact</Link>
                                        </li>
                                    </ul>

                                    <div className='my-7 bg-linear-to-r from-[#d2d2d2]/10 via-[#d2d2d2] to-[#d2d2d2]/10 h-[1px]'></div>
                                   
                                    <Link
                                        href={`https://wa.me/+8801643876985?text=Hi`}
                                        className="btn justify-center"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-sm">Hire me</span>
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                        color="#000000"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        >
                                        <path d="M18.5 12L4.99997 12"></path>
                                        <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"></path>
                                        </svg>
                                    </Link>   
                                    <div className="mt-20">
                                        <p className="text-center">Have a project in Mind? Let{"'"}s Talk</p>
                                    </div>
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