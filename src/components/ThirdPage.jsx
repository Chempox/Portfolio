import './ThirdPage.css'
import ProjectCard from './ProjectCard';
function ThirdPage() {
    return(
        <div className="tp-main">
            <div className='third-page-information'>
                <h1>My Work</h1>
                <p>A small selection of outstanding projects that I have worked on.</p>
            
            </div>
            <ProjectCard/>
        </div>
    );
}

export default ThirdPage;