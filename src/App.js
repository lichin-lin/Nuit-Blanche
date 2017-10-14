import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { chapterPoints, chapterContents, chapterImage } from './utils/chapter.js';
import { tripRoute } from './utils/tripRoute';
import _ from 'lodash';

import './App.css';
import ChapterWrapper from './chapter/ChapterWrapper';
const ChapterWrapperType = ['left', 'long', 'right', 'left', 'right', 'long', 'left'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      activeChapterName: 'baker'
    };
  }
  componentDidMount () {
    window.addEventListener('scroll', this.readChapter.bind(this));
    mapboxgl.accessToken = 'pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [-0.15591514, 51.51830379],
        zoom: 15.5,
        bearing: 27,
        pitch: 45
    })
    this.setState({
      map: map
    })
    _.map(chapterPoints, (marker) => {
      var el = document.createElement('div');
      el.className = 'marker';
      new mapboxgl.Marker(el)
        .setLngLat(marker.center)
        .addTo(map);
    })
    map.on('load', function () {
      map.addLayer(tripRoute)
    })
  }
  readChapter () {
    var chapterNames = Object.keys(chapterPoints);
    for (var i = 0; i < chapterNames.length; i++) {
      var chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        break;
      }
    }
  }
  setActiveChapter (chapterName) {
    if (chapterName === this.state.activeChapterName)
      return;
    this.state.map.flyTo(chapterPoints[chapterName]);
    // document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(chapterName).classList.add('active');
    // document.getElementById(this.state.activeChapterName).setAttribute('class', '');
    document.getElementById(this.state.activeChapterName).classList.remove('active');

    this.setState({
      activeChapterName: chapterName
    });
  }
  isElementOnScreen (id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect() || null;
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  }
  render() {
    return (
      <div id='container'>
        <div id='map' />
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
      </div>
    );
  }
}

export default App;
