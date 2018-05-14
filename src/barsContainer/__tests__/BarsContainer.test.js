import React from 'react'
import { shallow } from 'enzyme'

import BarsContainer from '../BarsContainer'

describe('BarsContainer', () => {
  it('BarsContainer should be defined', () => {
    expect(BarsContainer).toBeDefined()
  })

  it('should contain correct title', () => {
    expect(shallow(<BarsContainer />).contains('Progress Bars Demo')).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<BarsContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})
