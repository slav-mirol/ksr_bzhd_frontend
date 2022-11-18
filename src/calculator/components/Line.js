import React from 'react'
import AddDevice from './AddDevice'
import Devices from './Devices'

class Line extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        line:{
          id: 0,
          devices: []
        }
      }
      this.countDevices = 0;
      this.addDevice = this.addDevice.bind(this)
      this.deleteDevice = this.deleteDevice.bind(this)
    }
    line = this.props.line;
    render() {
      return (
        <div>
          <div className='row-btn-line'>
            <button className="minus-line-btn"
            onClick={() => this.props.onDelete(this.props.line.id)}>
              <div className="minus-btn__icon">
                <svg
                  width="77"
                  height="77"
                  viewBox="0 0 77 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M46.5208 40.5C47.6254 40.5 48.5208 39.6046 48.5208 38.5C48.5208 37.3954 47.6254 36.5 46.5208 36.5V40.5ZM30.4792 36.5C29.3746 36.5 28.4792 37.3954 28.4792 38.5C28.4792 39.6046 29.3746 40.5 30.4792 40.5V36.5ZM46.5208 36.5H30.4792V40.5H46.5208V36.5Z" fill="#160042"/>
                  <path d="M15.2396 38.5C15.2396 51.3464 25.6536 61.7604 38.5 61.7604C51.3464 61.7604 61.7604 51.3464 61.7604 38.5C61.7604 25.6536 51.3464 15.2396 38.5 15.2396C25.6536 15.2396 15.2396 25.6536 15.2396 38.5Z" stroke="#160042" strokeWidth="4"/>
                </svg>
              </div>
            </button>
            <div className='edit-line'> 
              <div className='background-line'>
                <p className='line'>Линия </p>
                <button className="minus-line-btn"
              onClick={() => {}}>
                <div className="edit-btn__icon">
                  <svg
                    width="77"
                    height="77"
                    viewBox="0 0 77 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.5208 40.5C47.6254 40.5 48.5208 39.6046 48.5208 38.5C48.5208 37.3954 47.6254 36.5 46.5208 36.5V40.5ZM30.4792 36.5C29.3746 36.5 28.4792 37.3954 28.4792 38.5C28.4792 39.6046 29.3746 40.5 30.4792 40.5V36.5ZM46.5208 36.5H30.4792V40.5H46.5208V36.5Z" fill="#160042"/>
                    <path d="M15.2396 38.5C15.2396 51.3464 25.6536 61.7604 38.5 61.7604C51.3464 61.7604 61.7604 51.3464 61.7604 38.5C61.7604 25.6536 51.3464 15.2396 38.5 15.2396C25.6536 15.2396 15.2396 25.6536 15.2396 38.5Z" stroke="#160042" strokeWidth="4"/>
                  </svg>
                </div>
              </button>
              </div>
              
            </div>
          </div>
              <div className='devices'>
              <Devices devices={this.state.line.devices} onDelete={this.deleteDevice}/>
              <AddDevice onAdd={this.addDevice}/>
              </div>
          
        </div>
      )
    }

    addDevice(_name,_power) {
      this.countDevices += 1;
      this.setState({
        line:{
        id: this.state.line.id,
        devices: [
          ...this.state.line.devices, {id: this.countDevices, name:_name,power:_power}
        ]
      }
      })
      
    }
  
  
  deleteDevice(num) {
      this.setState({
        line:{
          id: this.state.line.id,
          devices: this.state.line.devices.filter((el) => el.id !== num),
        }
        })
    }
}

  export default Line;