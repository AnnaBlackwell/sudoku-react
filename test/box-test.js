import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Box from '../app/components/Box'

const props = {
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


describe('Box', () => {
  it('should have a 9 divs with className of "cell" ', () => {
    const wrapper = shallow(<Box {...props}/>)
    expect(wrapper.find('.cell').length).to.equal(9)
  })
})
