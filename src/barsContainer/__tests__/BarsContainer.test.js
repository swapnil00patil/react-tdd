import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'

import BarsContainer from '../BarsContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BarsContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('should contain correct title', () => {
  expect(shallow(<BarsContainer />).contains('Progress Bars Demo')).toBe(true)
})

it('should match snapshop', () => {
  const wrapper = shallow(<BarsContainer />)
  expect(wrapper).toMatchSnapshot()
})
