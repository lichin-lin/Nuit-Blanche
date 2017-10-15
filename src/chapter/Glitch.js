import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
    0% {
      transform: translate(0);;
    }
    5% {
        transform: translate(-4px, 4px);
    }
    10% {
        transform: translate(-4px, -4px);
    }
    15% {
      transform: translate(4px, 4px);
    }
    20% {
      transform: translate(4px, -4px);
    }
    25% {
      transform: translate(0);
    }
    75% {
      transform: translate(0);
    }
    80% {
      transform: translate(-4px, 4px);
    }
    85% {
      transform: translate(-4px, -4px);
    }
    90% {
      transform: translate(4px, 4px);
    }
    95% {
      transform: translate(4px, -4px);
    }
    to {
      transform: translate(0);
    }
`

const GlitchText = styled.h2`
    margin: 5px 0;
    font-size: 5rem;
    color: white;
    position: relative;

    &:before,
    &:after {
      color: #f0f;
      z-index: -1;
      content: attr(data-text);
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      animation: ${glitch} 2.5s cubic-bezier(.25, .46, .45, .94) both infinite
    }
    &:after {
      color: #0ff !important;
      z-index: -1 !important;
      animation: ${glitch} 2.5s cubic-bezier(.25, .46, .45, .94) reverse both infinite
    }
    @media screen and (max-width: 768px) {
      font-size: 2.75rem;
    }
  }
`

export default class Glitch extends Component {
  render () {
    return (
      <GlitchText data-text={this.props.text}>{this.props.text}</GlitchText>
    )
  }
}
