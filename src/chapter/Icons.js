import React, { Component } from 'react';
import styled from 'styled-components';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGithub from 'react-icons/lib/fa/github';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.a`
  width: ${props => props.size ? props.size : '30px'};
  height: ${props => props.size ? props.size : '30px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
  > svg {
    width: 100%;
    height: 100%;
    transition: all 0.25s ease;
    fill: rgba(255, 255, 255, 0.5);
  }
  &:hover {
    > svg {
      transition: all 0.25s ease;
      fill: #B7824C;
    }
  }
`
export default class Icons extends Component {
  render () {
    return (
        <IconWrapper>
          <Icon href="https://github.com/lichin-lin" target="_blank">
            <FaGithub />
          </Icon>
          <Icon  href="" target="_blank" size={'28px'}>
            <FaTwitter />
          </Icon>
          <Icon  href="" target="_blank" size={'26px'}>
            <FaFacebook />
          </Icon>
        </IconWrapper>
    )
  }
}
