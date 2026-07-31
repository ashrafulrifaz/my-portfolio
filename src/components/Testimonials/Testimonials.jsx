import { rufina } from '@/lib/fonts';
import Image from 'next/image';
import React from 'react';

const Testimonials = () => {

    return (
        <div className='pt-10 pb-16'>
            <h3 className={`${rufina.className} text-xl`}>Testimonials</h3>
            <div className="grid grid-cols-2 gap-10 mt-12">
                <div>
                    <div className='border border-[#d2d2d2] rounded-2xl p-5'>
                        <p className='text-[#7E7067] '>As a startup founder, I needed a website that looked professional and built trust with investors and customers. Ashraful delivered exactly that. He understood the startup mindset, moved fast without sacrificing quality, and brought creative ideas I hadn{"'"}t even considered. The animations and overall user experience are world class. Truly a talented developer.</p>
                        <hr className='text-[#d2d2d2]/70 mt-6 mb-5' />
                        <div className='flex items-center gap-3'>
                            <Image src={'https://res.cloudinary.com/db30o33kz/image/upload/v1785518807/user-1_yk2ta8.png'} alt='user image' width={50} height={50} className='rounded-full' />
                            <div>
                                <h4 className='capitalize font-medium'>david thompson</h4>
                                <h5 className='capitalize font-medium text-[#5D5D5D] text-[15px]'>Startup Founder</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#d2d2d2] rounded-2xl p-5 mt-10'>
                        <p className='text-[#7E7067] '>Working with Ashraful was an absolute pleasure from start to finish. He took the time to understand our brand, our goals, and our audience before writing a single line of code. The final website was clean, fast, and beautifully designed. Our client inquiries doubled within the first month of launching. If you{"'"}re looking for a developer who genuinely cares about your success, Ashraful is your guy.</p>
                        <hr className='text-[#d2d2d2]/70 mt-6 mb-5' />
                        <div className='flex items-center gap-3'>
                            <Image src={'https://res.cloudinary.com/db30o33kz/image/upload/v1785518804/user-3_hotqxq.png'} alt='user image' width={50} height={50} className='rounded-full' />
                            <div>
                                <h4 className='capitalize font-medium'>James Carter</h4>
                                <h5 className='capitalize font-medium text-[#5D5D5D] text-[15px]'>Marketing Director</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-[#d2d2d2] rounded-2xl p-5 mt-20'>
                        <p className='text-[#7E7067] '>I had a rough idea of what I wanted and Ashraful turned it into something far beyond what I imagined. He was communicative throughout the entire process, always open to feedback, and delivered everything on time. The attention to detail in both design and functionality was truly impressive. Our online sales increased significantly after the redesign. I couldn{"'"}t be happier.</p>
                        <hr className='text-[#d2d2d2]/70 mt-6 mb-5' />
                        <div className='flex items-center gap-3'>
                            <Image src={'https://res.cloudinary.com/db30o33kz/image/upload/v1785518800/user-2_wv4yxs.png'} alt='user image' width={50} height={50} className='rounded-full' />
                            <div>
                                <h4 className='capitalize font-medium'>Sarah Mitchell</h4>
                                <h5 className='capitalize font-medium text-[#5D5D5D] text-[15px]'>Business Owner</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#d2d2d2] rounded-2xl p-5 mt-10'>
                        <p className='text-[#7E7067] '>We had been struggling with an outdated, slow website for years. Ashraful completely transformed it into a modern, responsive, and high-performing platform. The whole process was smooth, transparent, and stress-free. He even provided guidance after launch to make sure everything was running perfectly. An incredibly skilled and dedicated professional.</p>
                        <hr className='text-[#d2d2d2]/70 mt-6 mb-5' />
                        <div className='flex items-center gap-3'>
                            <Image src={'https://res.cloudinary.com/db30o33kz/image/upload/v1785518807/user-4_dyfioo.png'} alt='user image' width={50} height={50} className='rounded-full' />
                            <div>
                                <h4 className='capitalize font-medium'>Emily Rodriguez</h4>
                                <h5 className='capitalize font-medium text-[#5D5D5D] text-[15px]'>E-commerce Manager</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;