import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Icons from './Icons';
import Rain from './Rain';

const glitch = keyframes`
    0% {
      transform: translate(0);;
    }
    5% {
        transform: translate(-3px, 3px);
    }
    10% {
        transform: translate(-3px, -3px);
    }
    15% {
      transform: translate(3px, 3px);
    }
    20% {
      transform: translate(3px, -3px);
    }
    25% {
      transform: translate(0);
    }
    75% {
      transform: translate(0);
    }
    80% {
      transform: translate(-3px, 3px);
    }
    85% {
      transform: translate(-3px, -3px);
    }
    90% {
      transform: translate(3px, 3px);
    }
    95% {
      transform: translate(3px, -3px);
    }
    to {
      transform: translate(0);
    }
`

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  min-height: 200px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  width: 75%;
  height: auto;
`
const Title = styled.div`
  margin-bottom: 100px;
  h2 {
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
  h3, h4 {
    padding-left: 10px;
    margin: 2.5px 0;
    font-size: 3rem;
    color: #B7824C;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  h4 {
    letter-spacing: 2px;
    font-size: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`
const Describe = styled.div`
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.5);
  p {
    padding-left: 10px;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`
const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    font-weight: lighter;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    margin: 1px 0;
  }
`

export default class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <ContentWrapper>
          <Content>
            <Title>
              <h3>2017</h3>
              <h2 data-text="台北白晝之夜">台北白晝之夜</h2>
              <h4>NUIT BLANCHE TAIPEI</h4>
            </Title>
            <Describe>
              <p>Trip route visualization made with Mapbox GL</p>
              <Icons />
            </Describe>
          </Content>
        </ContentWrapper>
        <ScrollWrapper>
          <Rain />
          <p>start trip</p>
          <p>開始旅程</p>
        </ScrollWrapper>
      </HeaderWrapper>
    )
  }
}
