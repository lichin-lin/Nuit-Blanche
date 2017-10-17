export const directionRoute = {
  'id': 'directions-route-line',
  'type': 'line',
  'source': 'directions',
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#B7824C',
    'line-width': 4
  },
  'filter': [
    'all',
    ['in', '$type', 'LineString'],
    ['in', 'route', 'selected']
  ]
}
export const originPoint = {
  "id": "directions-origin-point",
  "type": "circle",
  "source": "directions",
  "paint": {
    "circle-radius": 12,
    "circle-color": "#B7824C"
  },
  "filter": [
    "all",
    [
      "in", "$type", "Point"
    ],
    ["in", "marker-symbol", "A"]
  ]
}
export const destinationPoint = {
  "id": "directions-destination-point",
  "type": "circle",
  "source": "directions",
  "paint": {
    "circle-radius": 20,
    "circle-color": "#B7824C"
  },
  "filter": [
    "all",
    [
      "in", "$type", "Point"
    ],
    ["in", "marker-symbol", "B"]
  ]
}

// [
//   {
//     "id": "directions-route-line-alt",
//     "type": "line",
//     "source": "directions",
//     "layout": {
//       "line-cap": "round",
//       "line-join": "round"
//     },
//     "paint": {
//       "line-color": "#bbb",
//       "line-width": 4
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "LineString"
//       ],
//       ["in", "route", "alternate"]
//     ]
//   }, {
//     "id": "directions-route-line-casing",
//     "type": "line",
//     "source": "directions",
//     "layout": {
//       "line-cap": "round",
//       "line-join": "round"
//     },
//     "paint": {
//       "line-color": "#2d5f99",
//       "line-width": 12
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "LineString"
//       ],
//       ["in", "route", "selected"]
//     ]
//   },, {
//     "id": "directions-hover-point-casing",
//     "type": "circle",
//     "source": "directions",
//     "paint": {
//       "circle-radius": 8,
//       "circle-color": "#fff"
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "Point"
//       ],
//       ["in", "id", "hover"]
//     ]
//   }, {
//     "id": "directions-hover-point",
//     "type": "circle",
//     "source": "directions",
//     "paint": {
//       "circle-radius": 6,
//       "circle-color": "#3bb2d0"
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "Point"
//       ],
//       ["in", "id", "hover"]
//     ]
//   }, {
//     "id": "directions-waypoint-point-casing",
//     "type": "circle",
//     "source": "directions",
//     "paint": {
//       "circle-radius": 8,
//       "circle-color": "#fff"
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "Point"
//       ],
//       ["in", "id", "waypoint"]
//     ]
//   }, {
//     "id": "directions-waypoint-point",
//     "type": "circle",
//     "source": "directions",
//     "paint": {
//       "circle-radius": 6,
//       "circle-color": "#8a8bc9"
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "Point"
//       ],
//       ["in", "id", "waypoint"]
//     ]
//   }, , {
//     "id": "directions-origin-label",
//     "type": "symbol",
//     "source": "directions",
//     "layout": {
//       "text-field": "A",
//       "text-font": [
//         "Open Sans Bold", "Arial Unicode MS Bold"
//       ],
//       "text-size": 12
//     },
//     "paint": {
//       "text-color": "#fff"
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "Point"
//       ],
//       ["in", "marker-symbol", "A"]
//     ]
//   }, {
//     "id": "directions-destination-point",
//     "type": "circle",
//     "source": "directions",
//     "paint": {
//       "circle-radius": 18,
//       "circle-color": "#8a8bc9"
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "Point"
//       ],
//       ["in", "marker-symbol", "B"]
//     ]
//   }, {
//     "id": "directions-destination-label",
//     "type": "symbol",
//     "source": "directions",
//     "layout": {
//       "text-field": "B",
//       "text-font": [
//         "Open Sans Bold", "Arial Unicode MS Bold"
//       ],
//       "text-size": 12
//     },
//     "paint": {
//       "text-color": "#fff"
//     },
//     "filter": [
//       "all",
//       [
//         "in", "$type", "Point"
//       ],
//       ["in", "marker-symbol", "B"]
//     ]
//   }
// ];
