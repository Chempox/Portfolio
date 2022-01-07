import './ProjectCardRight.css'
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { motion } from "framer-motion";

function ProjectCardRight ({children}) {


    return (
        <div className='pcr-wrapper'>
            <motion.div className='pcr-main'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            transition={{ duration: 1.5}}
            variants={{
                visible: { x: 0},
                hidden: { x:'100%'}
            }}>
                <div className='pcr-information-container'>
                        <h1>Project Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto consequuntur corporis officia est, saepe at porro quidem totam voluptatibus vel aut praesentium laudantium quibusdam nam ad architecto dolore commodi.</p>
                        <div className='pcr-buttons'>
                            <BsGithub className='pcr-button-1'/>
                            <IoMdOpen className='pcr-button-2'/>
                        </div>
                </div>
                <img src="https://wallpapercave.com/wp/wp3544754.jpg" alt="project" />
                {children}
            </motion.div>
        </div>
    );
}

export default ProjectCardRight;