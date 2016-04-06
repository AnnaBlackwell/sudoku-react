import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <form>
        <input className='input-cell' type='text' autoFocus={true} maxLength={1} onChange={this.props.updateBoard}/>
      </form>
    )
  }
})
