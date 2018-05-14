import React from 'react'
import styled from 'styled-components'

import { getBars } from './bars.service'

const Wrap = styled.div`
  width:500px;
  background: #fff;
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
      isMounted: false
    }
  }

  async componentDidMount () {
    try {
      let response = await getBars()
      if (response && !this.state.isMounted) {
        this.setState({
          buttons: response.data.buttons,
          bars: response.data.bars,
          isMounted: true
        })
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  render () {
    return (
      <Wrap>
        <Title>Progress Bars Demo</Title>
        /* Bars component */
        /* Control Component */
      </Wrap>
    )
  }
}

export default BarsContainer
