import React, { useState } from 'react';

// Komponen utama untuk tampilan pohon pengguna
const TreeProfile = () => {
  const [growth, setGrowth] = useState(0); // Status pertumbuhan pohon
  const [activities, setActivities] = useState(0); // Jumlah aktivitas pengguna
  const milestones = [10, 20, 30, 50]; // Milestone untuk pohon fisik

  // Fungsi untuk menambahkan aktivitas dan menumbuhkan pohon
  const addActivity = () => {
    setActivities(activities + 1);
    setGrowth(growth + 10); // Setiap aktivitas menambah 10 unit pertumbuhan
  };

  const checkMilestone = () => {
    return milestones.find(milestone => activities >= milestone);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">My Smart Tree</h1>

      {/* Visualisasi Pohon */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <img
            src={`/assets/tree-growth-stage-${Math.min(growth / 10, 5)}.png`} // Mengganti gambar pohon sesuai tahap
            alt="Tree Growth"
            className={`transition-transform duration-500 transform ${
              growth > 0 ? 'scale-100' : 'scale-50'
            }`}
            style={{ height: `${100 + growth}%`, width: 'auto' }}
          />
        </div>
      </div>

      {/* Menampilkan aktivitas pengguna */}
      <ActivityTracker activities={activities} addActivity={addActivity} />

      {/* Menampilkan milestone */}
      {checkMilestone() && (
        <Milestone milestone={checkMilestone()} />
      )}
    </div>
  );
};

// Komponen untuk menampilkan progress aktivitas pengguna
const ActivityTracker = ({ activities, addActivity }) => {
  return (
    <div className="text-center">
      <p className="text-lg text-green-600 mb-2">
        Aktivitas lingkungan yang telah Anda selesaikan: {activities}
      </p>
      <button
        onClick={addActivity}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition"
      >
        Tambah Aktivitas
      </button>
    </div>
  );
};

// Komponen untuk milestone pencapaian
const Milestone = ({ milestone }) => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-6" role="alert">
      <p className="font-bold">Selamat!</p>
      <p>Anda telah mencapai milestone {milestone} aktivitas! Pohon akan segera ditanam atas nama Anda.</p>
    </div>
  );
};

export default TreeProfile;
