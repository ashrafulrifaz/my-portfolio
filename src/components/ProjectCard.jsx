import { Typography } from '@mui/material';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoArrowForwardOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FiTablet } from "react-icons/fi";
import { CiMobile1 } from "react-icons/ci";
import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

import preview1 from "../../src/assets/project-1.1.png"
import preview2 from "../../src/assets/project-1.2.png"
import preview3 from "../../src/assets/project-1.3.png"

// import 'swiper/css';
// import 'swiper/css/navigation';
// import './slider.css';

const ProjectCard = ({item}) => {
    const {thumb_image, title, live_link, desktop_images} = item || {}
    const [device, setDevice] = useState('pc')

    return (
        <div className="space-y-5">
            <div className="project_card">
                <img src={thumb_image} alt="project" />
                <Typography variant="h6">
                    {title}
                </Typography>
                <div className='flex gap-3 svg_container'>
                    <div className="tooltip" data-tip="Preview">
                        <HiMagnifyingGlass onClick={()=>document.getElementById('my_modal_3').showModal()} />
                    </div>
                    <div className="tooltip" data-tip="Live Site">
                        <a href={`${live_link}`} rel="noreferrer" target="_blank">
                            <IoArrowForwardOutline />
                        </a>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className={`modal-box w-11/12 max-w-5xl transition-all duration-500 ${device === "tab" ? "w-1/2" : device === "mobile" ? "w-[30%]" : ""}`}>
                    <div className="flex justify-between">
                        <div className='flex items-center gap-3'>
                            <HiOutlineComputerDesktop className={`text-2xl hover:text-white cursor-pointer ${device === "pc" ? "text-white" : ""}`} onClick={() => setDevice('pc')} />                            
                            <FiTablet className={`text-2xl hover:text-white cursor-pointer ${device === "tab" ? "text-white" : ""}`} onClick={() => setDevice('tab')} />                            
                            <CiMobile1 className={`text-2xl hover:text-white cursor-pointer ${device === "mobile" ? "text-white" : ""}`} onClick={() => setDevice('mobile')} />                            
                            <a href={`${live_link}`} rel="noreferrer" target="_blank">
                                <IoArrowForwardOutline className='text-2xl text-white hover:translate-x-1 transition-all' />
                            </a>                            
                        </div>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</button>
                        </form>
                    </div>
                    <div className='mt-5'>
                    {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper" autoHeight>
                        {
                            desktop_images && desktop_images.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={item} alt="image" className='rounded-md' />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper> */}
                        <img src={preview1} alt="" className={`rounded-md ${device === "pc" ? 'block' : 'hidden'}`} />
                        <img src={preview2} alt="" className={`rounded-md ${device === "tab" ? 'block' : 'hidden'}`} />
                        <img src={preview3} alt="" className={`rounded-md ${device === "mobile" ? 'block' : 'hidden'}`} />
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ProjectCard;