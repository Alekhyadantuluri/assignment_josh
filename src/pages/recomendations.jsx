import '../css/recomendations.css';
import Slick from './slider';
const Recommendations = () => {
    return (
        <div className='recomend_main'>
            {/* ------ Heading--------- */}
            <div className='rtitle_bar'>
                <div className="rtitle">
                    <div className='rtitle_heading'>Recommendations</div>
                    <div className='rtitle_description'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Lorem ipsum.
                    </div>
                </div>
            </div>

            {/* --------------Carousel------------- */}
            <Slick/>       </div>
    );
};

export default Recommendations;
