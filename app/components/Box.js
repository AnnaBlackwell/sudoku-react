import React from 'react'
import _ from 'lodash'

export default React.createClass({

  render: function () {
    let box = this.props.box
    return (
      <div className='box'>
        {_.map(box, function (number, index) {
          return <div className='cell' key={index}>{number}</div>
        })}
      </div>
    )
  }
})
