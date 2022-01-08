import './SecondPageHeaderTwo.css'
import {motion} from 'framer-motion'

function SeconPageHeaderTwo ({children}) {
    return(
        <motion.div className="sph2-main"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        transition={{ duration: 1.5}}
        variants={{
            visible: { x: -100},
            hidden: { x:'100%'}
        }}>
            <h1>ABOUT ME</h1>
            {children}
        </motion.div>
    )

}

export default SeconPageHeaderTwo;