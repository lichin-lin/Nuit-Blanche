import React, { Component } from 'react';
import styled from 'styled-components';

const ChapterContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding:  25px 50px;
  color: white;
  background: transparent;
  line-height: 25px;
  font-size: 13px;

  > div {
    height: fit-content;
    opacity: 0.25;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    color: rgba(0, 0, 0, 0.75);
    background: rgba(255, 255, 255, 0.65);
    &.active {
      opacity: 1;
    }
  }
`
export default class chapterWrapper extends Component {
  render () {
    return (
      <ChapterContainer>
        <div id={this.props.id}>
          <h3>{this.props.chapter.title}</h3>
          <p>{this.props.chapter.content}</p>
        </div>
      </ChapterContainer>
    )
  }
}
