global.Ω = require('lomega')
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import App from '../app/components/App'

describe('App', () => {
  it('should have a main title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#main-title')).to.have.length(1)
  })
  it('should have 3 buttons', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.btn')).to.have.length(3)
  })
})
