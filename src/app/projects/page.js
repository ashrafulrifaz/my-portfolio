import { rufina } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Brainnect",
        description: "A modern, fully responsive digital agency website",
        image: "https://res.cloudinary.com/db30o33kz/image/upload/v1785517392/project-1_khqiz3.png",
        link: "/",
    },
    {
        id: 2,
        title: "AirWorld",
        description: "A modern, fully responsive digital agency website",
        image: "https://res.cloudinary.com/db30o33kz/image/upload/v1785517402/project-2_dsz0ck.png",
        link: "/",
    },
    {
        id: 3,
        title: "BloodBridge",
        description: "A life-saving platform connecting blood donors with patients in need.",
        image: "https://res.cloudinary.com/db30o33kz/image/upload/v1785517395/project-3_n8oyny.png",
        link: "/",
    },
    {
        id: 4,
        title: "VoltFit",
        description: "A sleek gym website with class schedules, membership plans, and online booking.",
        image: "https://res.cloudinary.com/db30o33kz/image/upload/v1785579050/project-4_t3q5y1.png",
        link: "/",
    },
    {
        id: 5,
        title: "Keebify",
        description: "A mechanical keyboard e-commerce store with product customization and secure checkout.",
        image: "https://res.cloudinary.com/db30o33kz/image/upload/v1785578610/project-5_ucqlqf.png",
        link: "/",
    },
];

const page = () => {
    return (
        <div className="py-14">
            <h3 className={`${rufina.className} text-xl text-center`}>Featured Projects</h3>
            {
                projects?.map((project, idx) => (
                    <div key={idx} className='mt-14 border-2 border-[#d2d2d2] bg-[#f4f4f4] p-2 rounded-2xl'>
                        <div className='border border-[#d2d2d2] bg-[#fffffc] rounded-xl p-5 pb-0'>
                            <div className="flex items-center justify-between">
                                <h3 className='text-xl font-semibold'>{project.title}</h3>
                                <Link href={project.link} className='project-arrow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18.5 12L4.99997 12"></path>
                                        <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"></path>
                                    </svg>
                                </Link>
                            </div>
                            <p className='text-[#7E7067] font-regular mt-2'>{project.description}</p>
                            <Link href={'/'}>
                                <Image src={project.image} alt='project 1' width={800} height={400} className='w-[93%] h-auto mt-7 rounded-t-3xl mx-auto border-[5px] border-b-0 border-[#E4E1E1]' />
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default page;