import React from 'react'
import {Link} from "react-router-dom";
import NekitPicture from './../assets/nekit.png';
import JenekPicture from './../assets/jenek.png';
import SlavaPicture from './../assets/slava.png';
import Video from './../assets/video.mp4';
import './About.css'

const About = (props) => {
    return (
      <div className='about'>
        <div className='images-wrapper'>
          <section className='jenek-wrapper'>
            <img className='jenek-picture picture'src={JenekPicture} alt='Жека'/>
            <div className='picture-title'>Designer</div>
          </section>
          <section className='nekit-wrapper'>
            <img className='nekit-picture picture' src={NekitPicture} alt='Некит'/>
            <div className='picture-title'>TeamLead</div>
          </section>
          <section className='slava-wrapper'>
            <img className='slava-picture picture' src={SlavaPicture} alt='Вяч'/>
            <div className='picture-title'>Frontend</div>
          </section>
        </div>

        <Link to="/">
          <div className='return-button'></div>
        </Link>

        <div className="video">
          <video className='video__media' width="100%" height="auto" loop autoPlay muted preload="auto">
            <source src={Video}></source>
          </video>
        </div>
      </div>
    )
}

export default About;