import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center relative'>
            <h6 className='text-[#251D18] text-lg capitalize font-medium'>Always Building <br /> always growing</h6>

            <div>
                <div className='rounded-2xl overflow-hidden w-14 h-14 bg-black absolute top-1/2 right-[20%]'>
                    <Image src={'/assets/better-auth.png'} alt='better-auth logo' width={50} height={50} className='w-14 h-14' /> 
                </div>
                <div className='rounded-2xl overflow-hidden w-14 h-14 bg-black absolute bottom-20 left-1/5 flex items-center justify-center'>
                    <Image src={'/assets/figma.png'} alt='figma logo' width={50} height={50} className='w-14 h-20' /> 
                </div>
                <div className='rounded-2xl overflow-hidden w-14 h-14 bg-[#F9F8F6] absolute top-20 right-[30%] border border-[#d2d2d2] flex items-center justify-center'>
                    <Image src={'/assets/firebase.png'} alt='firebase logo' width={50} height={50} className='w-10 h-10 rounded-lg' /> 
                </div>
                <div className='rounded-2xl overflow-hidden w-14 h-14 bg-black flex items-center justify-center absolute top-10 left-5'>
                    <Image src={'/assets/framer.jpg'} alt='framer logo' width={50} height={50} className='w-14 h-14' /> 
                </div>
                <div className='rounded-2xl overflow-hidden w-14 h-14 bg-black flex items-center justify-center absolute bottom-10 right-10'>
                    <Image src={'/assets/react.png'} alt='react logo' width={50} height={50} className='w-10 h-10' /> 
                </div>
                <div className="rounded-2xl overflow-hidden w-14 h-14 bg-[#F9F8F6] flex items-center justify-center border border-[#d2d2d2] absolute top-1/4 right-15">
                    <Image src={'/assets/js.png'} alt='js logo' width={50} height={50} className='w-10 h-10 rounded-lg' /> 
                </div>
                <div className="rounded-2xl overflow-hidden w-14 h-14 bg-[#F9F8F6] flex items-center justify-center border border-[#d2d2d2] absolute top-1/4 left-1/4">
                    <Image src={'/assets/github-logo.png'} alt='github logo' width={50} height={50} className='w-10 h-10 rounded-lg' /> 
                </div>
                <div className="rounded-2xl overflow-hidden w-14 h-14 bg-[#F9F8F6] flex items-center justify-center border border-[#d2d2d2] absolute top-1/2 left-16">
                    <Image src={'/assets/Next.js.png'} alt='nextjs logo' width={50} height={50} className='w-10 h-10 rounded-lg' /> 
                </div>
            </div>
        </div>
    );
};

export default Skills;