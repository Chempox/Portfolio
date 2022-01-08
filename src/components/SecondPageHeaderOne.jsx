import './SecondPageHeaderOne.css'
import {motion} from 'framer-motion'
function SeconPageHeaderOne ({children}) {
    return(
        <motion.div className="sph-main"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        transition={{ duration: 1.5}}
        variants={{
            visible: { x: 100, rotate:180},
            hidden: { x:'-100%', rotate:180}
        }}>
            <h1>ABOUT ME</h1>
            {children}
        </motion.div>
    )

}

export default SeconPageHeaderOne;