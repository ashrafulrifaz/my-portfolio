import { Button, Grid, Typography } from "@mui/material";
import video from '../assets/banner.mp4'
import poster from '../assets/poster.jpg'
import { LuDownload } from "react-icons/lu";
import downloadFile from '../assets/resume.pdf'
import playButton from '../assets/play.png'


const Banner = () => {

    const handleDownload = () => {
        const download = document.createElement('a')
        download.href = downloadFile
        download.download = "ashraful's_resume.pdf"
        document.body.appendChild(download)
        download.click()
        document.body.removeChild(download)
    }

    return (
        <div id="#banner">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems={'center'} className="min-h-[90vh] items-center">
                <Grid item xs={12} sm={6} className="space-y-5 md:space-y-3">
                    <Typography variant="h2" id="banner_title">
                        Kick Off Your Digital Success Journey with a <span className="text-violet-500 font-semibold">Web Developer</span>
                    </Typography>
                    <Typography variant="h6" id="banner_des">
                        Step into this exciting journey with me, Ashraful Islam, your trusted assistant.
                    </Typography>
                    <div className="flex gap-5 justify-center md:justify-start">
                        <Button variant="contained" id="banner_btn">Let{"'"}s Talk</Button>     
                        <Button onClick={handleDownload} variant="contained" id="banner_btn"><LuDownload className="mr-1.5 text-base"/> Resume</Button>                   
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="relative">
                        <video
                            src={video} 
                            controls
                            poster={poster} 
                            style={{ cursor: 'pointer', maxHeight: '100%', maxWidth: '100%' }}
                            className="rounded-lg mt-5 md:mt-0"
                        >
                        </video>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;