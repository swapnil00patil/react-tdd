import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  height: 38px;
  width: 150px;
  padding: 5px;
`
const Option = styled.option`
  height: 38px;
  width: 150px;
  padding: 5px;
`

class Dropdown extends React.PureComponent {
  render () {
    const { bars, selectBar } = this.props
    return (
      <Select onChange={selectBar}>
        {bars.map((value, index) => <Option key={index} value={value}>{value}</Option>)}
      </Select>
    )
  }
}

export default Dropdown
