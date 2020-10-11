import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './maps.styles.css'
export const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
    <div className="container map">
      <LoadScript
       googleMapsApiKey='AIzaSyBOm3UAnI6BbBRZv14n9PQ-cWvc7xn36q4'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
    </div>
     
  )
}

