import React from 'react'
import AddDevice from './AddDevice'
import Devices from './Devices'
import {postApiSuggestions} from './requests'

class Line extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'Линия',
        line:{
          id: 0,
          devices: [],
          temperature: 55,
          voltage: 230
        },
        square: 0,
        sum_power: 0,
        current_amperage: 0,
        nominal_amperage: 0,
        max_permissible_amperage: 0,
        addedDevice: false,
        editLine: false,
      }
      this.countDevices = 0;
      this.addDevice = this.addDevice.bind(this)
      this.deleteDevice = this.deleteDevice.bind(this)
    }

    line_num = this.props.line.id;
    id_volt_l='background_voltage_left' + this.line_num;
    id_volt_r='background_voltage_right' + this.line_num;
    id_name_d='id_name_d' + this.line_num;
    id_name_d='id_name_d' + this.line_num;
    render() {
      return (
        <div style={{padding:15}}>
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
                {!this.state.editLine && !this.state.name && <p className='line'>Линия</p>}
                {!this.state.editLine && this.state.name && <p className='line'>{this.state.name}</p>}
                {this.state.editLine && <input className='input_line' value={this.state.name} placeholder='Введите название линии' onChange = {(e) => {
                  this.setState({
                    name: e.target.value,
                    line: this.state.line,
                    square: this.state.square,
                    sum_power: this.state.sum_power,
                    current_amperage: this.state.current_amperage,
                    nominal_amperage: this.state.nominal_amperage,
                    max_permissible_amperage: this.state.max_permissible_amperage,
                    addedDevice: this.state.addedDevice,
                    editLine: true,
                  })
                }} />}
                {!this.state.editLine && <button className="minus-line-btn" onClick={() => {
                  this.setState({
                    name: this.state.name==='' ? "Линия" : this.state.name,
                    line: this.state.line,
                    square: this.state.square,
                    sum_power: this.state.sum_power,
                    current_amperage: this.state.current_amperage,
                    nominal_amperage: this.state.nominal_amperage,
                    max_permissible_amperage: this.state.max_permissible_amperage,
                    addedDevice: this.state.addedDevice,
                    editLine: true,
                  });
                }}>
                  <div className="edit-btn__icon">
                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.9062 38.0938H38.0937" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.9062 31.4687V24.8437L30.0115 10.8174C30.2086 10.6344 30.5151 10.6401 30.7053 10.8303L35.5447 15.6697C35.7349 15.8599 35.7406 16.1664 35.5576 16.3635L21.5312 31.4687H14.9062Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>}
                {this.state.editLine && <button className="minus-line-btn" onClick={() => {
                  this.setState({
                    line: this.state.line,
                    square: this.state.square,
                    sum_power: this.state.sum_power,
                    current_amperage: this.state.current_amperage,
                    nominal_amperage: this.state.nominal_amperage,
                    max_permissible_amperage: this.state.max_permissible_amperage,
                    addedDevice: this.state.addedDevice,
                    editLine: false,
                  });
                }}>
                  <div className="edit-btn__icon">
                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.9062 38.0938H38.0937" stroke="white" stroke-width="2" strokeLinecap="round" stroke-Linejoin="round"/>
                      <path d="M14.9062 31.4687V24.8437L30.0115 10.8174C30.2086 10.6344 30.5151 10.6401 30.7053 10.8303L35.5447 15.6697C35.7349 15.8599 35.7406 16.1664 35.5576 16.3635L21.5312 31.4687H14.9062Z" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>}
              </div>
            </div>
          </div>
          <div className='devices'>
            <Devices devices={this.state.line.devices} onDelete={this.deleteDevice}/>
            <AddDevice onAdd={this.addDevice} postSuggestions={this.postSuggestions}/>
            <div className='input_parametrs' style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className='input_temperature'>
                  <p style={{marginBottom:5,marginTop:5}} htmlFor="cowbell">-45 °C</p>
                  <input type="range" className="temperature" min="-45" max="55" step='1' onChange={ async (v) => {
                    let response = await postApiSuggestions(
                      {
                        devices: this.state.line.devices,
                        temperature: Number(v.target.value),
                        voltage: this.state.line.voltage
                      }
                    )
                    this.setState({
                      line: {
                        id: this.state.line.id,
                        devices: this.state.line.devices,
                        temperature: Number(v.target.value),
                        voltage: this.state.line.voltage
                      },
                      square: response.square,
                      sum_power: response.sum_power,
                      current_amperage: response.current_amperage,
                      nominal_amperage: response.nominal_amperage,
                      max_permissible_amperage: response.max_permissible_amperage,
                      addedDevice: this.state.addedDevice,
                    });
                  }}/>
                  <p style={{marginBottom:5,marginTop:5}} htmlFor="cowbell">55 °C</p>
                </div>
                <p style={{marginLeft:140-(50-this.state.line.temperature),marginTop:0,whiteSpace:'nowrap', width:50, marginBottom:0,}}>{this.state.line.temperature} °C</p>
              </div>
              <div className='input_voltage'>
                <div className='background_voltage' id={this.id_volt_l}>
                  <button className='voltage_btn' id='left-btn' onClick={ async () => {
                    document.getElementById(this.id_volt_l).style.background = 'white';
                    document.getElementById(this.id_volt_r).style.background = 'transparent';
                    let response = await postApiSuggestions(
                      {
                        devices: this.state.line.devices,
                        temperature: this.state.line.temperature,
                        voltage: 230
                      }
                    )
                    this.setState({
                      line: {
                        id: this.state.line.id,
                        devices: this.state.line.devices,
                        temperature: this.state.line.temperature,
                        voltage: 230
                      },
                      square: response.square,
                      sum_power: response.sum_power,
                      current_amperage: response.current_amperage,
                      nominal_amperage: response.nominal_amperage,
                      max_permissible_amperage: response.max_permissible_amperage,
                      addedDevice: this.state.addedDevice,
                    })
                  }}>
                    <p className='section'>230 В</p>
                  </button>
                </div>
                <div className='background_voltage' id={this.id_volt_r}>
                <button className='voltage_btn' id='right-btn' onClick={ async () => {
                  document.getElementById(this.id_volt_r).style.background = 'white';
                  document.getElementById(this.id_volt_l).style.background = 'transparent';
                  let response = await postApiSuggestions(
                    {
                      devices: this.state.line.devices,
                      temperature: this.state.line.temperature,
                      voltage: 380
                    }
                  )
                  this.setState({
                    line: {
                      id: this.state.line.id,
                      devices: this.state.line.devices,
                      temperature: this.state.line.temperature,
                      voltage: 380
                    },
                    square: response.square,
                    sum_power: response.sum_power,
                    current_amperage: response.current_amperage,
                    nominal_amperage: response.nominal_amperage,
                    max_permissible_amperage: response.max_permissible_amperage,
                    addedDevice: this.state.addedDevice,
                  })
                }}>
                  <p className='section'>380 В</p>
                </button>
                </div>
              </div>
            </div>
          </div>
          {this.state.addedDevice && <div className='parametersOfLine'>
            <p className='section'>Суммарная мощность:</p>
            <p className='section'>{this.state.sum_power} Вт</p>
            <p className='section'>Рабочий ток цепи:</p>
            <p className='section'>{this.state.current_amperage} А</p>
            <p className='section'>Площадь сечения:</p>
            <p className='section'>{this.state.square} мм²</p>
            <p className='auto'>Условный ток расцепления:</p>
            <p className='auto'>{this.state.max_permissible_amperage} А</p>
            <p className='auto'>Номинальный ток автомата:</p>
            <p className='auto'>{this.state.nominal_amperage} А</p>
          </div>}
        </div>
      )
    }

  async addDevice(_name,_power) {
    this.countDevices += 1;
    let response = await postApiSuggestions(
      {
        devices: [...this.state.line.devices, {id: this.countDevices, name: _name, power: _power}],
        temperature: this.state.line.temperature,
        voltage: this.state.line.voltage
      }
    );
    this.setState({
      line:{
        id: this.state.line.id,
        devices: [
          ...this.state.line.devices, {id: this.countDevices, name: _name, power: _power}
        ],
        temperature: this.state.line.temperature,
        voltage: this.state.line.voltage
      },
      square: response.square,
      sum_power: response.sum_power,
      current_amperage: response.current_amperage,
      nominal_amperage: response.nominal_amperage,
      max_permissible_amperage: response.max_permissible_amperage,
      addedDevice: true
    })
    document.getElementById("inp_name_device").value = "";
    document.getElementById("inp_power_device").value = "";
  }

  async deleteDevice(num) {
    let response = await postApiSuggestions(
      {
        devices: this.state.line.devices.filter((el) => el.id !== num),
        temperature: this.state.line.temperature,
        voltage: this.state.line.voltage
      }
    );
    this.setState({
      line:{
        id: this.state.line.id,
        devices: this.state.line.devices.filter((el) => el.id !== num),
        temperature: this.state.line.temperature,
        voltage: this.state.line.voltage
      },
      square: response.square,
      sum_power: response.sum_power,
      current_amperage: response.current_amperage,
      nominal_amperage: response.nominal_amperage,
      max_permissible_amperage: response.max_permissible_amperage,
      addedDevice: this.state.line.devices.length===1 ? false : true,
    });
  }
}

export default Line;