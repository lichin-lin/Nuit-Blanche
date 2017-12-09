import React, { Component } from 'react'
import styled from 'styled-components'
import GlitchText from './Glitch'
import Icons from './Icons'
import Rain from './Rain'

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
              <GlitchText text={'台北白晝之夜'}/>
              <h4>NUIT BLANCHE TAIPEI</h4>
            </Title>
            <Describe>
              <p>Trip route visualization made with Mapbox GL, switch view by the button on top right corner</p>
              <p>*best viewed on a desktop browser(Chrome).</p>
              <p>*用 Chrome 瀏覽器開啟將會呈現較佳的效果，右上方的按鈕可以切換模式。</p>
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
