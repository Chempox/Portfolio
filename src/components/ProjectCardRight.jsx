import './ProjectCardRight.css'
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { motion } from "framer-motion";

function ProjectCardRight () {


    return (
        <div className='pcr-wrapper'>
            <motion.div className='pcr-main'>
                <div className='pcr-information-container'>
                        <h1>Project Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto consequuntur corporis officia est, saepe at porro quidem totam voluptatibus vel aut praesentium laudantium quibusdam nam ad architecto dolore commodi.</p>
                        <div className='pcr-buttons'>
                            <BsGithub className='pcr-button-1'/>
                            <IoMdOpen className='pcr-button-2'/>
                        </div>
                </div>
                <img src="https://wallpapercave.com/wp/wp3544754.jpg" alt="project" />
            </motion.div>
        </div>
    );
}

export default ProjectCardRight;