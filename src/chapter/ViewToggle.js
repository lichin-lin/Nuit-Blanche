import React, { Component } from 'react';
import styled from 'styled-components';
import TiImage from 'react-icons/lib/ti/image';
import TiMap from 'react-icons/lib/ti/map';

const StyledViewToggle = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 10000;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  background: #B7824C;
  font-size: 24px;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  > svg {
    font-size: 24px;
  }
  > p {
    line-height: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    margin: 0 2.5px;
  }
`

export default class ViewToggle extends Component {
  render () {
    return (
      <StyledViewToggle onClick={this.props.toggleMap}>
        {
          this.props.isViewingMap ? (
            <Content>
              <TiImage />
              <p>Story</p>
            </Content>
          ) : (
             <Content>
               <TiMap />
               <p>map</p>
             </Content>
           )
        }
      </StyledViewToggle>
    )
  }
}
