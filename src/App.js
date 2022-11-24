import React from 'react';
import { Route, Routes} from "react-router-dom";
import Calculator from './calculator/Calculator';
import Home from './home/Home';
import About from './about/About';

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;