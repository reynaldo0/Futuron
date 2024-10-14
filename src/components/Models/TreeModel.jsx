import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// Tree Component
function Tree({ position, meshRef }) {
  const { nodes, materials } = useGLTF('/model/tree.glb'); // Load GLTF model for the tree
  return (
    <group position={position} ref={meshRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload('/tree.glb');

// Plant Component
function Plant({ position, meshRef }) {
  const { nodes, materials } = useGLTF('/model/car.glb'); // Load GLTF model for the plant
  return (
    <group position={position} ref={meshRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload('/plant.glb');

// Animal Component
function Animal({ position, meshRef }) {
  const { nodes, materials } = useGLTF('/model/drone.glb'); // Load GLTF model for the animal
  return (
    <group position={position} ref={meshRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload('/animal.glb');

// TreeModel - Function to handle different types of models (tree, plant, animal)
export function TreeModel({ type, position }) {
  const meshRef = useRef();

  // Apply rotation using useFrame to rotate the model on every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed here
    }
  });

  if (type === 'tree') {
    return <Tree position={position} meshRef={meshRef} />;
  } else if (type === 'plant') {
    return <Plant position={position} meshRef={meshRef} />;
  } else if (type === 'animal') {
    return <Animal position={position} meshRef={meshRef} />;
  }
  return null;
}

export default TreeModel;
