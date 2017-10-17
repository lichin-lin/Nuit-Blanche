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
  padding: 10px 20px;
  border-radius: 3px;
  color: white;
  background: #B7824C;
  font-size: 24px;
  cursor: pointer;
`

export default class ViewToggle extends Component {
  render () {
    return (
      <StyledViewToggle onClick={this.props.toggleMap}>
        {
          this.props.isViewingMap ? <TiImage /> : <TiMap />
        }
      </StyledViewToggle>
    )
  }
}
