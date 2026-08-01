import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='py-60'>
            <h3 className='text-4xl text-center'>page not found</h3>
            <div className='flex justify-center mt-8 lg:mt-14'>
                <Link href={'/'} className='btn'>
                    <span className="text-sm">Back To Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18.5 12L4.99997 12"></path>
                        <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;