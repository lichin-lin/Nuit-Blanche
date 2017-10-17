import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.js';

import {
  chapterPoints,
  chapterContents,
  chapterImage
} from './utils/chapter.js';
import { directionStyle } from './utils/directionStyle';
import _ from 'lodash';

import './App.css';
import ChapterWrapper from './chapter/ChapterWrapper';
import Header from './chapter/Header';
import Footer from './chapter/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      directions: {},
      activeChapterName: ''
    };
  }
  componentDidMount () {
    window.addEventListener('scroll', this.readChapter.bind(this));
    mapboxgl.accessToken = 'pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw';
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [121.530562, 25.018086],
        zoom: 15.5,
        bearing: 27,
        pitch: 45
    })
    let directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'walking',
      interactive: true,
      controls: {
        inputs: false,
        instructions: true
      },
      style: 'https://mapbox.com/studio/styles/add-style/mapbox/cj5l80zrp29942rmtg0zctjto/'
    });
    map.addControl(directions, 'top-left');

    this.setState({
      map: map,
      directions: directions
    })
    console.log(directions);

    _.map(chapterPoints, (marker) => {
      let el = document.createElement('div');
      el.setAttribute('ref', marker.id);
      el.className = 'marker';
      new mapboxgl.Marker(el)
        .setLngLat(marker.center)
        .addTo(map);
    })
  }
  readChapter () {
    let chapterNames = Object.keys(chapterPoints);
    for (let i = 0; i < chapterNames.length; i++) {
      let chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        break;
      }
    }
  }
  setActiveChapter (chapterName) {
    if (chapterName === this.state.activeChapterName)
      return;
    let prevChapterName = this.state.activeChapterName
    if (prevChapterName === '') {
      this.state.directions.removeRoutes();
    } else {
      this.state.directions.setOrigin(chapterPoints[prevChapterName].center);
      this.state.directions.setDestination(chapterPoints[chapterName].center);
    }
    this.state.map.flyTo(chapterPoints[chapterName]);
    document.getElementById(chapterName).classList.add('active');
    _.map(document.getElementsByClassName(`marker`), (marker) => marker.classList.remove('active'));
    if(_.size(this.state.activeChapterName) > 0) {
      document.getElementById(this.state.activeChapterName).classList.remove('active');
    }
    document.querySelectorAll(`[ref='${chapterName}']`)[0].classList.add('active');
    this.setState({
      activeChapterName: chapterName
    });
  }
  isElementOnScreen (id) {
    let element = document.getElementById(id);
    let bounds = element.getBoundingClientRect() || null;
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  }
  render() {
    return (
      <div id='container'>
        <div id='map' />
        <Header />
        <div id='features'>
          {
            _.map(chapterContents, (chapter, id) =>
              <ChapterWrapper
                id={id}
                key={id}
                img={chapterImage[id]}
                chapter={chapter} />
            )
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;