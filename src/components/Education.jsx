import { Grid, Typography } from "@mui/material";
import circle from '../assets/circle.png'

const Education = () => {
    return (
        <div className="py-12 text-center" id="education">
            <div id="my_badge" className='mb-4'>EDUCATION</div>
            <Typography variant="h2">
                From where I am Educated
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }} marginTop="30px" alignItems={'center'} className="h-full items-center">
                <Grid item id="education_container-1">
                    <div className="flex justify-end">
                        <div id="education_card" className="edu_card_1">
                            <Typography variant="h5">
                                Secondary School Certificate
                            </Typography>
                            <Typography variant="h6">
                                Noakhali Bangla Bazar High School
                            </Typography>
                            <Typography variant="body1">
                                2019 - 2021
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item id="education_container-2" className="relative">
                    <div className="justify-center flex items-end">
                        <div className="border-l border-white h-[20vh] md:h-[14vh] absolute top-0">
                        </div>
                    </div>
                    <img src={circle} className="hidden md:block w-2.5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-2 lg:ml-0" alt="" />
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }} alignItems={'center'} className="h-full items-center">
                <Grid item id="education_container-3">
                   
                </Grid>
                <Grid item id="education_container-4" className="relative">
                    <div className="justify-center flex relative">
                        <div className="border-l border-white h-[20vh] md:h-[14vh] absolute bottom-0"></div>
                    </div>
                    <img src={circle} className="hidden md:block w-2.5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-2 lg:ml-0" alt="" />
                </Grid>
                <Grid item id="education_container-5">
                    <div className="justify-start grid">
                        <div>
                            
                        </div>
                        <div id="education_card">
                            <Typography variant="h5">
                                Diploma In Engineering
                            </Typography>
                            <Typography variant="h6">
                                Noakhali Ideal Polytechnic Institute
                            </Typography>
                            <Typography variant="body1">
                                2022 - Present
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Education;