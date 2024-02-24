import { Box, Button, Typography } from "@mui/material";
const pages = [
    {
        name: 'About',
        path: '#about'
    },
    {
        name: 'skills',
        path: '#skills'
    },
    {
        name: 'Work',
        path: '#work'
    },
    {
        name: 'contact',
        path: '#contact'
    },
];

const Footer = () => {
    return (
        <div id="footer">
            <div id="container">
                <Box sx={{ flexGrow: 0, display: "flex"}}>
                    {pages.map((page, idx) => (
                    <Button
                        key={idx}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        id="nav_item"
                    >
                        {page.name}
                    </Button>
                    ))}
                </Box>  
                <Typography variant="body1">
                    © 2023 Ashraful All Rights Reserved. 
                </Typography>  
            </div>
        </div>
    );
};

export default Footer;