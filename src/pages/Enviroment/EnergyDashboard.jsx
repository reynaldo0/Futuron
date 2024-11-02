import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the components used in the chart
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const EnergyDashboard = () => {
  const solarEnergy = 85.3; // Energi yang dihasilkan oleh panel surya (kWh)
  const windEnergy = 72.5; // Energi yang dihasilkan oleh turbin angin (kWh)
  const batteryLevel = 78; // Tingkat baterai (persentase)

  const energyUsageData = [
    { time: '08:00', usage: 35 },
    { time: '09:00', usage: 50 },
    { time: '10:00', usage: 62 },
    { time: '11:00', usage: 70 },
    { time: '12:00', usage: 75 },
    { time: '13:00', usage: 68 },
    { time: '14:00', usage: 65 },
    { time: '15:00', usage: 60 },
    { time: '16:00', usage: 55 },
    { time: '17:00', usage: 48 },
  ];

  const energyGraphData = {
    labels: energyUsageData.map(entry => entry.time),
    datasets: [
      {
        label: 'Penggunaan Energi (kWh)',
        data: energyUsageData.map(entry => entry.usage),
        fill: false,
        borderColor: 'rgb(34, 197, 94)', // Hijau untuk tema energi terbarukan
        tension: 0.4,
        pointBackgroundColor: 'rgb(34, 197, 94)',
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-6">Energi Terbarukan Pintar</h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Pantau pembaruan terkini pada energi terbarukan yang dihasilkan dan penggunaannya.
        Dasbor ini menyediakan informasi real-time mengenai energi yang dihasilkan dari panel surya dan turbin angin, serta tingkat penyimpanan energi saat ini.
      </p>

      {/* Container untuk detail energi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-5xl">
        {/* Panel Surya */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Energi Surya</h2>
          <div className="text-4xl font-bold text-green-500">{solarEnergy.toFixed(1)} kWh</div>
          <p className="text-sm text-gray-600">Energi yang dihasilkan oleh panel surya hari ini</p>
        </div>

        {/* Turbin Angin */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Energi Angin</h2>
          <div className="text-4xl font-bold text-blue-500">{windEnergy.toFixed(1)} kWh</div>
          <p className="text-sm text-gray-600">Energi yang dihasilkan oleh turbin angin hari ini</p>
        </div>

        {/* Penyimpanan Energi */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Penyimpanan Energi</h2>
          <div className="text-4xl font-bold text-yellow-500">{batteryLevel.toFixed(0)}%</div>
          <p className="text-sm text-gray-600">Tingkat penyimpanan baterai saat ini</p>
        </div>
      </div>

      {/* Grafik Pemakaian Energi */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Riwayat Pemakaian Energi</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Grafik ini menunjukkan pola pemakaian energi sepanjang hari. Pantau penggunaan energi untuk mengoptimalkan efisiensi dan keberlanjutan.
        </p>
        <div className="w-full h-96">
          {/* Komponen ChartJS untuk pemakaian energi */}
          <Line data={energyGraphData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;
