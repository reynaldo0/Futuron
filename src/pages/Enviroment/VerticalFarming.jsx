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

const VerticalFarming = () => {
  // Data sensor awal (statik) untuk tampilan demo
  const [sensorData, setSensorData] = useState({
    moisture: 65, // Kelembapan (%)
    temperature: 24, // Suhu (Celsius)
    soilQuality: 70, // Kualitas tanah (%)
  });

  // Simulasi data historis untuk grafik (dalam format array)
  const [historicalData, setHistoricalData] = useState({
    moistureHistory: [60, 63, 67, 65, 62, 64, 65],
    temperatureHistory: [24, 23, 25, 24, 22, 23, 24],
    soilQualityHistory: [70, 72, 68, 70, 71, 69, 70],
  });

  // Fungsi untuk mengupdate data sensor dengan animasi
  useEffect(() => {
    const interval = setInterval(() => {
      const newMoisture = Math.floor(Math.random() * 100);
      const newTemperature = Math.floor(Math.random() * 35);
      const newSoilQuality = Math.floor(Math.random() * 100);

      setSensorData({
        moisture: newMoisture,
        temperature: newTemperature,
        soilQuality: newSoilQuality,
      });

      // Update data historis untuk grafik (menambahkan nilai terbaru dan menghapus yang lama)
      setHistoricalData((prevData) => ({
        moistureHistory: [...prevData.moistureHistory.slice(1), newMoisture],
        temperatureHistory: [
          ...prevData.temperatureHistory.slice(1),
          newTemperature,
        ],
        soilQualityHistory: [
          ...prevData.soilQualityHistory.slice(1),
          newSoilQuality,
        ],
      }));
    }, 5000); // Data diupdate setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  // Data dan konfigurasi grafik untuk kelembapan tanah
  const moistureChartData = {
    labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`), // Label untuk hari
    datasets: [
      {
        label: "Kelembapan Tanah (%)",
        data: historicalData.moistureHistory,
        fill: false,
        borderColor: "rgba(34, 197, 94, 1)", // Hijau untuk kelembapan
        tension: 0.1,
      },
    ],
  };

  // Data dan konfigurasi grafik untuk suhu ruangan
  const temperatureChartData = {
    labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`), // Label untuk hari
    datasets: [
      {
        label: "Suhu Ruangan (°C)",
        data: historicalData.temperatureHistory,
        fill: false,
        borderColor: "rgba(59, 130, 246, 1)", // Biru untuk suhu
        tension: 0.1,
      },
    ],
  };

  // Data dan konfigurasi grafik untuk kualitas tanah
  const soilQualityChartData = {
    labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`), // Label untuk hari
    datasets: [
      {
        label: "Kualitas Tanah (%)",
        data: historicalData.soilQualityHistory,
        fill: false,
        borderColor: "rgba(234, 179, 8, 1)", // Kuning untuk kualitas tanah
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center pt-20 justify-center min-h-screen bg-white p-8">
      <h1 className="text-5xl font-bold text-primary-400 mb-8">
        Pertanian Vertikal Berbasis IoT
      </h1>

      {/* Deskripsi Fitur */}
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-primary-300 mb-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Deskripsi Fitur
        </h2>
        <p className="text-gray-600 text-lg mb-4 md:pr-10">
          Sistem IoT berbasis sensor ini memungkinkan monitoring kelembapan,
          suhu, dan kualitas tanah secara real-time di pertanian vertikal.
        </p>
        <p className="text-gray-600 text-lg">
          Memungkinkan pertanian dilakukan di ruang terbatas seperti gedung dan
          area perkotaan tanpa mengorbankan kualitas tanah.
        </p>
      </div>

      {/* Data Sensor */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
        {/* Kelembapan Tanah */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center relative hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Kelembapan Tanah
          </h2>
          <div className="text-5xl font-bold text-green-500 pt-5">
            {sensorData.moisture}%
          </div>
          <p className="text-sm text-gray-600 pt-5">
            Data kelembapan tanah yang diperbarui setiap 5 detik
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-200">
            <div
              className="h-1 bg-green-500 transition-all duration-500"
              style={{ width: `${sensorData.moisture}%` }}
            ></div>
          </div>
        </div>

        {/* Suhu Ruangan */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center relative hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Suhu Ruangan
          </h2>
          <div className="text-5xl font-bold text-blue-500 pt-5">
            {sensorData.temperature}°C
          </div>
          <p className="text-sm text-gray-600 pt-5">
            Suhu ruangan untuk menjaga kondisi pertanian vertikal
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-200">
            <div
              className="h-1 bg-blue-500 transition-all duration-500"
              style={{ width: `${(sensorData.temperature / 35) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Kualitas Tanah */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center relative hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Kualitas Tanah
          </h2>
          <div className="text-5xl font-bold text-yellow-500 pt-5">
            {sensorData.soilQuality}%
          </div>
          <p className="text-sm text-gray-600 pt-5">
            Kualitas tanah yang menentukan keberhasilan tanaman
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-200">
            <div
              className="h-1 bg-yellow-500 transition-all duration-500"
              style={{ width: `${sensorData.soilQuality}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Grafik Perubahan Data */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Perubahan Data dalam Waktu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Grafik Kelembapan Tanah */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Kelembapan Tanah (7 Hari Terakhir)
            </h3>
            <Line data={moistureChartData} />
          </div>

          {/* Grafik Suhu Ruangan */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Suhu Ruangan (7 Hari Terakhir)
            </h3>
            <Line data={temperatureChartData} />
          </div>

          {/* Grafik Kualitas Tanah */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Kualitas Tanah (7 Hari Terakhir)
            </h3>
            <Line data={soilQualityChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalFarming;
