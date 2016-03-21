import React from 'react'
import Cell from './Cell'

export default React.createClass({

  render: function () {
    let boxClass = "box " + this.props.box
    return (
      <div className={boxClass}>
        {this.props.cells.map(function(cell) {
          return <Cell cell={cell}/>
          })}
      </div>
    )
  }
})
