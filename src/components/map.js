import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//creating dom for map component
export const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `529px` }} />,
    mapElement: <div style={{ height: `100%`,width:`50%`,float:`right`}} />,
  }),
  withScriptjs,
  withGoogleMap
)(({latitude, longitude}) =>
  <GoogleMap
    defaultZoom={15}
    center={{ lat: latitude, lng: longitude }}
  >
    <Marker position={{ lat: latitude, lng: longitude }} />
  </GoogleMap>
)

MapComponent.defaultProps={
  latitude: 17.385044,
  longitude: 78.486671
}
