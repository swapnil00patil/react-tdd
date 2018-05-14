import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  height: 38px;
  width: ${props => props.barValue}%;
  background: #b3d7e6;
  margin-bottom: 10px;
`
const Wrap = styled.div`
  height: 38px;
  width: 100%;
  background: transparent;
  margin-bottom: 10px;
  border: 1px solid #000;
`

class ProgressBar extends React.PureComponent {
  render () {
    const { barValue } = this.props
    return (
      <Wrap>
        <Bar barValue={barValue} />
      </Wrap>
    )
  }
}

export default ProgressBar
