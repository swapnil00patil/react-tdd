import React from 'react'
import styled from 'styled-components'

import { getBars } from './bars.service'
import BarControls from './components/BarControls'
import Dropdown from './components/Dropdown'
import ProgressBars from './components/ProgressBars'

const Wrap = styled.div`
  max-width:400px;
  background: #fff;
  padding:30px 50px;
  width: 100%;
`
const Title = styled.h2`
  text-align:center;
  margin-top:0;
`
const ProgressDropdown = styled(Dropdown)`
  margin-right:10px;
`

class BarsContainer extends React.Component {
  constructor (props) {
    super(props)

    this.updateProgress = this.updateProgress.bind(this)
    this.selectBar = this.selectBar.bind(this)

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
    let selectedBarValue = this.state.bars[this.state.selectedBar] + value
    selectedBarValue = selectedBarValue < 0 ? 0 : selectedBarValue
    this.state.bars[this.state.selectedBar] = selectedBarValue
    this.setState({
      bars: this.state.bars
    })
  }

  selectBar (e) {
    this.setState({
      selectedBar: e.nativeEvent.target.selectedIndex
    })
    // this.state.bars.indexOf(e.target.value)
  }

  render () {
    return (
      <Wrap>
        <Title>Progress Bars Demo</Title>
        <ProgressBars bars={this.state.bars} />
        <ProgressDropdown bars={this.state.bars} selectBar={this.selectBar} />
        <BarControls buttons={this.state.buttons} updateProgress={this.updateProgress} />
      </Wrap>
    )
  }
}

export default BarsContainer
