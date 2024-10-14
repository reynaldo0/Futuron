import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import TreeModel from './TreeModel';

function TreeCanvas() {
  const [selectedElement, setSelectedElement] = useState("tree"); // State for selected element
  const elementRef = useRef();

  const handleSelectElement = (elementType) => {
    setSelectedElement(elementType); // Change selected element
  };

  return (
    <div className="relative w-full h-screen bg-green-100">
      <h1 className="absolute top-5 left-5 text-2xl font-bold text-green-700">
        Bring Nature to Your Space
      </h1>

      {/* Controls for selecting nature elements */}
      <div className="absolute top-16 left-5 space-x-4 z-[999999]">
        <button
          onClick={() => handleSelectElement("tree")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Pohon
        </button>
        <button
          onClick={() => handleSelectElement("plant")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Tanaman
        </button>
        <button
          onClick={() => handleSelectElement("animal")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Satwa Liar
        </button>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 2, 5], fov: 60 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.3} /> {/* Ambient light for global illumination */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024} // Shadows
          shadow-mapSize-height={1024}
        />
        <spotLight
          position={[-5, 5, 0]}
          angle={0.15}
          intensity={0.7}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024} // Shadows
          shadow-mapSize-height={1024}
        />

        {/* Environment Map using Sunset Preset for Reflections */}
        <Environment preset="sunset" />

        {/* Display the model based on the selected element */}
        <TreeModel
          type={selectedElement}
          position={[0, 0, 0]}
          meshRef={elementRef}
        />

        {/* User interaction controls */}
        <OrbitControls enableZoom={true} />

        {/* Background stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade={true} />
      </Canvas>

      {/* Capture AR Button */}
      <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md">
        Capture AR
      </button>
    </div>
  );
}

export default TreeCanvas;
