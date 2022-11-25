import React from 'react'

class Device extends React.Component {
    constructor(props) {
      super(props)
    }
    
    render() {
      return (
          <div className='row-btn-device'>
            <button className="minus-line-btn"
              onClick={() => this.props.onDelete(this.props.device.id)}>
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
            <div className='background-device'>
              <p className='line'>{this.props.device.name}</p>
              <p className='Vatts_text'>{this.props.device.power}</p>
              <p className='Vatts_text'>Вт</p>
            </div>
          </div>
      )
    }
}

  export default Device;