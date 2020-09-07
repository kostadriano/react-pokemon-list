import styled, { keyframes } from 'styled-components';

export const LoadingWrapper = styled.div({
  background: 'rgba(220, 220, 220, 0.4)',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 15000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}
`

export const LoadingIcon = styled.img`
  width: 50px;
  animation: ${rotate} 4s linear infinite;
`
