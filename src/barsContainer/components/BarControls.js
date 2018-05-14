import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  text-align:center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  margin-right: 10px;
  min-width: 50px;

  &:hover {
    background: gray;
    color:#fff;
  }
`

class BarControls extends React.PureComponent {
  render () {
    const { buttons, updateProgress } = this.props
    return buttons.map((value, index) => [
      <Button key={index} onClick={() => updateProgress(value)}>{value}</Button>
    ])
  }
}

export default BarControls
