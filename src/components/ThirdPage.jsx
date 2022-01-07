import './ThirdPage.css'
import ProjectCardLeft from './ProjectCardLeft';
import ProjectCardRight from './ProjectCardRight';
import { motion } from "framer-motion";

function ThirdPage() {
    return(
        <div className="tp-main">
            <motion.div className='third-page-information'>
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