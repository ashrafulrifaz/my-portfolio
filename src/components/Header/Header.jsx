"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "About", link: "/about" },
  { id: 3, text: "Projects", link: "/projects" },
  { id: 4, text: "Contact", link: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Sync immediately on mount / whenever the route changes
    checkScroll();

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [pathname]); // <-- re-run whenever the page changes

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center pt-5 px-60">
      <motion.div
        initial={false}
        animate={{
          maxWidth: isScrolled ? "700px" : "1728px",
          borderRadius: isScrolled ? "9999px" : "0px",
          borderColor: isScrolled ? "#d2d2d2" : "rgba(0,0,0,0)",
          paddingLeft: isScrolled ? "16px" : "0px",
          paddingRight: isScrolled ? "8px" : "0px",
          boxShadow: isScrolled
            ? "0 4px 20px rgba(0,0,0,0.06)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full border bg-[#F9F8F6] flex items-center justify-between py-2"
      >
        <ul className="flex items-center gap-7">
          {navItems?.map((item) => (
            <li key={item?.id}>
              <Link
                href={item.link}
                className={`${
                  item?.link === pathname
                    ? "text-[#8B3100]"
                    : "font-medium text-[#4E433D] hover:text-[#8B3100]"
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`https://wa.me/+8801643876985?text=Hi`}
          className="btn"
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
      </motion.div>
    </div>
  );
};

export default Header;