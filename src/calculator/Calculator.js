import React, { useEffect  } from 'react'
import Bicyclist from '../bicyclist/Bicyclist';
import './Calculator.css';

const Calculator = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <main>
        <Bicyclist />
        <div class='bycyclist-text subtitle'>Подождите, пожалуйста, раздел находится в разработке...</div>
      </main>
    )
}

export default Calculator;