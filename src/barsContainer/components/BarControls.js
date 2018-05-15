import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  text-align:center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  margin-right: 8px;
  min-width: 50px;

  &:hover {
    background: gray;
    color:#fff;
  }
`
const Placeholder = styled.div`
  text-align:center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  margin-right: 8px;
  padding: 5px 20px;
  border: 1px solid #ccc;
  display: inline;

  &:hover {
    background: gray;
    color:#fff;
  }
`

class BarControls extends React.PureComponent {
  render () {
    const { buttons, updateProgress } = this.props
    return (buttons && buttons.length > 0) ? buttons.map((value, index) => [
      <Button key={index} onClick={() => updateProgress(value)}>{value}</Button>
    ]) : [1, 2, 3, 4].map((value, index) => <Placeholder key={index} />)
  }
}

export default BarControls
