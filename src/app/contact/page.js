import ChatSection from '@/components/ChatSection/ChatSection';
import SocialSection from '@/components/SocialSection/SocialSection';
import React from 'react';

const page = () => {
    return (
        <div className='px-0 lg:px-40 py-10 lg:py-14 lg:mt-20'>
            <ChatSection />
            <SocialSection />
        </div>
    );
};

export default page;