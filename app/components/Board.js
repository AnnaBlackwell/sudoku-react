import React from 'react'
import Box from './Box'
import _ from 'lodash'

export default React.createClass({

  render: function () {
    let boxes = this.props.boxes
    return (
      <div id='board'>
          {_.map(boxes, function(box, index) {
            return <Box
              box={box}
              cells={this.props.cells}
              key={index}/>
          }.bind(this)
          )}
      </div>
    )
  }
})
