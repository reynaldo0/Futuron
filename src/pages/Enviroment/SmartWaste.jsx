import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
      { location: "Jakarta", emissions: 5 },
      { location: "Medan", emissions: 3 },
      { location: "Makassar", emissions: 2 },
      { location: "Bali", emissions: 1 },
      { location: "Kalimantan", emissions: 4 },
      { location: "Papua", emissions: 3 },
    ],
  });

  const [recyclingHistory, setRecyclingHistory] = useState([
    40, 45, 55, 60, 70, 65, 60,
  ]); // Sejarah data daur ulang

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

      setRecyclingHistory((prevData) => [
        ...prevData.slice(1),
        Math.floor(Math.random() * 100),
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const recyclingChartData = {
    labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Persentase Sampah Daur Ulang (%)",
        data: recyclingHistory,
        fill: false,
        borderColor: "rgba(34, 197, 94, 1)",
        tension: 0.1,
      },
    ],
  };

  const locations = {
    jakarta: [-6.2088, 106.8456],
    medan: [3.5952, 98.6722],
    makassar: [-5.1477, 119.4327],
    bali: [-8.3405, 115.092],
    kalimantan: [-1.7848, 113.9213],
    papua: [-2.5247, 140.7511],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-8">
        Sistem Pengelolaan Sampah Cerdas
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg text-left mb-8 w-full max-w-4xl border-2 border-primary-300 ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Mengoptimalkan pengelolaan sampah dengan teknologi sensor pintar dan
          big data untuk pengelolaan sampah yang lebih efisien di Indonesia.
        </p>
        <p className="text-gray-600 text-lg">
          Meningkatkan efisiensi pengangkutan sampah dan mempercepat proses daur
          ulang untuk mengurangi dampak lingkungan di berbagai pulau di
          Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center relative hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sampah Daur  <br />Ulang
          </h2>
          <div className="text-5xl font-bold text-blue-500 pt-5">
            {sensorData.recyclableWaste}%
          </div>
          <p className="text-sm text-gray-600 pt-5">
            {" "}
            Persentase sampah yang dapat didaur ulang
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-200">
            <div
              className="h-1 bg-blue-500 transition-all duration-500"
              style={{ width: `${sensorData.recyclableWaste}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center relative hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sampah Non-Daur Ulang
          </h2>
          <div className="text-5xl font-bold text-red-500 pt-5">
            {sensorData.nonRecyclableWaste}%
          </div>
          <p className="text-sm text-gray-600 pt-5">
            Persentase sampah yang tidak dapat didaur ulang
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-200">
            <div
              className="h-1 bg-red-500 transition-all duration-500"
              style={{ width: `${sensorData.nonRecyclableWaste}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center relative hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Total Sampah Terkumpul
          </h2>
          <div className="text-5xl font-bold text-yellow-500 pt-5">
            {sensorData.totalWasteCollected}%
          </div>
          <p className="text-sm text-gray-600 pt-5">
            Total volume sampah yang terkumpul
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-200">
            <div
              className="h-1 bg-yellow-500 transition-all duration-500"
              style={{
                width: `${(sensorData.totalWasteCollected / 200) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Perubahan Daur Ulang dalam Waktu
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg w-full h-[400px]">
          <Line
            data={recyclingChartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

      
    </div>
  );
};

export default SmartWaste;
