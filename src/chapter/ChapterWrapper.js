import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

function glitchAnimFront(width = '30vw') {
  return keyframes`
    0% {
      clip: rect(70px, ${width}, 76px, 0);
    }
    20% {
      clip: rect(29px, ${width}, 16px, 0);
    }
    40% {
      clip: rect(300px, ${width}, 320px, 0);
    }
    60% {
      clip: rect(42px, ${width}, 78px, 0);
    }
    80% {
      clip: rect(410px, ${width}, 415px, 0);
    }
    100% {
      clip: rect(53px, ${width}, 5px, 0);
    }
  `
}
function glitchAnimBack(width = '30vw') {
  return keyframes`
    0% {
      clip: rect(170px, ${width}, 190px, 0);
    }
    20% {
      clip: rect(59px, ${width}, 66px, 0);
    }
    40% {
      clip: rect(120px, ${width}, 133px, 0);
    }
    60% {
      clip: rect(342px, ${width}, 368px, 0);
    }
    80% {
      clip: rect(110px, ${width}, 130px, 0);
    }
    100% {
      clip: rect(23px, ${width}, 30px, 0);
    }
  `
}
const ChapterContainer = styled.section`
  margin: 10vh 0;
  width: 100%;
  height: 100vh;
  opacity: 0.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:  25px 50px;
  color: white;
  background: transparent;
  line-height: 25px;
  font-size: 13px;

  &.active {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    padding:  25px 0;
  }
`
const ImageWrapper = styled.div`
  opacity: 0.65;
  width: ${props => props.type === 'long' ? '60vw' : '30vw'};
  height: 40vw;
  margin-left: ${props => props.type === 'right' ? '50vw' : 0};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.src ? props.src : null});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: ${props => props.type === 'long' ? '90vw' : '50vw'};
    height: 70vw;
    margin-left: ${props => props.type === 'right' ? '40vw' : 0};
  }
  &:before, &:after {
    background-image: url(${props => props.src ? props.src : null});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    content: '';
    filter: sepia(1) hue-rotate(200deg);
    clip: rect(44px, ${props => props.type === 'long' ? '60vw' : '30vw'}, 56px, 0);
    animation: ${props => `
      ${glitchAnimFront(props.type === 'long' ? '60vw' : '30vw')} 1.5s infinite linear alternate-reverse;
    `}
    @media screen and (max-width: 768px) {
      clip: rect(44px, ${props => props.type === 'long' ? '90vw' : '50vw'}, 56px, 0);
      animation: ${props => `
        ${glitchAnimFront(props.type === 'long' ? '90vw' : '50vw')} 2.5s infinite linear alternate-reverse;
      `}
    }
  }
  &:before {
    top: -5px;
    left: -5px;
    filter: hue-rotate(90deg);
    animation: ${props => `
      ${glitchAnimBack(props.type === 'long' ? '60vw' : '30vw')} 1.5s infinite linear alternate-reverse;
    `}
    @media screen and (max-width: 768px) {
      animation: ${props => `
        ${glitchAnimBack(props.type === 'long' ? '90vw' : '50vw')} 2.5s infinite linear alternate-reverse;
      `}
    }
  }

`
const Chapter = styled.div`
  z-index: 10;
  position: absolute;
  top: ${props => props.type === 'long' ? '15px' : (props.type === 'right' ? 'calc(75%)' : 'calc(-15%)')};
  left: ${props => props.type === 'long' ? '15px' : (props.type === 'right' ? 'calc(15%)' : 'calc(-15%)')};
  width: 30vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: rgba(0, 0, 0, 0.75);
  background: rgba(255, 255, 255, 0.65);
  h3 {
    font-size: 22px;
  }
  p {
    margin: 0;
    font-weight: bold;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    width: ${props => props.type === 'long' ? '70vw' : '50vw'};
    padding: 10px 15px;
    h3 {
      margin: 0 0 5px;
      font-size: 14px;
    }
    p {
      font-size: 10px;
    }
  }
`
export default class chapterWrapper extends Component {
  render () {
    return (
      <ChapterContainer id={this.props.id} className="active">
        <ImageWrapper
          className="glitch"
          data-text="glitch"
          type={this.props.chapter.type}
          src={this.props.img.imgSrc}>
          <Chapter type={this.props.chapter.type}>
            <h3>{this.props.chapter.title}</h3>
            <p>{this.props.chapter.content}</p>
          </Chapter>
        </ImageWrapper>
      </ChapterContainer>
    )
  }
}
