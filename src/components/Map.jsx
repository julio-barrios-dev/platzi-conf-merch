import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'; 
function Map() {

  const defaultCenter = [-10.248961185632005, -48.324814460505145 ]
   

  return (
    <MapContainer center={defaultCenter} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
