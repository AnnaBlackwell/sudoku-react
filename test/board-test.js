import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Board from '../app/components/Board'

describe('Board', () => {
  const props = {
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
    ]
  }

  it('should have a div with id board', () => {
    const wrapper = mount(<Board />)
    expect(wrapper.find('#board')).to.have.length(1)
  })
  it('should have a 9 divs with className of "box" ', () => {
    const wrapper = mount(<Board />)
    expect(wrapper.find('.box')).to.have.length(9)
  })
})
