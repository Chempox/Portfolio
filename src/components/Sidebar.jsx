import './Sidebar.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';



function Sidebar() {
    const [menuState, setMenu] = useState(false);
    const handleHamMenu = () => {setMenu(!menuState);};
    return(
        <div className='hm-container'>
            <AiOutlineArrowLeft className={menuState ? 'arrow-right':'arrow-left'} onClick={handleHamMenu}/>
            <div className={menuState ? 'hamburger-menu active':'hamburger-menu'}>
                <ul>
                    <li>About Me</li>
                    <li>My Work</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;