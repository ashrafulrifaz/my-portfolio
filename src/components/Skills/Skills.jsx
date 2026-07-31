"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const floatAnimation = (duration, delay, distance = 12) => ({
  animate: {
    y: [0, -distance, 0],
  },
  transition: {
    y: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const hoverEffect = {
  scale: 1.15,
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

const Skills = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center relative'>
            <h6 className='text-[#251D18] text-lg capitalize font-medium'>Always Building <br /> always growing</h6>

            <div>
                <motion.div
                    {...floatAnimation(4, 0)}
                    whileHover={hoverEffect}
                    className='rounded-2xl overflow-hidden w-14 h-14 bg-black absolute top-1/2 right-[20%] cursor-pointer'
                >
                    <Image src={'/assets/skills/better-auth.png'} alt='better-auth logo' width={50} height={50} className='w-14 h-14' />
                </motion.div>

                <motion.div
                    {...floatAnimation(3.5, 0.3)}
                    whileHover={hoverEffect}
                    className='rounded-2xl overflow-hidden w-14 h-14 bg-black absolute bottom-20 left-1/5 flex items-center justify-center cursor-pointer'
                >
                    <Image src={'/assets/skills/figma.png'} alt='figma logo' width={50} height={50} className='w-14 h-20' />
                </motion.div>

                <motion.div
                    {...floatAnimation(4.2, 0.6)}
                    whileHover={hoverEffect}
                    className='rounded-2xl overflow-hidden w-14 h-14 bg-[#F9F8F6] absolute top-20 right-[30%] border border-[#d2d2d2] flex items-center justify-center cursor-pointer'
                >
                    <Image src={'/assets/skills/firebase.png'} alt='firebase logo' width={50} height={50} className='w-10 h-10 rounded-lg' />
                </motion.div>

                <motion.div
                    {...floatAnimation(3.8, 0.9)}
                    whileHover={hoverEffect}
                    className='rounded-2xl overflow-hidden w-14 h-14 bg-black flex items-center justify-center absolute top-10 left-5 cursor-pointer'
                >
                    <Image src={'/assets/skills/framer.jpg'} alt='framer logo' width={50} height={50} className='w-14 h-14' />
                </motion.div>

                <motion.div
                    {...floatAnimation(4.5, 0.2)}
                    whileHover={hoverEffect}
                    className='rounded-2xl overflow-hidden w-14 h-14 bg-black flex items-center justify-center absolute bottom-10 right-10 cursor-pointer'
                >
                    <Image src={'/assets/skills/react.png'} alt='react logo' width={50} height={50} className='w-10 h-10' />
                </motion.div>

                <motion.div
                    {...floatAnimation(3.6, 0.5)}
                    whileHover={hoverEffect}
                    className="rounded-2xl overflow-hidden w-14 h-14 bg-[#F9F8F6] flex items-center justify-center border border-[#d2d2d2] absolute top-1/4 right-15 cursor-pointer"
                >
                    <Image src={'/assets/skills/js.png'} alt='js logo' width={50} height={50} className='w-10 h-10 rounded-lg' />
                </motion.div>

                <motion.div
                    {...floatAnimation(4.1, 0.8)}
                    whileHover={hoverEffect}
                    className="rounded-2xl overflow-hidden w-14 h-14 bg-[#F9F8F6] flex items-center justify-center border border-[#d2d2d2] absolute top-1/4 left-1/4 cursor-pointer"
                >
                    <Image src={'/assets/skills/github-logo.png'} alt='github logo' width={50} height={50} className='w-10 h-10 rounded-lg' />
                </motion.div>

                <motion.div
                    {...floatAnimation(3.9, 0.4)}
                    whileHover={hoverEffect}
                    className="rounded-2xl overflow-hidden w-14 h-14 bg-[#F9F8F6] flex items-center justify-center border border-[#d2d2d2] absolute top-1/2 left-16 cursor-pointer"
                >
                    <Image src={'/assets/skills/Next.js.png'} alt='nextjs logo' width={50} height={50} className='w-10 h-10 rounded-lg' />
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;