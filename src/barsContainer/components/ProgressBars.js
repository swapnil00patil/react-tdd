import React from 'react'
import styled from 'styled-components'

import ProgressBar from './ProgressBar'

const Placeholder = styled.div`
  height: 38px;
  width: 100%;
  background: #efefef;
  margin-bottom: 10px;
  border: 1px solid #000;
  position:relative;
`

class ProgressBars extends React.Component {
  render () {
    const { bars } = this.props
    return (bars && bars.length > 0)
      ? bars.map((value, index) => <ProgressBar key={index} barValue={value} />)
      : [1, 2, 3].map((value, index) => <Placeholder key={index} />)
  }
}

export default ProgressBars
