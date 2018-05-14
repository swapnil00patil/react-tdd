import React from 'react'
import styled from 'styled-components'

import { getBars } from './bars.service'
import BarControls from './components/BarControls'

const Wrap = styled.div`
  width:500px;
  background: #fff;
  padding:18px;
`
const Title = styled.h2`
  text-align:center;
`

class BarsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      buttons: [],
      bars: []
    }
  }

  async componentDidMount () {
    try {
      let response = await getBars()
      if (response) {
        this.setState({
          buttons: response.data.buttons,
          bars: response.data.bars
        })
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  updateProgress (value) {
    console.log(value)
  }

  render () {
    return (
      <Wrap>
        <Title>Progress Bars Demo</Title>
        /* Bars component */
        <BarControls buttons={this.state.buttons} updateProgress={this.updateProgress} />
      </Wrap>
    )
  }
}

export default BarsContainer
