import React, { useState, useEffect } from "react";
import CountUp from "react-countup"; // Import CountUp
import StatCard from "../../components/StatCard";
import { mockData } from "../../docs/ImpactFeedData";
import MapView from "../../components/MapView";

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

  // Filter hanya proyek yang berada di Indonesia (Lintang: -11.5 hingga 6.0, Bujur: 95 hingga 141)
  const filteredProjects = feedData.filter((project) => {
    return (
      project.lat >= -11.5 &&
      project.lat <= 6.0 && // Lintang Indonesia
      project.lng >= 95.0 &&
      project.lng <= 141.0 // Bujur Indonesia
    );
  });

  return (
    <div className="min-h-screen container mx-auto p-5 mt-40">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Feed Dampak Lingkungan Langsung - Indonesia 🌍
      </h1>

      {/* Bagian Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Karbon Di-offset" value={13800} />
        <StatCard title="Total Pohon Ditanam" value={500000} />
        <StatCard title="Proyek Aktif" value={filteredProjects.length} />
      </div>

      {/* Feed Langsung */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bagian Peta */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-5">
          Lokasi Proyek di Indonesia
        </h2>
        <MapView filteredProjects={filteredProjects} />
      </div>
    </div>
  );
};

export default ImpactFeed;
