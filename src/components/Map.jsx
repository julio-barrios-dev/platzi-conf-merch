import React,{ useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'; 

function Map({ data }) {


  const d = [51.505, -0.09];
  const defaultCenter = data;

  return (
    
    <MapContainer center={defaultCenter} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter}>
        <Popup>
          A pretty CSS3 popup. <br /> {data}.
        </Popup>
      </Marker>
    </MapContainer>
    
  );
}

export default Map;
