import React from 'react'
import Box from './Box'

export default React.createClass({

  render: function () {
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
// initialBoxContents={this.props.initialBoxContents}
