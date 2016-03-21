import React from 'react'
// import InputCell from './InputCell'
// import PCell from './PCell'


//Number not defined

export default React.createClass({

  render: function () {
    let cellClass = "cell " + this.props.cell


    return (
      <div className={cellClass}>

      </div>
    )
  }
})


// let cellContents
// if (this.props.Number === '0') {
//   cellContents = <InputCell />;
// } else {
//   cellContents = <PCell />;
// }
//
// {cellContents}
