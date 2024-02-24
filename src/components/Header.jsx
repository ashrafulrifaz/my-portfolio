import { AppBar, Box, Button, Container, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const pages = [
    {
        name: 'Home',
        path: '#'
    },
    {
        name: 'About',
        path: '#about'
    },
    {
        name: 'skills',
        path: '#skills'
    },
    {
        name: 'Projects',
        path: '#projects'
    },
    {
        name: 'contact',
        path: '#contact'
    },
];

const Header = () => {    
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div>
            <AppBar position="static" sx={{backgroundColor: '#ff00ff00'}}>
                <Container id="header_container">
                    <Toolbar disableGutters className="justify-between">
                        <Typography
                            variant="h2"
                            noWrap
                            component="a"
                            id="logo"
                        >
                            Ashraful
                        </Typography>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, idx) => (
                            <Button
                                href={`${page.path}`}
                                key={idx}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                id="nav_item"
                            >
                                {page.name}
                            </Button>
                            ))}
                        </Box>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                        >
                            <FaBars className="text-xl" />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <Box
                    id="my_drawer"
                >
                    {pages.map((page, idx) => (
                        <Button
                            href={`${page.path}`}
                            key={idx}
                            onClick={handleDrawerToggle}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                            id="nav_item"
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
            </Drawer>
        </div>
    );
};

export default Header;