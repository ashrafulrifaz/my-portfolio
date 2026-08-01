import ChatSection from '@/components/ChatSection/ChatSection';
import SocialSection from '@/components/SocialSection/SocialSection';
import React from 'react';

const page = () => {
    return (
        <div className='px-40 py-14'>
            <ChatSection />
            <SocialSection />
        </div>
    );
};

export default page;