import { Grid, Typography } from "@mui/material";
import aboutImage from '../assets/poster.jpg'

const About = () => {
    return (
        <div className="py-12" id="about">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 7 }} alignItems={'center'} className="h-full items-center">
                <Grid item xs={12} md={6}>
                    <img src={aboutImage} alt="about" />
                </Grid>
                <Grid item xs={12} md={6} className="space-y-4 order-first lg:order-last">
                    <div id="my_badge">ABOUT</div>
                    <Typography variant="h2">
                        Let{"'"}s Explore Myself
                    </Typography>
                    <Typography variant="body1">
                        Hi, I’m Ashraful Islam, a web developer with 1 years of experience. I’m passionate about creating beautiful, functional websites that meet the needs of my clients. I am expert in HTML, CSS, Bootstrap 5, Tailwind CSS, JavaScript, React, Firebase, mongoDB and mongoose. I bring ideas to life through seamless design and intuitive user interfaces.
                    </Typography>
                    <Typography variant="body1" marginTop={'20px'}>
                        My goal is to deliver results-driven solutions that not only reflect your unique brand identity but also provide an exceptional user experience. I always try to update myself. I’m confident that I can help you create a website that will help you achieve your business goals. Let’s work together!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;