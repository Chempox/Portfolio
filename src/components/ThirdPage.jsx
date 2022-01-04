import './ThirdPage.css'
import ProjectCardLeft from './ProjectCardLeft';
import ProjectCardRight from './ProjectCardRight';
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

function ThirdPage() {

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
            animation.start({x: '100%'})
        }
    })
    
    return(
        <div className="tp-main">
            <motion.div animate={animation} ref={ref} className='third-page-information'>
                <h1>MY WORK</h1>
                <p>A small selection of projects that I have worked on.</p>
            </motion.div>
            <br />
            <div className='tp-cards'>
                <div  className='tp-content-left'>
                    <ProjectCardLeft/>
                </div>
                <div className='tp-content-right'>
                    <ProjectCardRight/>
                </div>
                <div className='tp-content-left'>
                    <ProjectCardLeft/>
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;