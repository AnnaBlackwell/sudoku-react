import React from 'react'
import Cell from './Cell'

export default React.createClass({

  render: function () {

    return (
      <div className='box'>
        {this.props.box.map(function(number) {
          // Ω('number', number)
          return number
          })
        }
        {this.props.cells.map(function(cell) {
          return <Cell cell={cell} number={this.props.number} />
          }.bind(this))}
      </div>
    )
  }
})

// How to pit one number in each cell, instead of 9 numbers on top of each box?
