'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "About", link: "/about" },
  { id: 3, text: "Contact", link: "/contact" },
  { id: 4, text: "Projects", link: "/projects" },
];

const Header = () => {
    const pathname = usePathname()
    return (
        <div className='flex items-center justify-between px-60 py-5'>
            <ul className='flex items-center gap-7'>
                {
                    navItems?.map(item => (
                        <li key={item?.id}>
                            <Link href={item.link} className={`${item?.link === pathname ? 'text-[#8B3100]' : 'font-medium text-[#4E433D] hover:text-[#8B3100]'}`}>{item.text}</Link>
                        </li>
                    ))
                }
            </ul>
            <Link href={`https://wa.me/+8801643876985?text=Hi`} className='btn' target='_blank' rel="noopener noreferrer">
                <span className='text-sm'>Hire me</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.5 12L4.99997 12"></path>
                    <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"></path>
                </svg>
            </Link>
        </div>
    );
};

export default Header;