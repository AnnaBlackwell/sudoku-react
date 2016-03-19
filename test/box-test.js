import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Box from '../app/components/Box'

describe('Box', () => {
  it('should have a 9 divs with className of "cell" ', () => {
    const wrapper = mount(<Box />)
    expect(wrapper.find('.cell')).to.have.length(9)
  })
})
