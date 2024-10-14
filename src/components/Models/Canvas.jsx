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

  const handleARCapture = async () => {
    if (navigator.xr) {
      try {
        // Request a device session for AR
        const session = await navigator.xr.requestSession('immersive-ar', {
          requiredFeatures: ['hit-test'],
        });

        // When AR session starts, render the scene
        const xrRef = document.querySelector('canvas');
        session.addEventListener('end', () => {
          xrRef.style.display = 'none'; // Hide the canvas when AR session ends
        });

        xrRef.style.display = 'block'; // Show the canvas when AR session starts
        await navigator.xr.requestDevice();
        await navigator.xr.requestSession('immersive-ar');
        
        console.log('AR session started');
      } catch (error) {
        console.error('Error starting AR session:', error);
      }
    } else {
      alert('Your browser does not support AR.');
    }
  };

  return (
    <div className="relative w-full h-screen bg-green-100 flex justify-center items-center">
      <div className="relative bg-white w-[80%] h-[80%] rounded-lg shadow-xl overflow-hidden">
        <h1 className="absolute top-5 left-5 text-2xl font-bold text-green-700 z-10">
          Bring Nature to Your Space
        </h1>

        {/* 3D Canvas Container */}
        <div className="w-full h-full">
          <Canvas
            camera={{ position: [0, 2, 5], fov: 30 }}
            className="w-full h-full"
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
              enableZoom={false}
              meshRef={elementRef}
            />

            {/* User interaction controls */}
            <OrbitControls 
            enableZoom={false} // Disable zoom
            maxAzimuthAngle={Math.PI / 4} // Limit horizontal panning to 45 degrees
            minAzimuthAngle={-Math.PI / 4} // Limit horizontal panning to -45 degrees
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 2} />

            {/* Background stars */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade={true} />
          </Canvas>
        </div>
      </div>

      {/* Controls for selecting nature elements */}
      <div className="absolute bottom-16 flex justify-center space-x-4 z-[999999]">
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
    </div>
  );
}

export default TreeCanvas;
