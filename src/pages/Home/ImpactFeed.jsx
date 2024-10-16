import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import CountUp from 'react-countup'; // Import CountUp
import StatCard from '../../components/StatCard';

// Ikon untuk marker peta
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Data Proyek Lingkungan di Indonesia (Mock Data)
const mockData = [
  {
    id: 1,
    lokasi: "Reboisasi di Sumatra",
    pohonDitanam: 80000,
    karbonDiOffset: 2500,
    lat: 5.5483, // Lintang Sabang (Aceh, Sumatra)
    lng: 95.3238, // Bujur Sabang (Aceh, Sumatra)
  },
  {
    id: 2,
    lokasi: "Restorasi Mangrove di Jawa",
    pohonDitanam: 50000,
    karbonDiOffset: 1200,
    lat: -6.2088, // Lintang Jawa
    lng: 106.8456, // Bujur Jawa
  },
  {
    id: 3,
    lokasi: "Konservasi Lahan Gambut di Kalimantan",
    pohonDitanam: 120000,
    karbonDiOffset: 4000,
    lat: -1.6199, // Lintang Kalimantan
    lng: 113.8217, // Bujur Kalimantan
  },
  {
    id: 4,
    lokasi: "Rehabilitasi Hutan di Papua",
    pohonDitanam: 60000,
    karbonDiOffset: 1500,
    lat: -8.4667, // Lintang Merauke, Papua
    lng: 140.3333, // Bujur Merauke, Papua
  },
  {
    id: 5,
    lokasi: "Restorasi Ekosistem di Sulawesi",
    pohonDitanam: 70000,
    karbonDiOffset: 1800,
    lat: -1.4304, // Lintang Sulawesi
    lng: 121.4456, // Bujur Sulawesi
  },
  {
    id: 6,
    lokasi: "Proyek Konservasi Terumbu Karang di Bali",
    pohonDitanam: 10000,
    karbonDiOffset: 300,
    lat: -8.4095, // Lintang Bali
    lng: 115.1889, // Bujur Bali
  },
  {
    id: 7,
    lokasi: "Proyek Reboisasi di Maluku",
    pohonDitanam: 20000,
    karbonDiOffset: 600,
    lat: -3.2385, // Lintang Maluku
    lng: 130.1453, // Bujur Maluku
  },
  {
    id: 8,
    lokasi: "Reboisasi di NTT",
    pohonDitanam: 50000,
    karbonDiOffset: 1000,
    lat: -8.6574, // Lintang NTT (Kupang)
    lng: 121.0794, // Bujur NTT
  },
  {
    id: 9,
    lokasi: "Reboisasi di Sumatra Barat (Lombok)",
    pohonDitanam: 45000,
    karbonDiOffset: 900,
    lat: -0.9634, // Lintang Sumatra Barat (Padang)
    lng: 100.3600, // Bujur Sumatra Barat (Padang)
  },
];

// Komponen Kartu Proyek untuk Feed Langsung
const ProjectCard = ({ project }) => (
  <div className="bg-white shadow-md rounded-md p-4">
    <h2 className="text-xl font-bold text-green-700">{project.lokasi}</h2>
    <p>Pohon Ditanam: {project.pohonDitanam.toLocaleString()}</p>
    <p>Karbon yang Di-offset: {project.karbonDiOffset} ton</p>
  </div>
);

const ImpactFeed = () => {
  const [feedData, setFeedData] = useState([]);

  // Simulasi pengambilan data
  useEffect(() => {
    setFeedData(mockData);
  }, []);

  return (
    <div className="min-h-screen container mx-auto p-5 mt-40">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Feed Dampak Lingkungan Langsung - Indonesia 🌍
      </h1>

      {/* Bagian Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Gunakan CountUp di sini */}
        <StatCard title="Total Karbon Di-offset" value={13800} />
        <StatCard title="Total Pohon Ditanam" value={500000} />
        <StatCard title="Proyek Aktif" value={feedData.length} />
      </div>

      {/* Feed Langsung */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {feedData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bagian Peta */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-5">Lokasi Proyek di Indonesia</h2>
        <MapContainer center={[-2.5489, 118.0149]} zoom={5} className="w-full h-96" attributionControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {feedData.map((project) => (
            <Marker key={project.id} position={[project.lat, project.lng]}>
              <Popup>
                <strong>{project.lokasi}</strong>
                <p>Pohon Ditanam: {project.pohonDitanam.toLocaleString()}</p>
                <p>Karbon yang Di-offset: {project.karbonDiOffset} ton</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ImpactFeed;
