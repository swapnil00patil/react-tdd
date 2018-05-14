import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  height: 33px;
  width: 150px;
  font-size: 18px;
`
const Option = styled.option`

`

class Dropdown extends React.PureComponent {
  render () {
    const { bars, selectBar, className } = this.props
    return (
      <Select onChange={selectBar} className={className}>
        {bars.map((value, index) => <Option key={index} value={value}>#progress{ index + 1}</Option>)}
      </Select>
    )
  }
}

export default Dropdown
