import React, { Component } from 'react'
import styled from 'styled-components'
import Icons from './Icons'

const FooterWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  height: auto;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1rem;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
    color: rgba(255, 255, 255, 0.5);
    margin: 2.5px;
    a {
      color: #B7824C;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export default class Footer extends Component {
  render () {
    return (
      <FooterWrapper>
        <Icons />
        <TextWrapper>
          <p>Photo source: <a href="http://nuitblanche.taipei/" targer="_blank" rel="noopener noreferrer">2017 Nuit Blanche Taipei</a>, </p>
          <p>created by <a href="https://github.com/lichin-lin" target="_blank" rel="noopener noreferrer">lichin-lin</a> </p>
        </TextWrapper>
      </FooterWrapper>
    )
  }
}
