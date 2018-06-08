import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import particlesSettings from '../particles.json'

const ParticlesWrapper = styled(Particles)`
  width: 100%;
  height: 100%;
  background-color: black;
`
export default () => <ParticlesWrapper params={particlesSettings} />
