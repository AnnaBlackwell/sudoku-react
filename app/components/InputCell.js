import React from 'react'

export default React.createClass({
  componentDidMount: function () {
    this.finishEdit = this.finishEdit.bind(this)
    this.checkEnter = this.checkEnter.bind(this)
    this.edit = this.edit.bind(this)
    this.renderEdit = this.renderEdit.bind(this)
    this.renderNumber = this.renderNumber.bind(this)
    this.setState = {
      editing: false
    }
  },
  renderEdit: function () {
    return <input type='number'
      autoFocus={true}
      defaultValue={this.props.number}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />
  },
  renderNumber: function () {
    const onDelete = this.props.onDelete
    return (
      <div onClick={this.edit}>
        <span className='number'>{this.props.number}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    )
  },
  edit: function () {
    this.setState({
      editing: true
    })
  },
  checkEnter: function (e) {
    if(e.key === 'Enter') {
      this.finishEdit(e)
    }
  },
  finishEdit: function (e) {
    this.props.onEdit(e.target.value)
    this.setState({
      editing: false
    })
  },
  render: function () {
    console.log('input', this)
    const editing = this.state.editing
    return (
      <div>
        {editing ? this.renderEdit() : this.renderNumber()}
      </div>
    )
  }
})
