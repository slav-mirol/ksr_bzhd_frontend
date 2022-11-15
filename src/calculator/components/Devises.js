import React from 'react'
import Device from "./Device"

class Devices extends React.Component {

    render() {
      if (this.props.devices?.length > 0) {
        return (
          <div>
            {this.props.devices.map((elem) => (
              <Device onDelete={this.props.onDelete} key={elem.id} device={elem}/>
            ))}
          </div>
        )
      } else {
        return (
          <p className='empty-devices-text'>Вы пока что не добавили ни одно устройство</p>
        )
      }
    } 
  }

  export default Devices;