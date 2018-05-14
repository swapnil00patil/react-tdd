import React from 'react'
import { shallow, mount } from 'enzyme'

import ProgressBars from '../components/ProgressBars'
import ProgressBar from '../components/ProgressBar'

describe('ProgressBars', () => {
  it('ProgressBars should be defined', () => {
    expect(ProgressBars).toBeDefined()
  })

  it('should render exactly same number of ProgressBars', () => {
    const wrapper = mount(<ProgressBars bars={[12, 13, 14]} />)
    expect(wrapper.find(ProgressBar).length).toBe(3)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<ProgressBars bars={[12, 13, 14]} />)
    expect(wrapper).toMatchSnapshot()
  })
})
