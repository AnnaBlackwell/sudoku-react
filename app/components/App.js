import React from 'react'
import Board from './Board'

export default React.createClass({

  getInitialState: function () {
    return {
      boxes: [
        'box-a',
        'box-b',
        'box-c',
        'box-d',
        'box-e',
        'box-f',
        'box-g',
        'box-h',
        'box-i'
      ],
      cells: [
        'cell-1',
        'cell-2',
        'cell-3',
        'cell-4',
        'cell-5',
        'cell-6',
        'cell-7',
        'cell-8',
        'cell-9'
      ]
    }
  },

  render: function () {
    return (
      <div>
        <h1 id="main-title">Sudoku</h1>
        <Board
          boxes={this.state.boxes} cells={this.state.cells}
          />
      </div>
    )
  }
})
