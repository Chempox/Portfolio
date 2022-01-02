import './ProjectCardLeft.css'
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';

function ProjectCardLeft() {
    return(
        <div className='pc-main'>
            <img src="https://images3.alphacoders.com/823/thumb-1920-82317.jpg" alt="project" />
            <div className='information-container'>
                    <h1>Project Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto consequuntur corporis officia est, saepe at porro quidem totam voluptatibus vel aut praesentium laudantium quibusdam nam ad architecto dolore commodi.</p>
                    <div className='pc-buttons'>
                        <BsGithub className='pc-button-1'/>
                        <IoMdOpen className='pc-button-2'/>
                    </div>
            </div>
        </div>
    );
}

export default ProjectCardLeft;