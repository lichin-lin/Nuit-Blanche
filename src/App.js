import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { chapterPoints, chapterContents } from './utils/chapter.js';
import _ from 'lodash';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 15.5,
        bearing: 27,
        pitch: 45,
        width: 500,
        height: 500
      },
      map: {},
      activeChapterName: 'baker'
    };
  }
  componentDidMount () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw';
    window.addEventListener('scroll', this.readChapter.bind(this));
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
      // el.addEventListener('click', function() {
      //   window.alert(marker.center);
      // });
      new mapboxgl.Marker(el)
        .setLngLat(marker.center)
        .addTo(map);
    })
    map.on('load', function () {
      map.addLayer({
          "id": "route",
          "type": "line",
          "source": {
              "type": "geojson",
              "data": {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                      "type": "LineString",
                      "coordinates": [
                          [-0.15591514, 51.51830379],
                          [-0.154085, 51.514193],
                          [-0.113571, 51.518259],
                          [-0.106079, 51.517385],
                          [-0.090549, 51.513597],
                          [-0.07571203, 51.51424049]
                      ]
                  }
              }
          },
          "layout": {
              "line-join": "round",
              "line-cap": "round"
          },
          "paint": {
              "line-color": "rgba(255, 160, 160, 0.5)",
              "line-width": 5
          }
      })
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
      if (chapterName === this.state.activeChapterName) return;

      this.state.map.flyTo(chapterPoints[chapterName]);
      document.getElementById(chapterName).setAttribute('class', 'active');
      document.getElementById(this.state.activeChapterName).setAttribute('class', '');

      this.setState({
        activeChapterName: chapterName
      });
  }
  isElementOnScreen (id) {
      var element = document.getElementById(id);
      var bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
  }
  render() {
    const {viewport} = this.state;
    return (
      <div id='container'>
        <div id='map'></div>
        <div id='features'>
          {
            _.map(chapterContents, (chapter, id) =>
              <section key={id} id={id}>
                <div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.content}</p>
                </div>
              </section>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
