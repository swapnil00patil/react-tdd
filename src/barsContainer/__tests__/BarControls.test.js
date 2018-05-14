import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'

import BarControls from '../components/BarControls'

describe('BarControls', () => {
  it('BarControls should be defined', () => {
    expect(BarControls).toBeDefined()
  })

  it('should render exactly same number bars', () => {
    const wrapper = mount(<BarControls buttons={[12, 13, 14]} />)
    wrapper.find('button').length.valueOf(3)
  })

  it('check correct value is retrieved when clicked on button', () => {
    const value = 12
    const onClick = jest.fn()
    const wrapper = mount(<BarControls buttons={[12, 13, 14]} updateProgress={onClick} />)

    wrapper.first('button').simulate('click', {
      target: { value }
    })

    expect(onClick).toBeCalledWith(value)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<BarControls buttons={[12, 13, 14]} />)
    expect(wrapper).toMatchSnapshot()
  })
})
