import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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

const MapView = ({ filteredProjects, selectedProject }) => {
  return (
    <MapContainer
      center={selectedProject ? [selectedProject.lat, selectedProject.lng] : [-2.5489, 118.0149]}
      zoom={selectedProject ? 8 : 5}
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
      {selectedProject && (
        <Marker position={[selectedProject.lat, selectedProject.lng]}>
          <Popup>
            <strong>{selectedProject.lokasi}</strong>
            <p>Pohon Ditanam: {selectedProject.pohonDitanam.toLocaleString()}</p>
            <p>Karbon yang Di-offset: {selectedProject.karbonDiOffset} ton</p>
          </Popup>
        </Marker>
      )}

      {/* Popup di sebelah kiri atas */}
      <div className="absolute top-4 left-4 bg-white border rounded-lg shadow-lg p-4 z-[9999] animate-blink hover:animate-none">
  <p>Apakah anda ingin melihat data lainnya?</p>
  <Link to="/data" className="mt-2 inline-block bg-primary-300 py-2 px-4 rounded hover:bg-primary-400">
    <p className="text-white">Lihat Data</p>
  </Link>
</div>

    </MapContainer>
  );
};

export default MapView;
