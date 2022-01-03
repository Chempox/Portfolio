
import './SecondPage.css'
import { motion } from "framer-motion"

function SecondPage() {
    return (
    <div className='sp-container'>
            <div className='about-me'>
                <motion.div className='second-page-information'
                initial={{opacity: 0}}
                animate={{opacity: 100}}
                transition={{duration: 25}}
                >
                    <img src='https://media-exp1.licdn.com/dms/image/C5603AQG2BXKFFrWsdw/profile-displayphoto-shrink_800_800/0/1625810093742?e=1645660800&v=beta&t=ZSLVuo58lTzUqcdTc-_ELuk408q8IZs9dRBcqm-0kVE' alt="asdasdasd"/>
                    <p>I'm a Full Stack web developer located in Mexico. Focus on building accesible, unique, and intuitive web/mobile aplications.<br/><br/>I have been programming since 2018. Throughout this years I have participated in different projects and worked with several technologies and languages.<br/><br/>I'm currently working as a web developer and about to finish my degree in computer science, in addition to that I'm working on ambitious projects with amazing people.</p>
                    <h2>Technologies I have recently worked with:</h2>
                    <div className='technologies'>
                        <h3>⮞ Node.js</h3>
                        <h3>⮞ Svelte</h3>
                        <h3>⮞ React</h3>
                        <h3>⮞ Python</h3>
                        <h3>⮞ Kotlin</h3>
                        <h3>⮞ C++</h3>
                    </div>
                </motion.div>
                <motion.div className='about-me-header-1'
                initial={{x: '-100%'}}
                animate={{x: 0}}
                transition={{duration: 1}}
                >
                <h1>About Me</h1>
                </motion.div>
                <motion.div className='about-me-header-2'
                initial={{x: '100%'}}
                animate={{x: 0}}
                transition={{duration: 1}}>
                    <h1>About Me</h1>
                </motion.div>
            </div>
    </div>
    );
}

export default SecondPage;