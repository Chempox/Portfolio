import './ProjectCardLeft.css'
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { motion } from "framer-motion";

function ProjectCardLeft({ children }) {
    return(
        <div>
            <motion.div className='pc-main'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            transition={{ duration: 1.5}}
            variants={{
                visible: { x: 0},
                hidden: { x:'-100%'}
            }}
            >
                <img src="https://wallpapercave.com/wp/wp3544754.jpg" alt="project" />
                <div className='information-container'>
                        <h1>Project Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto consequuntur corporis officia est, saepe at porro quidem totam voluptatibus vel aut praesentium laudantium quibusdam nam ad architecto dolore commodi.</p>
                        <div className='pc-buttons'>
                            <BsGithub className='pc-button-1'/>
                            <IoMdOpen className='pc-button-2'/>
                        </div>
                </div>
                {children}
            </motion.div>
        </div>
    );
}

export default ProjectCardLeft;