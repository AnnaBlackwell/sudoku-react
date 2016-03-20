import React from 'react'
import InputCell from './InputCell'
import PCell from './PCell'


//startingNumber not defined

export default React.createClass({

  render: function () {
    let cellClass = "cell " + this.props.cell
    let cellContents
    if (this.props.startingNumber === 0) {
      cellContents = <InputCell />;
    } else {
      cellContents = <PCell />;
    }

    return (
      <div className={cellClass}>
        {cellContents}
      </div>
    )
  }
})
