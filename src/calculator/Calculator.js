import React, {useState} from 'react'
//import Bicyclist from '../bicyclist/Bicyclist';
import './Calculator.css';
import Lines from './components/Lines';
import AddLine from './components/AddLine'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
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
      </main>
    )
  }

  addLine() {
    const id = this.state.lines.length + 1;
    this.setState({
      lines: [
        ...this.state.lines,{ id, devises: [] }
      ]
    })
  }


  deleteLine(num) {
    this.setState({
        lines: this.state.lines.filter((el) => el.id !== num),
    })
    let allLines = this.state.lines.filter((el) => el.id !== num);
    allLines.map((elem) => {
      if (elem.id>num) {
        elem.id -= 1
      } 
      return allLines
    })
  }

  
}

export default Calculator;