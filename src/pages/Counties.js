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

// Dynamically import all PNG images from the Climate_Change_Projections and County_Crop_Charts directories
const climateChangeImages = require.context('../data/Climate_Change_Projections', false, /\.png$/);
const cropChartsImages = require.context('../data/County_Crop_Charts', false, /\.png$/);

function Counties() {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleCountyClick = (county) => {
    setSelectedCounty(county);
  };

  // Function to get images for the selected county
  const getCountyImages = (countyName) => {
    // Remove "County" from the county name
    const baseCountyName = countyName.replace(' County', '');
    const formattedClimateChangeName = `${baseCountyName}_climate_change_projections`;
    const formattedCropChartName = `${baseCountyName}_county_crops`;
    console.log(`Formatted climate change name: ${formattedClimateChangeName}`);
    console.log(`Formatted crop chart name: ${formattedCropChartName}`);

    const climateChangeImageKey = climateChangeImages.keys().find(key => key.includes(formattedClimateChangeName));
    const cropChartImageKey = cropChartsImages.keys().find(key => key.includes(formattedCropChartName));

    console.log(`Climate change image key: ${climateChangeImageKey}`);
    console.log(`Crop chart image key: ${cropChartImageKey}`);

    return {
      climateChangeImage: climateChangeImageKey ? climateChangeImages(climateChangeImageKey) : null,
      cropChartImage: cropChartImageKey ? cropChartsImages(cropChartImageKey) : null
    };
  };

  // Log all available image keys for debugging
  console.log('Available Climate Change Images:', climateChangeImages.keys());
  console.log('Available Crop Charts Images:', cropChartsImages.keys());

  return (
    <div className="counties-layout">
      <div className="map-section">
        <MapContainer
          center={[36.7783, -119.4179]} // Centered on California do not alter
          zoom={6.5} // Zoom level to show California clearly
          style={{ height: 'calc(100vh - 100px)', width: '100%' }} // Adjust height for navbar don't change
          maxBounds={[[32.0, -125.0], [42.0, -114.0]]} // Restricting bounds to California
          minZoom={6.5} // Prevent zooming out
          maxZoom={6.5} // Prevent zooming in
          zoomControl={false} // Disable zoom controls
          dragging={false} // Disable map dragging
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
            {(() => {
              const images = getCountyImages(selectedCounty.name);
              console.log('Images:', images);
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
