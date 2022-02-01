import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

export default function LocationMap() {
  // The coordinates of Johannesburg
  let [center, setCenter] = useState({ lng: 28.034088, lat: -26.195246 })
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCEGQAntqYaCw0nhQWs6Mhu5jsMttP9kQo"
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      // setCenter({ lng: coords.longitude, lat: coords.latitude })
    })
  }, [])
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12">
        <div id="map" class="map">
          {isLoaded && <GoogleMap
            mapContainerStyle={{ width: '100%', height: '9.375rem' }}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>}
        </div>
      </div>
    </div>
  )
}
