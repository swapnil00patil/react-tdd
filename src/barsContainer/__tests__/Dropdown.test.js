import React from 'react'
import { shallow, mount } from 'enzyme'

import Dropdown from '../components/Dropdown'

describe('Dropdown', () => {
  it('Dropdown should be defined', () => {
    expect(Dropdown).toBeDefined()
  })

  it('should render exactly same number bars', () => {
    const wrapper = mount(<Dropdown bars={[12, 13, 14]} />)
    wrapper.find('option').length.valueOf(3)
  })

  it('check correct value is retrieved when change dropdown', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Dropdown bars={[12, 13, 14]} selectBar={onChange} />)
    wrapper.first('select').simulate('change', {})

    expect(onChange).toHaveBeenCalled()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<Dropdown bars={[12, 13, 14]} />)
    expect(wrapper).toMatchSnapshot()
  })
})
