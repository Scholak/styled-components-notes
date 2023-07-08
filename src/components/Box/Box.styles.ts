import styled, { keyframes } from 'styled-components'

const changeColor = keyframes`
  0%, 100% {
    background: limegreen;
  } 
  50% {
    background: rebeccapurple
  }
`

export const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  animation: ${changeColor} 5s infinite;
`