import React from 'react'
import Line from "./Line"

class Lines extends React.Component {
    render() {
      if (this.props.lines.length > 0) {
        return (
          <div>
            {this.props.lines.map((elem) => (
              <Line onDelete={this.props.onDelete} key={elem.id} line={elem} />
            ))}
          </div>
        )
      } else {
        return (
          <p className='empty-line-text'>Вы пока что не добавили ни одну линию</p>
        )
      }
    } 
  }

  export default Lines;