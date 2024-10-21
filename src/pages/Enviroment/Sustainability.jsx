import React from "react";
import { Bar } from "react-chartjs-2";
import { BarChart, MapPin, FileText } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Importing marker icons directly
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";

// Register necessary elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Fixing Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const SustainabilityVisualization = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <img
        src="/background/wave.svg"
        alt="wave"
        className="w-full"
        draggable="false"
      />
      <div className="bg-primary-300 text-white pb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Visualisasi Data Interaktif tentang Keberlanjutan
        </h1>
        <p className="text-lg mb-8">
          Jelajahi data keberlanjutan dan dampak lingkungan melalui grafik dan
          peta interaktif.
        </p>
      </div>

      {/* Interactive Chart */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Grafik Interaktif
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <BarChart className="text-green-500" size={400} />{" "}
            {/* Increased size */}
            <div className="w-full">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Peta Dampak Lingkungan
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center">
            <MapPin className="text-green-500" size={400} />{" "}
            {/* Increased size */}
            <div className="w-full h-96">
              <MapContainer
                center={[-6.1751, 106.865]}
                zoom={5}
                scrollWheelZoom={false}
                className="h-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Marker for specific location */}
                <Marker position={[-6.1751, 106.865]}>
                  <Popup>
                    Jakarta: Salah satu kota dengan inisiatif keberlanjutan yang
                    berkembang.
                  </Popup>
                </Marker>
                {/* Add more markers here */}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Reports */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Laporan Real-Time
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realTimeReports.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center"
            >
              <FileText className="text-green-500 mr-4" size={50} />
              <div>
                <h3 className="text-xl font-semibold">{report.title}</h3>
                <p className="mt-2">{report.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Data for Chart
const data = {
  labels: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ], // Extended to December
  datasets: [
    {
      label: "Emisi Karbon (ton)",
      data: [65, 59, 80, 81, 56, 55, 70, 60, 75, 80, 85, 90], // Sample data for the year
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Penggunaan Energi Terbarukan (kWh)",
      data: [120, 130, 150, 140, 160, 170, 180, 190, 200, 210, 220, 230], // Sample data for the year
      backgroundColor: "rgba(255, 206, 86, 0.6)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
  ],
};

// Options for Chart
const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Data for Real-Time Reports
const realTimeReports = [
  {
    title: "Inisiatif Pengurangan Polusi",
    description:
      "Menerapkan kebijakan untuk mengurangi emisi di area perkotaan.",
  },
  {
    title: "Proyek Energi Terbarukan",
    description: "Implementasi sistem tenaga surya di komunitas lokal.",
  },
  {
    title: "Pemantauan Kualitas Udara",
    description: "Melakukan pengukuran dan laporan secara real-time.",
  },
];

export default SustainabilityVisualization;
