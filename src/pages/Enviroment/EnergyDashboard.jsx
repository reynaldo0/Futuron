import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the components used in the chart
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const EnergyDashboard = () => {
  const solarEnergy = 80; // Energi yang dihasilkan oleh panel surya (kWh)
  const windEnergy = 65; // Energi yang dihasilkan oleh turbin angin (kWh)
  const batteryLevel = 75; // Tingkat baterai (persen)

  const energyUsageData = [
    { time: '08:00', usage: 40 },
    { time: '09:00', usage: 55 },
    { time: '10:00', usage: 60 },
    { time: '11:00', usage: 65 },
    { time: '12:00', usage: 70 },
    { time: '13:00', usage: 50 },
    { time: '14:00', usage: 55 },
    { time: '15:00', usage: 45 },
    { time: '16:00', usage: 60 },
    { time: '17:00', usage: 50 },
  ];

  const energyGraphData = {
    labels: energyUsageData.map(entry => entry.time),
    datasets: [
      {
        label: 'Energy Usage (kWh)',
        data: energyUsageData.map(entry => entry.usage),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-primary-400 mb-6">Energi Terbarukan Pintar</h1>

      {/* Container for the energy details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Solar Panel */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Panel Surya</h2>
          <div className="text-3xl font-bold text-green-500">{solarEnergy.toFixed(2)} kWh</div>
          <p className="text-sm text-gray-600">Energi yang dihasilkan hari ini</p>
        </div>

        {/* Wind Turbine */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Turbin Angin</h2>
          <div className="text-3xl font-bold text-blue-500">{windEnergy.toFixed(2)} kWh</div>
          <p className="text-sm text-gray-600">Energi yang dihasilkan hari ini</p>
        </div>

        {/* Energy Storage */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Penyimpanan Energi</h2>
          <div className="text-3xl font-bold text-yellow-500">{batteryLevel.toFixed(2)}%</div>
          <p className="text-sm text-gray-600">Level baterai saat ini</p>
        </div>
      </div>

      {/* Large Chart for Energy Usage */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Pemakaian Energi</h2>
        <div className="w-full h-96">
          {/* ChartJS component for energy usage */}
          <Line data={energyGraphData} />
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;
