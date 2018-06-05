import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const ParticlesWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`
export default () => (
  <ParticlesWrapper>
    <Particles
      params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: 'blue',
              blur: 5,
            },
          },
        },
      }}
    />
  </ParticlesWrapper>
)
