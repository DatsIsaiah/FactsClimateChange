import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Counties() {
  return (
    <div>
      <h1>Counties</h1>
      <MapContainer center={[36.7783, -119.4179]} zoom={6} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.7783, -119.4179]}>
          <Popup>Example County Data</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Counties;
