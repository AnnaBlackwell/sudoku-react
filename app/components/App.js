import React from 'react'
import Board from './Board'
import _ from 'lodash'
// import {randomBoard} from '../lib/starting-strings'

export default React.createClass({

  getInitialState: function () {
    return {
      boxes: [],
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
      ],
      startingString: '016002400320009000040103000005000069009050300630000800000306010000400072004900680'
    }
  },

  componentWillMount: function () {
    let startArr = this.state.startingString.split('')
    this.setState({boxes: [
      [startArr[0], startArr[1], startArr[2], startArr[9], startArr[10], startArr[11], startArr[18], startArr[19], startArr[20]],
      [startArr[3], startArr[4], startArr[5], startArr[12], startArr[13], startArr[14], startArr[21], startArr[22], startArr[23]],
      [startArr[6], startArr[7], startArr[8], startArr[15], startArr[16], startArr[17], startArr[24], startArr[25], startArr[26]],
      [startArr[27], startArr[28], startArr[29], startArr[36], startArr[37], startArr[38], startArr[45], startArr[46], startArr[47]],
      [startArr[30], startArr[31], startArr[32], startArr[39], startArr[40], startArr[41], startArr[48], startArr[49], startArr[50]],
      [startArr[33], startArr[34], startArr[35], startArr[42], startArr[43], startArr[44], startArr[51], startArr[52], startArr[53]],
      [startArr[54], startArr[55], startArr[56], startArr[63], startArr[64], startArr[65], startArr[72], startArr[73], startArr[74]],
      [startArr[57], startArr[58], startArr[59], startArr[66], startArr[67], startArr[68], startArr[75], startArr[76], startArr[77]],
      [startArr[60], startArr[61], startArr[62], startArr[69], startArr[70], startArr[71], startArr[78], startArr[79], startArr[80]]
    ]})
  },

  checkBoxes: function () {
    _.map(this.state.boxes, function (box, index) {
      if (box.sort() === ['1', '2', '3', '4', '5', '6', '7', '8', '9']) {
        console.log('Box ' + index + ' is complete')
      } else {
        console.log('Box ' + index + ' is not complete')
      }
    })
  },

  checkRows: function () {

  },

  allChecks: function () {
    this.checkBoxes()
    this.checkRows()
    console.log('all checks done')
    alert("Oops! That wasn't quite right")
  },

  render: function () {
    return (
      <div>
        <h1 id='main-title'>Sudoku</h1>
        <div id='difficulty-buttons'>
          <button className='btn btn-primary btn-sm'>Easy</button>
          <button className='btn btn-primary btn-sm'>Medium</button>
          <button className='btn btn-primary btn-sm'>Hard</button>
        </div>
        <Board
          boxes={this.state.boxes}
          cells={this.state.cells}
          />
        <button className='btn btn-default btn-sm' onClick={this.allChecks}>Check board</button>
      </div>
    )
  }
})
