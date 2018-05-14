import React, { Component } from 'react'
import styled from 'styled-components'

import BarsContainer from './barsContainer/BarsContainer'

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000;
`

class App extends Component {
  render () {
    return (
      <Center>
        <BarsContainer />
      </Center>
    )
  }
}

export default App
