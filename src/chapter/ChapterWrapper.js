import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import _ from 'lodash';

function glitchAnima(step = 6, width = '30vw') {
  let percentage = 100 / (step - 1)
  let frameString = ''
  for (let i = 0; i < step; i++) {
    let position = 500 * Math.random()
    let glithcWidth = _.sample([width, '0'])
    let frame = `${i * percentage}% {clip: rect(${position}px, ${glithcWidth}, ${position + 5}px, 0);}`;
    frameString += frame + ' '
  }
  return keyframes`
    ${frameString}
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
    div.glitch {
      &:before, &:after {
        background-image: url(${props => props.src ? props.src : null});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 10px;
        left: 10px;
        width: 100%;
        height: 100%;
        content: '';
        filter: sepia(1) hue-rotate(200deg);
        clip: rect(44px, ${props => props.type === 'long' ? '60vw' : '30vw'}, 56px, 0);
        animation: ${props => `
          ${glitchAnima(6, props.type === 'long' ? '60vw' : '30vw')} 1.5s infinite linear alternate-reverse;
        `}
        @media screen and (max-width: 768px) {
          clip: rect(44px, ${props => props.type === 'long' ? '90vw' : '50vw'}, 56px, 0);
          animation: ${props => `
            ${glitchAnima(6, props.type === 'long' ? '90vw' : '50vw')} 2.5s infinite linear alternate-reverse;
          `}
        }
      }
      &:before {
        top: -10px;
        left: -10px;
        filter: hue-rotate(90deg);
        animation: ${props => `
          ${glitchAnima(8, props.type === 'long' ? '60vw' : '30vw')} 1.5s infinite linear alternate-reverse;
        `}
        @media screen and (max-width: 768px) {
          animation: ${props => `
            ${glitchAnima(8, props.type === 'long' ? '90vw' : '50vw')} 2.5s infinite linear alternate-reverse;
          `}
        }
      }
    }
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
      <ChapterContainer
        type={this.props.chapter.type}
        src={this.props.img.imgSrc}
        id={this.props.id}
        className="active">
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
