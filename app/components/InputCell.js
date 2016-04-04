import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <div>
        <form>
          <input className='input-cell' type='text' autoFocus={true} maxLength={1} />
        </form>
      </div>
    )
  }
})
