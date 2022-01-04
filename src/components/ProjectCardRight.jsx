import './ProjectCardRight.css'
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';


function ProjectCardRight () {

    const {ref, inView} = useInView(
    );
    const animation = useAnimation();
    useEffect(() =>{
        if(inView)
        {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',duration: 1, bounce: 0.3
                }
            })
        }

        if(!inView)
        {
            animation.start({x: '100%'})
        }
    })

    return (
        <div className='pcr-wrapper'>
            <motion.div animate={animation} ref={ref} className='pcr-main'>
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