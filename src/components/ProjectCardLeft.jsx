import './ProjectCardLeft.css'
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import { motion } from "framer-motion";

function ProjectCardLeft() {
    
    const {ref, inView} = useInView();
    const animation = useAnimation();
    
    useEffect(() =>{
        if(inView)
        {
            animation.start({
                x: 0,
                transition: {
                    duration: 1
                }
            })
        }

        if(!inView)
        {
            animation.start({x: '-100%'})
        }
    })

    return(
        <div>
            <motion.div animate={animation} ref={ref} className='pc-main'>
                <img src="https://wallpapercave.com/wp/wp3544754.jpg" alt="project" />
                <div className='information-container'>
                        <h1>Project Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto consequuntur corporis officia est, saepe at porro quidem totam voluptatibus vel aut praesentium laudantium quibusdam nam ad architecto dolore commodi.</p>
                        <div className='pc-buttons'>
                            <BsGithub className='pc-button-1'/>
                            <IoMdOpen className='pc-button-2'/>
                        </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ProjectCardLeft;