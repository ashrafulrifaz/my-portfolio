import { rufina } from '@/lib/fonts';
import React from 'react';

const AboutDetails = () => {
    return (
        <div className='py-20'>
            <div>
                <h3 className={`${rufina.className} text-xl`}>Introduction</h3>
                <p className='text-[#7E7067] text-[17px] mt-8'>I am Ashraful, a passionate and dedicated frontend developer based in Bangladesh. I have always been fascinated by the intersection of design and technology — the idea that a few lines of code can create something beautiful, functional, and impactful. From the very first time I built a webpage and saw it come to life in the browser, I knew this was exactly what I was meant to do.</p>
                <p className='text-[#7E7067] text-[17px] mt-4'>That fascination turned into a career, and today I help businesses and individuals build their dream websites from the ground up. With a strong eye for detail, a deep love for clean modern design, and a genuine passion for solving problems through technology, I bring creativity and technical expertise to every single project I take on — no matter the size or complexity.</p>
                <div className='my-12 bg-linear-to-r from-[#d2d2d2]/10 via-[#d2d2d2] to-[#d2d2d2]/10 h-[1px]'></div>
            </div>

            <div>
                <h3 className={`${rufina.className} text-xl`}>What I Do</h3>
                <p className='text-[#7E7067] text-[17px] mt-8'>I specialize in building modern, fully responsive websites and web applications that look stunning and perform flawlessly. My work covers everything from designing clean, intuitive user interfaces to writing efficient, scalable code that powers seamless digital experiences. I care deeply about every element on the screen — from the typography and color choices to the micro-animations that make an interface feel truly alive.</p>
                <p className='text-[#7E7067] text-[17px] mt-4'>Whether you need a simple landing page, a full business website, or a complex web application, I handle every stage of the process — from initial concept and wireframing all the way through to final development, testing, and launch. I pay close attention to every pixel, every interaction, and every line of code to make absolutely sure the end result is nothing short of exceptional and leaves a lasting impression on every visitor.</p>
                <div className='my-12 bg-linear-to-r from-[#d2d2d2]/10 via-[#d2d2d2] to-[#d2d2d2]/10 h-[1px]'></div>
            </div>

            <div>
                <h3 className={`${rufina.className} text-xl`}>My Approach</h3>
                <p className='text-[#7E7067] text-[17px] mt-8'>I believe that a truly great website is never just about good looks. It is about strategy, purpose, and experience working together in perfect harmony. Before I write a single line of code, I take the time to deeply understand your business, your goals, your competitors, and the people you are trying to reach. I study what works in your industry and what does not — so every decision I make is intentional and purposeful.</p>
                <p className='text-[#7E7067] text-[17px] mt-4'>I ask the right questions, challenge assumptions, and then craft a tailored solution that speaks directly to your audience and supports your business goals. My development process is transparent, collaborative, and deeply detail-driven — because I firmly believe that the best results always come from a genuine, trusting partnership between developer and client. I push myself on every project to go further, think deeper, and create something that we are both genuinely proud to put our names on.</p>
                <div className='my-12 bg-linear-to-r from-[#d2d2d2]/10 via-[#d2d2d2] to-[#d2d2d2]/10 h-[1px]'></div>
            </div>

            <div>
                <h3 className={`${rufina.className} text-xl`}>Why Work With Me</h3>
                <p className='text-[#7E7067] text-[17px] mt-8'>There are a lot of developers out there — so why choose me? Because I do not just build websites. I build relationships, solve real problems, and deliver work that makes a lasting and meaningful impact. I approach every project with the same level of dedication and enthusiasm — whether it is a small personal site or a large-scale business platform. When you hire me, you are getting someone who is fully and completely invested in your success from the very first conversation.</p>
                <p className='text-[#7E7067] text-[17px] mt-4'>I communicate clearly and consistently throughout the entire process, keep you updated and involved at every stage, and always deliver on time without ever compromising on quality. I take enormous pride in going above and beyond for every single client — not because I have to, but because that is simply the standard I hold myself to every single day. Your success is my success. Your vision becomes my mission. And that is a commitment I take seriously with every project I choose to accept and every client I choose to work with.</p>
            </div>
        </div>
    );
};

export default AboutDetails;