import './ThirdPage.css'
import ProjectCardLeft from './ProjectCardLeft';
import ProjectCardRight from './ProjectCardRight';
import { motion } from "framer-motion";

function ThirdPage({children}) {
    return(
        <div className="tp-main">
            <motion.div className='third-page-information'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            transition={{ duration: 1.5}}
            variants={{
                visible: { x: 0},
                hidden: { x:'100%'}
            }}>
                <h1>MY WORK</h1>
                <p>A small selection of projects that I have worked on.</p>
                {children}
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