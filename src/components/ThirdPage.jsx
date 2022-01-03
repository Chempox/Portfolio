import './ThirdPage.css'
import ProjectCardLeft from './ProjectCardLeft';
import ProjectCardRight from './ProjectCardRight';
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

function ThirdPage() {

    const {ref, inView} = useInView();
    const {refTwo, inViews} = useInView();
    const animation = useAnimation();
    const animationTwo = useAnimation();
    
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
            animation.start({x: '-100vw'})
        }
    },[inView])


    useEffect(() =>{
        if(inViews)
        {
            animationTwo.start({
                x: 0,
                transition: {
                    duration: 1
                }
            })
        }

        if(!inViews)
        {
            animationTwo.start({x: '-100vw'})
        }
    },[inViews])

    return(
        <div className="tp-main">
            <motion.div className='third-page-information'
            initial={{x: '100%'}}
            animate={{x: 0}}
            transition={{duration: 1}}
            >
                <h1>MY WORK</h1>
                <p>A small selection of projects that I have worked on.</p>
            </motion.div>
            <br />
            <div className='tp-cards'>
                <motion.div ref={ref} className='tp-content-left'
                animate={animation}
                >
                    <ProjectCardLeft/>
                </motion.div>
                <motion.div className='tp-content-right'
                initial={{x: '100%'}}
                animate={{x: 0}}
                transition={{duration: 1}}
                >
                    <ProjectCardRight/>
                </motion.div>
                <motion.div ref={refTwo} className='tp-content-left'
                animate={animationTwo}
                >
                    <ProjectCardLeft/>
                </motion.div>
            </div>
        </div>
    );
}

export default ThirdPage;