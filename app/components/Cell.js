import React from 'react'

export default React.createClass({

  render: function () {

    let cellClass = "cell " + this.props.cell

    return (
      <div className={cellClass}>
      </div>
    )
  }
})
