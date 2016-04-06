import React from 'react'
import InputCell from './InputCell'
import _ from 'lodash'

export default React.createClass({

  render: function () {
    let box = this.props.box
    return (
      <div className='box'>
        {_.map(box, function (number, index) {
          if (number === '0') {
            return <div className='cell' key={index}><InputCell number={number} updateBoard={this.props.updateBoard}/></div>
          } else {
            return <div className='cell' key={index}>{number}</div>
          }
        }.bind(this)
      )}
      </div>
    )
  }
})
