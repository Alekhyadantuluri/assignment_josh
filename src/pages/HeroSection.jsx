import React, { useEffect } from 'react';
import "../css/HeroSection.css";
function HeroSection() {
    return (
        <div className='HeroParent'>
            <div className='HeroChild'>
                <div className="Name">
                    <div>I'M Alekya</div>
                    <span>Front-end</span> Developer
                </div>
                <div className="Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat <br/>placerat lobortis. 
                Natoque rutrum semper sed suspendisse nunc lectus.
                </div>
                <button><>HIRE ME</> <img src="/assets/images/Vector.png" /></button>
            </div>
        </div>
    );
}

export default HeroSection;