import React, { useState, useEffect } from 'react';
import LeftPicture from './assets/leftPicture.svg';
import MidPicture from './assets/midPicture.svg';
import RightPicture from './assets/rightPicture.svg';
import './App.css'

const App = (props) => {
    return (
      <main>
        <div class='background-pictures-wrapper'>
          <div class='left-picture-wrapper'>
            <img class='left-picture' src={LeftPicture} alt='Левая загагуля'/>
          </div>
          <div class='mid-picture-wrapper'>
            <img class='mid-picture' src={MidPicture} alt='Центральная загагуля'/>
          </div>
          <div class='right-picture-wrapper'>
            <img class='right-picture' src={RightPicture} alt='Правая загагуля'/>
          </div>
        </div>
      </main>
    );
}

export default App;