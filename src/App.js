import React, { useState, useEffect } from 'react';
import LeftPicture from './assets/leftPicture.svg';
import MidPicture from './assets/midPicture.svg';
import RightPicture from './assets/rightPicture.svg';
import './App.css'

const App = (props) => {
    return (
      <main>
        <div class='main-wrapper'>
          <section class='left-wrapper'>
            <img class='left-picture' src={LeftPicture} alt='Левая загагуля'/>
          </section>
          <section class='mid-wrapper'>
            <img class='mid-picture' src={MidPicture} alt='Центральная загагуля'/>
            <div class='mid-wrapper__title title'>а <span class='mid-wrapper__title_background-color'>чё</span> надо то?</div>
            <div class='mid-wrapper__subtitle subtitle'>/когда лень думать самому/</div>
            <div class='mid-wrapper__subsubtitle subtitle'>помощь в выборе <span class='mid-wrapper__subsubtitle_pink-color'>УЗО</span> и <span class='mid-wrapper__subsubtitle_purple-color'>автоматических выключателей</span></div>
            <button>
              <div class='button-text'>НАЧАТЬ</div>
            </button>
          </section>
          <section class='right-wrapper'>
            <img class='right-picture' src={RightPicture} alt='Правая загагуля'/>
          </section>
        </div>
      </main>
    );
}

export default App;