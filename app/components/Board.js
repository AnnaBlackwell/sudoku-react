import React from 'react'
import Box from './Box'
import _ from 'lodash'

export default React.createClass({

  render: function () {
    let boxes = this.props.boxes
    let boxClass = 'box'
    return (
      <div id='board'>
          {_.map(boxes, function (box, index) {
            return <Box
              box={box}
              cells={this.props.cells}
              key={index}
              className={boxClass}
              updateBoard={this.props.updateBoard}/>
          }.bind(this)
          )}
      </div>
    )
  }
})
