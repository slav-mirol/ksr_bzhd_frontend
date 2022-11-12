import React from 'react';
import { Route, Routes} from "react-router-dom";
import Calculator from './calculator/Calculator';
import Home from './home/Home';

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
}

export default App;