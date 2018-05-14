import React from 'react'
import styled from 'styled-components'

import { getBars } from './bars.service'
import BarControls from './components/BarControls'
import Dropdown from './components/Dropdown'
import ProgressBars from './components/ProgressBars'

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
      bars: [],
      selectedBar: 0
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

  selectBar (e) {
    console.log(e.target.value)
  }

  render () {
    return (
      <Wrap>
        <Title>Progress Bars Demo</Title>
        <ProgressBars bars={this.state.bars} />
        <BarControls buttons={this.state.buttons} updateProgress={this.updateProgress} />
        <Dropdown bars={this.state.bars} selectBar={this.selectBar} />
      </Wrap>
    )
  }
}

export default BarsContainer
