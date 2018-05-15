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
    // copy bars as we do not want to mutate
    let bars = [...this.state.bars]
    // calculate new value for bar
    let selectedBarValue = bars[this.state.selectedBar] + value
    // validate if new value is not less than 0
    selectedBarValue = selectedBarValue < 0 ? 0 : selectedBarValue
    // set bar value in copied bars
    bars[this.state.selectedBar] = selectedBarValue
    // set state which will trigger render
    this.setState({
      bars
    })
  }

  selectBar (e) {
    // I decided to use index rather than value as we may get same value
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
