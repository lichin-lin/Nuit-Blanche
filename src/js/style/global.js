import { injectGlobal } from 'styled-components'
// import { fontSize } from 'js/style/font.js'

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  #map {
    /*z-index: -1;*/
    position: absolute;
    top:0;
    bottom:0;
    width:100%;
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  .App {
    text-align: center;
  }

  /* Mapbox */
  #container {
    display: flex;
    flex-direction: column;
  }
  #map {
      position: fixed;
      width: 100%;
      height: 100vh;
  }
  #features {
      /*z-index: 9999;*/
      width: 100%;
      margin-left: 0%;
      font-family: sans-serif;
      overflow-y: scroll;
      color: white;
      padding:  0px 5vw;
      background-color: rgba(255, 255, 255, 0);
  }
  .marker {
      width: 15px;
      height: 15px;
      display: block;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      padding: 0;
      background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
      box-shadow: 2px 3px 10px rgba(255, 160, 160, 0.75);
      opacity: 0.35;
  }
  .marker.active {
      width: 15px;
      height: 15px;
      opacity: 1;
  }

  p,
  h3 {
    font-family: 'Roboto', sans-serif;
  }
`
