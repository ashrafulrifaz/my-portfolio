import { Box, Modal, } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css';

const ModalComp = ({handleClose, open, item}) => {
    const {desktop_images} = item || {}

    return (
        <div>            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box id="slider_modal">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper" autoHeight>
                        {
                            desktop_images && desktop_images.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={item} alt="image" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalComp;