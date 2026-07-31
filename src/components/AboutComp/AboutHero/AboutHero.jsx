import { HyperText } from '@/components/MiniComp/HyperText';
import { PixelImage } from '@/components/MiniComp/PixelImage';
import { fjallaOne } from '@/lib/fonts';
import React from 'react';

const AboutHero = () => {
    return (
        <div className='h-[80vh]'>
            <div className="grid grid-cols-2 gap-10 h-full">
                <div className="flex flex-col justify-center">
                    <h6 className="text-sm font-medium text-[#8B3100] tracking-widest">ABOUT ME</h6>
                    <h1 className={`${fjallaOne.className} text-6xl mt-12`}>Who Is <HyperText className={``}>Ashraful?</HyperText></h1>
                    <p className="text-[#7E7067] mt-8">I craft pixel-perfect websites that help businesses grow online. Every project I take on is built with clean code, thoughtful design, and a clear focus on delivering real results for my clients.</p>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <PixelImage
                    src="https://res.cloudinary.com/db30o33kz/image/upload/v1785510220/ChatGPT_Image_Jul_30_2026_at_05_06_04_PM_oazgxm.png"
                    alt="ashraful's image"
                    width={3}
                    height={4}
                    customGrid={{ rows: 6, cols: 4 }}
                    grayscaleAnimation
                    blurAmount={14}
                    className="rounded-3xl w-60"
                    />
                </div>
            </div>
            <div className='my-7 bg-linear-to-r from-[#d2d2d2]/10 via-[#d2d2d2] to-[#d2d2d2]/10 h-[1px]'></div>
        </div>
    );
};

export default AboutHero;