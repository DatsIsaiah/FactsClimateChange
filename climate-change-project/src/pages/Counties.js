import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countyData from '../data/countyData.json';
import './Counties.css';
import L from 'leaflet';

const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function Counties() {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleCountyClick = (county) => {
    setSelectedCounty(county);
  };

  return (
    <div className="counties-layout">
      <div className="map-section">
        <MapContainer
          center={[36.7783, -119.4179]} // Centered on California
          zoom={6.5} // Zoom level to show California clearly
          style={{ height: 'calc(100vh - 100px)', width: '100%' }} // Adjust height for navbar
          maxBounds={[[32.0, -125.0], [42.0, -114.0]]} // Restricting bounds to California
          minZoom={6.5} // Prevent zooming out
          maxZoom={6.5} // Prevent zooming in
          zoomControl={false} // Disable zoom controls
          dragging={false} // Disable map dragging
          scrollWheelZoom={false} // Disable zooming with scroll
          doubleClickZoom={false} // Disable zooming with double click
          attributionControl={false} // Hide the attribution text
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countyData.counties.map(county => (
            <Marker
              key={county.name}
              position={[county.lat, county.lng]}
              icon={defaultIcon}
              eventHandlers={{
                click: () => handleCountyClick(county)
              }}
            >
              <Popup>{county.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="info-section">
        <h1>Explore California Counties</h1>
        {selectedCounty ? (
          <>
            <h2>{selectedCounty.name}</h2>
            <p><strong>Crops:</strong> {selectedCounty.crops.join(', ')}</p>
            <p><strong>Impacts:</strong> {selectedCounty.impacts}</p>
            <p><strong>Economic Risks:</strong> {selectedCounty.economic_risks}</p>
            <p><strong>Adaptation Strategies:</strong> {selectedCounty.adaptation_strategies.join(', ')}</p>
          </>
        ) : (
          <p>Click on a county marker on the map to see detailed information about its crops, impacts, economic risks, and adaptation strategies.</p>
        )}
      </div>
    </div>
  );
}

export default Counties;
