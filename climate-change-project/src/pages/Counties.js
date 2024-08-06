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

const climateChangeImages = require.context('../data/Climate_Change_Projections', false, /\.png$/);
const cropChartsImages = require.context('../data/County_Crop_Charts', false, /\.png$/);

function Counties() {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleCountyClick = (county) => {
    setSelectedCounty(county);
  };

  const getCountyImages = (countyName) => {
    const baseCountyName = countyName.replace(' County', '');
    const formattedClimateChangeName = `${baseCountyName}_climate_change_projections`;
    const formattedCropChartName = `${baseCountyName}_county_crops`;

    const climateChangeImageKey = climateChangeImages.keys().find(key => key.includes(formattedClimateChangeName));
    const cropChartImageKey = cropChartsImages.keys().find(key => key.includes(formattedCropChartName));

    return {
      climateChangeImage: climateChangeImageKey ? climateChangeImages(climateChangeImageKey) : null,
      cropChartImage: cropChartImageKey ? cropChartsImages(cropChartImageKey) : null
    };
  };

  return (
    <div className="counties-layout">
      <div className="map-section">
        <MapContainer
          center={[37.7749, -119.4194]} // Adjusted center for better focus on California
          zoom={6.5}
          style={{ height: '100%', width: '100%' }}
          maxBounds={[[32.0, -125.0], [42.0, -114.0]]}
          minZoom={6.5}
          maxZoom={6.5}
          zoomControl={false}
          dragging={false}
          scrollWheelZoom={false} 
          doubleClickZoom={false}
          attributionControl={false} 
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
            <h3>Climate Change Projections for {selectedCounty.name}</h3>
            {(() => {
              const images = getCountyImages(selectedCounty.name);
              return (
                <>
                  {images.climateChangeImage && <img src={images.climateChangeImage} alt={`${selectedCounty.name} Climate Change Projection`} />}
                  {images.cropChartImage && <img src={images.cropChartImage} alt={`${selectedCounty.name} Crop Chart`} />}
                </>
              );
            })()}
          </>
        ) : (
          <p>Click on a county marker on the map to see detailed information about its crops, impacts, economic risks, and adaptation strategies.</p>
        )}
      </div>
    </div>
  );
}

export default Counties;
