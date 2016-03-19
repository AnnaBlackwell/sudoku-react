import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Cell from '../app/components/Cell'

describe('Cell', () => {
  it('should have a div with className of "cell" ', () => {
    const wrapper = shallow(<Cell />)
    expect(wrapper.find('.cell')).to.have.length(1)
  })
})
