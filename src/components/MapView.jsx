import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ikon untuk marker peta
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapView = ({ filteredProjects }) => {
  // Batas koordinat Indonesia untuk maxBounds
  const bounds = [
    [-10.0, 95.0],  // koordinat barat daya
    [5.5, 141.0],   // koordinat timur laut
  ];

  return (
    <MapContainer
      center={[-2.5489, 118.0149]} // Pusat di Indonesia
      zoom={5}
      minZoom={4} // Zoom minimal
      maxZoom={10} // Zoom maksimal
      maxBounds={bounds} // Batasi peta pada area Indonesia
      className="w-full h-96"
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {filteredProjects.map((project) => (
        <Marker key={project.id} position={[project.lat, project.lng]}>
          <Popup>
            <strong>{project.lokasi}</strong>
            <p>Pohon Ditanam: {project.pohonDitanam.toLocaleString()}</p>
            <p>Karbon yang Di-offset: {project.karbonDiOffset} ton</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
