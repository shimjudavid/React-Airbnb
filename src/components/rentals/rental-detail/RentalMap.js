import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow
} from "react-google-maps";


const RentalMap = withScriptjs(withGoogleMap(props => {
  return (

    props.error === 'false' ? (
      <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.position.lat, lng: props.position.lng }}
    >
        <Circle center={{ lat: props.position.lat, lng: props.position.lng }} radius={500} />


        </GoogleMap>
    ) :
    (
      <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.position.lat, lng: props.position.lng }}
    >
        <Circle center={{ lat: props.position.lat, lng: props.position.lng }} radius={500} />

        <InfoWindow position={{ lat: props.position.lat, lng: props.position.lng }}>
          <div>
            Oops, there is a problem to find location on map.
            Contact host for additional information..
          </div>
        </InfoWindow>
        </GoogleMap>
    )



  )

}


));

export default RentalMap
