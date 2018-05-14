import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  height: 38px;
  width: ${props => props.barValue > 100 ? 100 : props.barValue}%;
  background: ${props => props.barValue > 100 ? 'red' : '#b3d7e6'};
  margin-bottom: 10px;
  transition: width 1s ease-in-out;
`
const Wrap = styled.div`
  height: 38px;
  width: 100%;
  background: transparent;
  margin-bottom: 10px;
  border: 1px solid #000;
  position:relative;
`
const Text = styled.span`
  position:absolute;
  width: 100%;
  display: flex;
  top: 10px;
  justify-content: center;
`

class ProgressBar extends React.PureComponent {
  render () {
    const { barValue } = this.props
    return (
      <Wrap>
        <Bar barValue={barValue} />
        <Text>{barValue}%</Text>
      </Wrap>
    )
  }
}

export default ProgressBar
