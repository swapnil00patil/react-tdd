import React from 'react'

import ProgressBar from './ProgressBar'

class ProgressBars extends React.PureComponent {
  render () {
    const { bars } = this.props
    return bars.map((value, index) => <ProgressBar key={index} barValue={value} />)
  }
}

export default ProgressBars
