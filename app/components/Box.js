import React from 'react'
import Cell from './Cell'

export default React.createClass({

  render: function () {

    return (
      <div className='box'>
        {this.props.cells.map(function(cell) {
          return <Cell cell={cell} />
          })}
      </div>
    )
  }
})

// Everything breaks when I add box={this.props.box}
