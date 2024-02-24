import { Typography } from "@mui/material";
import  { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("projects.json")
            .then(res => setData(res.data))
    }, [])

    return (
        <div className="py-12 text-center" id="projects">             
             <div id="my_badge" className='mb-4'>PROJECTS</div>
            <Typography variant="h2">
                My Recent Projects
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    data && data.map((item, idx) => (
                        <ProjectCard key={idx} item={item}></ProjectCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;