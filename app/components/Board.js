import React from 'react'
import Box from './Box'
import Ω from 'lomega'

export default React.createClass({

  render: function () {
    Ω(this.props)
    return (
      <div id="board">
          {this.props.boxes.map(function(box) {
            return <Box box={box}
              cells={this.props.cells}/>
          }.bind(this)
          )}
      </div>
    )
  }
})
