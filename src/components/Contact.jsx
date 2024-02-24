import { Grid, Typography } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
    const handleMessage = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z7kb9k5', 'template_8qoy0rp', e.target, 'v9kV_joUmw5l7KVLp')
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Message Send Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }, () => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to Send Your Message",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    
        e.target.reset();
    };

    return (
        <div className="py-12" id="contact">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems={'center'} className="h-full items-center">
                <Grid item xs={12} sm={6} className="space-y-5">
                    <div>                        
                        <div id="my_badge" className='mb-4'>CONTACT</div>
                        <Typography variant="h2">
                            Get In Touch
                        </Typography>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className='w-9 p-2.5 bg-[#905bf666] rounded-xl rotate-45'>
                            <FaPhoneAlt className="text-[#905BF6] -rotate-45 text-md" />
                        </div>
                        <div>
                            <p className='font-medium font-main text-white opacity-80 text-base'>+880 01643876985</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className='w-9 p-2.5 bg-[#d847f066] rounded-xl rotate-45'>
                            <BsEnvelopeFill className="text-[#d847f0] -rotate-45 text-md" />
                        </div>
                        <div>
                            <p className='font-medium font-main text-white opacity-80 text-base'>ashrafulislamrifaz@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" className="font-second text-white">
                            Connect Socialy
                        </Typography>
                        <div className="flex items-center gap-5 mt-2.5">
                            <a id="social" href="https://www.facebook.com/Ashrafulislam320" rel="noreferrer" target="_blank">
                                <FaFacebookF id="social_icon" className="text-[#0866FF]" />
                            </a>
                            <a id="social" href="https://www.linkedin.com/in/imashrafulislam/"rel="noreferrer" target="_blank">
                                <FaLinkedinIn id="social_icon" className="text-[#0A66C2]" />
                            </a>
                            <a id="social" href="https://github.com/ashrafulrifaz"rel="noreferrer" target="_blank">
                                <FaGithub id="social_icon_last" className="text-white" />
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <form onSubmit={handleMessage} className="space-y-5 mt-8 md:mt-0">
                        <input type="text" name="name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <input type="text" name="subject" placeholder="Your Subject" required/>
                        <textarea rows={4} type="text" name="message" placeholder="Your Message" required/>
                        <button id="contact_btn">Send Message</button>     
                    </form>          
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;