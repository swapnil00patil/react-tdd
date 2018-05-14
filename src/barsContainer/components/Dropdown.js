import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  height: 33px;
  width: 150px;
  font-size: 18px;
  background: transparent;
  cursor:pointer;
`
const Option = styled.option`

`

class Dropdown extends React.Component {
  shouldComponentUpdate (nextProps) {
    console.log(nextProps.bars)
    console.log(this.props.bars)
    if (this.props.bars && nextProps.bars.length === this.props.bars.length) {
      console.log('gg')
      return false
    } else {
      console.log('sssss')
      return true
    }
  }

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
