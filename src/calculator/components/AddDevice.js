import React from 'react'
import SearchInput from './SearchInput';
import { getApiSuggestions } from './requests';

class AddDevice extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options: [],
        loading: false,
        deviceAdd: {
            name: '',
            power: 0
        }
      };
    }

    getSuggestions = async (word) => {
      if (word) {
          this.setState({loading:true});
          let response = await getApiSuggestions(word);
          this.setState({options:response});
          this.setState({loading:false});
      } else {
        this.setState({options:[]});
      }
    };

    pickValue = (dev) => {
      this.setState({
        loading: false,
        options: [],
        deviceAdd: {
          name: dev.name,
          power: dev.power
        }
      });
    };

    listOfDevices = []
    render() {
      return (
        <div>
            <SearchInput
              loading={this.state.loading}
              options={this.state.options}
              requests={this.getSuggestions}
              pick={this.pickValue}
              placeholder="Название"
            />
              
          <div className='row-btn-device'>
            <button className="plus-line-btn"
            onClick={() => {

              this.props.onAdd(this.state.deviceAdd.name, this.state.deviceAdd.power)
            }}>
              <div className="plus-btn__icon">
                <svg
                  width="74"
                  height="74"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5" clipPath="url(#clip0_20_32)">
                    <path d="M44.7084 38.5C45.5368 38.5 46.2084 37.8284 46.2084 37C46.2084 36.1716 45.5368 35.5 44.7084 35.5V38.5ZM29.2917 35.5C28.4633 35.5 27.7917 36.1716 27.7917 37C27.7917 37.8284 28.4633 38.5 29.2917 38.5V35.5ZM44.7084 35.5H29.2917V38.5H44.7084V35.5Z" fill="#160042"/>
                    <path d="M35.5 44.7084C35.5 45.5368 36.1716 46.2084 37 46.2084C37.8284 46.2084 38.5 45.5368 38.5 44.7084H35.5ZM38.5 29.2917C38.5 28.4633 37.8284 27.7917 37 27.7917C36.1716 27.7917 35.5 28.4633 35.5 29.2917H38.5ZM38.5 44.7084V29.2917H35.5V44.7084H38.5Z" fill="#160042"/>
                    <path d="M14.6458 37C14.6458 49.3459 24.6541 59.3542 37 59.3542C49.3458 59.3542 59.3541 49.3459 59.3541 37C59.3541 24.6541 49.3458 14.6458 37 14.6458C24.6541 14.6458 14.6458 24.6541 14.6458 37Z" stroke="#160042" strokeWidth="3"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_20_32">
                      <rect width="74" height="74" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
            <div className='background-addLine'>
              <p className='addLineText'>Добавить устройство</p>
            </div>
          </div>
        </div>
      )
    }
  }

  export default AddDevice