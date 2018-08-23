import React, { Component } from 'react';
import Pic1 from '../assets/Feature/SSF1.jpg';
import Pic2 from '../assets/Feature/SSF2.jpg';
import Pic3 from '../assets/Feature/SSF3.jpg';
import Pic4 from '../assets/Feature/SSF4.jpg';
import Pic5 from '../assets/Feature/SSF5.jpg';

class Landing extends Component {
    render(){
        return(
            <div className='pictureSlideshow'>
                <img className='pictures'src={Pic1}/>
                <img className='pictures'src={Pic2}/>
                <img className='pictures'src={Pic3}/>
                <img className='pictures'src={Pic4}/>
                <img className='pictures'src={Pic5}/>
            </div>
        );
    }
}

export default Landing;