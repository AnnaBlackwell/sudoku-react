import React from 'react'

//need to make number props

export default React.createClass({
  constructor(props) {
      super(props)
      this.finishEdit = this.finishEdit.bind(this);
      this.checkEnter = this.checkEnter.bind(this);
      this.edit = this.edit.bind(this);
      this.renderEdit = this.renderEdit.bind(this);
      this.renderNumber = this.renderNumber.bind(this);

      this.state= {
        editing: false
      }
    }
  render: function () {
    const editing = this.state.editing
        return (
          <div>
            {editing ? this.renderEdit() : this.renderNumber()}
          </div>
        )
      }
  renderEdit() {
      return <input type="text"
        autoFocus={true}
        defaultValue={this.props.number}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter} />
    }
  renderNumber() {
      const onDelete = this.props.onDelete
      return (
      <div onClick={this.edit}>
        <span className='number'>{this.props.number}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
      )
    }
    edit() {
      this.setState({
        editing: true
      })
    }
    checkEnter(e) {
      if(e.key ==="Enter") {
        this.finishEdit(e)
      }
    }
    finishEdit(e) {
      this.props.onEdit(e.target.value)
      this.setState({
        editing: false
      })
    }
  }
