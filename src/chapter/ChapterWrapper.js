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
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px auto 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  .item-a {
    background-image: linear-gradient(120deg, #1abdc9 0%, #5348ba 100%);
    grid-area: header;
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .item-b {
    grid-area: main;
    background-image: linear-gradient(120deg, #fffb47 0%, #ef6269 100%);
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .item-c {
    grid-area: sidebar;
    background-image: linear-gradient(120deg, #2aedc6 0%, #266fa0 100%);
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .item-d {
    grid-area: footer;
    background-image: linear-gradient(120deg, #9590f4 0%, #3fdde2 100%);
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`
export default class chapterWrapper extends Component {
  render () {
    return (
      <ChapterContainer>
        <div className="ContentWrapper" id={this.props.id}>
          <h3>{this.props.chapter.title}</h3>
          <p>{this.props.chapter.content}</p>
        </div>
        {/* <GridContainer>
          <div className="item-a" />
          <div className="item-b" />
          <div className="item-c" />
          <div className="item-d" />
        </GridContainer> */}
      </ChapterContainer>
    )
  }
}
