import React, { Component } from 'react';
import styled from 'styled-components';

const ChapterContainer = styled.section`
  width: 100%;
  height: 100vh;
  opacity: 0.25;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding:  25px 50px;
  color: white;
  background: transparent;
  line-height: 25px;
  font-size: 13px;

  > div.ContentWrapper {
    height: fit-content;
    opacity: 1;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    color: rgba(0, 0, 0, 0.75);
    background: rgba(255, 255, 255, 0.65);
  }
  &.active {
    opacity: 1;
  }
`
const ImageWrapper = styled.div`
  // margin-top: 25vh;
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
`
const Chapter = styled.div`
  position: absolute;
  top: ${props => props.type === 'long' ? '15px' : (props.type === 'right' ? 'calc(75%)' : 'calc(-15%)')};
  left: ${props => props.type === 'long' ? '15px' : (props.type === 'right' ? 'calc(15%)' : 'calc(-15%)')};
  width: 30vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
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
`
export default class chapterWrapper extends Component {
  render () {
    return (
      <ChapterContainer id={this.props.id}>
        {/* <div className="ContentWrapper">
          <h3>{this.props.chapter.title}</h3>
          <p>{this.props.chapter.content}</p>
        </div> */}
        <ImageWrapper
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
