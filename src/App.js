import React, { useState, useEffect, useRef } from 'react';
import LeftPicture from './assets/leftPicture.svg';
import MidPicture from './assets/midPicture.svg';
import RightPicture from './assets/rightPicture.svg';
import './App.css'

const App = (props) => {
  const leftPictureRef = useRef();
  const rightPictureRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', event => {
      requestAnimationFrame(() => {
        //const rotation = window.scrollY / 10 % Math.PI;
        const leftRotation = window.scrollY / 10;
        leftPictureRef.current.style.transform = `rotate(${leftRotation}deg)`;
        const rightRotation = -window.scrollY / 10;
        rightPictureRef.current.style.transform = `rotate(${rightRotation}deg)`;
      });
    });
  }, []);

  return (
    <main>
      <div className='main-wrapper'>
        <section className='left-wrapper'>
          <img className='left-picture' style={{}} ref={leftPictureRef} src={LeftPicture} alt='Левая загагуля'/>
        </section>
        <section className='mid-wrapper'>
          <img className='mid-picture' src={MidPicture} alt='Центральная загагуля'/>
          <div className='mid-wrapper__title title'>а <span className='mid-wrapper__title_background-color'>чё</span> надо то?</div>
          <div className='mid-wrapper__subtitle subtitle'>/когда лень думать самому/</div>
          <div className='mid-wrapper__subsubtitle subtitle'>помощь в выборе <span className='mid-wrapper__subsubtitle_pink-color'>УЗО</span> и <span className='mid-wrapper__subsubtitle_purple-color'>автоматических выключателей</span></div>
          <button>
            <div className='button-text'>НАЧАТЬ</div>
          </button>
        </section>
        <section className='right-wrapper'>
          <img className='right-picture' style={{}} ref={rightPictureRef} src={RightPicture} alt='Правая загагуля'/>
        </section>
      </div>
    </main>
  );
}

export default App;