import cssIcon from '../assets/css-3.png'
import htmlIcon from '../assets/html.png'
import jsIcon from '../assets/js.png'
import githubIcon from '../assets/github.png'
import tailwindIcon from '../assets/tailwindcss.png'
import bootstrapIcon from '../assets/bootstrap.png'
import reactIcon from '../assets/react.png'
import firebaseIcon from '../assets/firebase.png'
import nodejsIcon from '../assets/node-js.svg'
import expressIcon from '../assets/express.svg'
import figmaIcon from '../assets/figma.png'
import mongodbIcon from '../assets/mongodb.svg'
import { Typography } from '@mui/material'

const myExpertise = [
    {
        name: 'HTML5',
        image: htmlIcon
    },
    {
        name: 'CSS3',
        image: cssIcon
    },
    {
        name: 'JavaScript',
        image: jsIcon
    },
    {
        name: 'Github',
        image: githubIcon
    },
    {
        name: 'Figma',
        image: figmaIcon
    },
    {
        name: 'React',
        image: reactIcon
    },
    {
        name: 'Tailwindcss',
        image: tailwindIcon
    },
    {
        name: 'Bootstrap 5',
        image: bootstrapIcon
    },
    {
        name: 'Firebase',
        image: firebaseIcon
    },
    {
        name: 'MongoDB',
        image: mongodbIcon
    },
    {
        name: 'Node.js',
        image: nodejsIcon
    },
    {
        name: 'Express.js',
        image: expressIcon
    }
]

const Expertise = () => {
    return (
        <div className="py-12 text-center" id='skills'>
            <div id="my_badge" className='mb-4'>SKILLS</div>
            <Typography variant="h2" color={'white'}>
                I{"'"}m Knowledgable In..
            </Typography>
            <div className="flex flex-wrap gap-3 md:gap-8 justify-center mt-10">
                {
                    myExpertise.map((item, idx) => (
                        <div key={idx} id="skill_item">
                            <img className='w-5' src={item.image} alt="Icon" />
                            <h6>{item.name}</h6>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Expertise;