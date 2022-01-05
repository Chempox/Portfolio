import './FourthPage.css'
import FourthPageCard from './FourthPageCard';
function FourthPage () {
    const {ref, inView} = useInView(
        );
        const animation = useAnimation();
        useEffect(() =>{
            if(inView)
            {
                animation.start({
                    x: 0,
                    transition: {
                        type: 'spring',duration: 1, bounce: 0.3
                    }
                })
            }
    
            if(!inView)
            {
                animation.start({x: '100%'})
            }
        })
    return(
        <div className="fp-container">
            <FourthPageCard/>
        </div>
    );
}

export default FourthPage;