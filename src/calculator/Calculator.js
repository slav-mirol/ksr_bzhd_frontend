import React from 'react'
//import Bicyclist from '../bicyclist/Bicyclist';
import './Calculator.css';
import Lines from './components/Lines';
import AddLine from './components/AddLine'
import {Link} from "react-router-dom";

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.count = 0;
    this.state = { lines: [] }
    this.addLine = this.addLine.bind(this)
    this.deleteLine = this.deleteLine.bind(this)
  }

  render() {
    return (
      <main>
        <div className='left_margin'>
        <Lines lines={this.state.lines} onDelete={this.deleteLine}/>
        <AddLine onAdd={this.addLine}/>
        </div>
        <Link to="/">
          <div className='return-button'></div>
        </Link>
      </main>
    )
  }

  addLine() {
    this.count += 1
    let cur_line = {
      id: this.count,
      devices: [],
      temperature: 0
    }
    this.setState({
      lines: [
        ...this.state.lines, cur_line
      ]
    })
  }


  deleteLine(num) {
    this.setState({
        lines: this.state.lines.filter((el) => el.id !== num)
    })
  }
}

export default Calculator;