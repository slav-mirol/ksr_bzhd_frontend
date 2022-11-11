import React, { useState, useEffect } from 'react';
import LeftPicture from './assets/leftPicture.png';
import MidPicture from './assets/midPicture.png';
import RightPicture from './assets/rightPicture.png';


const App = (props) => {
    return (
      <div className="App">
        <img src={LeftPicture} />
        <img src={MidPicture} />
        <img src={RightPicture} />
        <div>Тут начинаем писать уже свои теги и так далее, див с className App не трогаем</div>
      </div>
    );
}

export default App;