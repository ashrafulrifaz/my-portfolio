import { Typography } from "@mui/material";
import DesignImage from '../assets/website-design.png'
import DevelopmentImage from '../assets/code.png'
import ResponsiveImage from '../assets/compatibility.png'

const myServices = [
    {
        title: 'Web Design',
        image: DesignImage,
        description: 'Craft visually stunning websites with a focus on user experience and aesthetic appeal.'
    },
    {
        title: 'Web Development',
        image: DevelopmentImage,
        description: 'Bring your ideas to life through robust and dynamic web solutions tailored to your needs.'
    },
    {
        title: 'Responsive Design',
        image: ResponsiveImage,
        description: 'Guarantee an optimal user experience across devices with our expert responsive web design.'
    }
]

const Services = () => {
    return (
        <div className="py-12" id="services">
            <div id="my_badge" className='mb-4'>SERVICES</div>
            <Typography variant="h2" color={'white'}>
                My Services
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
                {
                    myServices.map((item, idx) => (
                        <div key={idx} id="service_card">
                            <img src={item.image} alt="" />
                            <Typography gutterBottom variant="h5">
                                {item.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {item.description}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;