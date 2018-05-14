import React from 'react'
import { shallow, mount } from 'enzyme'

import ProgressBar from '../components/ProgressBar'

describe('ProgressBar', () => {
  it('ProgressBar should be defined', () => {
    expect(ProgressBar).toBeDefined()
  })

  it('should render exactly same number of ProgressBar', () => {
    const wrapper = mount(<ProgressBar barValue={12} />)
    expect(wrapper.find(ProgressBar).length).toBe(1)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<ProgressBar barValue={12} />)
    expect(wrapper).toMatchSnapshot()
  })
})
