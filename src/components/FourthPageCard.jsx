import './FourthPageCard.css'
import { BsGithub } from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs'
function FourthPageCard () 
{
    return(
        <div className='fp-card'>
                <div className='fp-card-information'>
                    <h1>Get in Touch</h1>
                    <p>I'm always looking for new projects and opportunities.</p>
                    <p>don't be shy, send me a message.</p>
                </div>
                <div className='fp-card-button'><button>Say Hello</button></div>
                <div className='fp-card-footer'>
                    <a href="https://github.com/Chempox"><BsGithub className='cf-icon'/></a>
                    <p>|</p>
                    <a href="https://www.linkedin.com/in/juan-pablo-y%C3%A1%C3%B1ez-gonz%C3%A1lez-1404b720a/"><BsLinkedin className='cf-icon'/></a>
                </div>
            </div>
    );
}

export default FourthPageCard;