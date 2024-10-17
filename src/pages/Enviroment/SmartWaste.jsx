import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Mendaftarkan elemen chart.js yang diperlukan
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SmartWaste = () => {
  const [sensorData, setSensorData] = useState({
    recyclableWaste: 45, // Persentase sampah yang dapat didaur ulang
    nonRecyclableWaste: 30, // Persentase sampah yang tidak dapat didaur ulang
    totalWasteCollected: 75, // Total volume sampah yang dikumpulkan (dalam kg)
  });

  const [routeData, setRouteData] = useState({
    optimizedRoute: [
      { location: 'Jakarta', emissions: 5 },
      { location: 'Medan', emissions: 3 },
      { location: 'Makassar', emissions: 2 },
      { location: 'Bali', emissions: 1 },
      { location: 'Kalimantan', emissions: 4 },
      { location: 'Papua', emissions: 3 },
    ],
  });

  const [recyclingHistory, setRecyclingHistory] = useState([40, 45, 55, 60, 70, 65, 60]); // Sejarah data daur ulang

  // Simulasi data sensor yang terupdate secara otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      const newRecyclableWaste = Math.floor(Math.random() * 100);
      const newNonRecyclableWaste = Math.floor(Math.random() * 100);
      const newTotalWaste = newRecyclableWaste + newNonRecyclableWaste;

      setSensorData({
        recyclableWaste: newRecyclableWaste,
        nonRecyclableWaste: newNonRecyclableWaste,
        totalWasteCollected: newTotalWaste,
      });

      // Menambahkan data terbaru ke history daur ulang
      setRecyclingHistory((prevData) => [
        ...prevData.slice(1),
        Math.floor(Math.random() * 100),
      ]);
    }, 5000); // Data diperbarui setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  // Data untuk grafik persentase sampah daur ulang
  const recyclingChartData = {
    labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Persentase Sampah Daur Ulang (%)',
        data: recyclingHistory,
        fill: false,
        borderColor: 'rgba(34, 197, 94, 1)',
        tension: 0.1,
      },
    ],
  };

  // Koordinat untuk masing-masing lokasi di Indonesia
  const locations = {
    jakarta: [-6.2088, 106.8456],
    medan: [3.5952, 98.6722],
    makassar: [-5.1477, 119.4327],
    bali: [-8.3405, 115.0920],
    kalimantan: [-1.7848, 113.9213],
    papua: [-2.5247, 140.7511],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h1 className="text-5xl font-bold text-primary-400 mb-8">Sistem Pengelolaan Sampah Cerdas</h1>

      {/* Deskripsi Fitur */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Deskripsi Fitur</h2>
        <p className="text-gray-600 text-lg mb-4">
          Mengoptimalkan pengelolaan sampah dengan teknologi sensor pintar dan big data untuk pengelolaan sampah yang lebih efisien di Indonesia.
        </p>
        <p className="text-gray-600 text-lg">
          Meningkatkan efisiensi pengangkutan sampah dan mempercepat proses daur ulang untuk mengurangi dampak lingkungan di berbagai pulau di Indonesia.
        </p>
      </div>

      {/* Informasi Data Sampah */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
        {/* Sampah Daur Ulang */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sampah Daur Ulang</h2>
          <div className="text-5xl font-bold text-green-500">{sensorData.recyclableWaste}%</div>
          <p className="text-sm text-gray-600">Persentase sampah yang dapat didaur ulang</p>
        </div>

        {/* Sampah Non-Daur Ulang */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sampah Non-Daur Ulang</h2>
          <div className="text-5xl font-bold text-red-500">{sensorData.nonRecyclableWaste}%</div>
          <p className="text-sm text-gray-600">Persentase sampah yang tidak dapat didaur ulang</p>
        </div>

        {/* Total Sampah Terkumpul */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Total Sampah Terkumpul</h2>
          <div className="text-5xl font-bold text-blue-500">{sensorData.totalWasteCollected} kg</div>
          <p className="text-sm text-gray-600">Total volume sampah yang terkumpul</p>
        </div>
      </div>

      {/* Grafik Daur Ulang */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Perubahan Daur Ulang dalam Waktu</h2>
        <div className="bg-gray-100 p-4 rounded-lg w-full h-[400px]">
          <Line data={recyclingChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Rute Pengangkutan Sampah */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Rute Pengangkutan Sampah yang Optimal</h2>
        <MapContainer
          center={locations.jakarta} // Pusatkan pada Jakarta sebagai lokasi default
          zoom={5}
          style={{ width: '100%', height: '400px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Menambahkan marker untuk tiap pulau besar di Indonesia */}
          {routeData.optimizedRoute.map((route, index) => (
            <Marker key={index} position={locations[route.location.toLowerCase()]}>
              <Popup>
                <div className="text-center">
                  <h3>{route.location}</h3>
                  <p>Emisi CO2: {route.emissions} kg</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default SmartWaste;
