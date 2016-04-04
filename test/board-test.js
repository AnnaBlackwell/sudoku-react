import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Board from '../app/components/Board'

describe('Board', () => {
  const props = {
    boxes: [
      [''],
      [''],
      [''],
      [''],
      [''],
      [''],
      [''],
      [''],
      ['']
    ]
  }

  it('should have a div with id board', () => {
    const wrapper = render(<Board />)
    expect(wrapper.find('#board')).to.have.length(1)
  })

})
