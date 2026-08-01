import Link from 'next/link';
import React from 'react';

const SocialSection = () => {
    return (
        <div className='grid grid-cols-2 gap-10 mt-10'>
            <div className='border border-[#d2d2d2] rounded-3xl p-5'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h4 className='font-medium text-lg'>Ashraful Islam</h4>
                        <h5 className='text-[#5f5f5f] text-lg'>devrifaz@gmail.com</h5>
                    </div>
                    <div className='bg-[#dadada] rounded-full p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#141b34" fill="none" stroke="#141b34" strokeWidth="1.5" strokeLinejoin="round">
                            <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"></path>
                            <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
                        </svg>
                    </div>
                </div>

                <div className='mt-24'>

                    <Link href={'mailto:your@email.com'} className='btn justify-center text-lg' target='_blank'>
                        <span className="text-sm">Email Me</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18.5 12L4.99997 12"></path>
                            <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"></path>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='border border-[#d2d2d2] rounded-3xl p-5'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h4 className='font-medium text-lg'>Ashraful Islam</h4>
                        <h5 className='text-[#5f5f5f] text-lg'>@ashrafulrifaz</h5>
                    </div>
                    <div className='bg-[#dadada] rounded-full p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#141b34" fill="none" stroke="#141b34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z"></path>
                            <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"></path>
                            <path d="M17.3748 6.75024H17.2498M17.4998 6.75024C17.4998 6.88832 17.3878 7.00024 17.2498 7.00024C17.1117 7.00024 16.9998 6.88832 16.9998 6.75024C16.9998 6.61217 17.1117 6.50024 17.2498 6.50024C17.3878 6.50024 17.4998 6.61217 17.4998 6.75024Z"></path>
                        </svg>
                    </div>
                </div>

                <div className='mt-24'>

                    <Link href={'https://www.instagram.com/ashrafulrifaz/'} className='btn justify-center text-lg' target='_blank'>
                        <span className="text-sm">DM Me</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18.5 12L4.99997 12"></path>
                            <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SocialSection;