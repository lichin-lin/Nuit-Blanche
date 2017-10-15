import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const raining = keyframes`
  0% {
    transform: translate(0, -100%);
  }
  to {
    transform: translate(0, 100%);
  }
`

const RainWrapper = styled.div`
  width: 20px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`
const DropWrapper = styled.div`
  width: 2px;
  height: 100px;
  background: ${props => props.color ? props.color : 'white'};
  animation: ${raining} 1.5s ease ${props => props.delay ? props.delay : '0s'} infinite;
`
export default class Rain extends Component {
  render () {
    return (
      <RainWrapper>
        <DropWrapper></DropWrapper>
        <DropWrapper delay={'0.25s'}></DropWrapper>
        <DropWrapper delay={'0.15s'}></DropWrapper>
      </RainWrapper>
    )
  }
}
