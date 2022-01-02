import './ThirdPage.css'
import ProjectCardLeft from './ProjectCardLeft';
import ProjectCardRight from './ProjectCardRight';

function ThirdPage() {
    return(
        <div className="tp-main">
            <div className='third-page-information'>
                <h1>My Work</h1>
                <p>A small selection of outstanding projects that I have worked on.</p>
            </div>
            <br />
                <ProjectCardLeft className='tp-content-left'/>
                <ProjectCardRight className='tp-content-right'/>
                <ProjectCardLeft className='tp-content-left'/>
                <ProjectCardRight className='tp-content-right'/>
        </div>
    );
}

export default ThirdPage;