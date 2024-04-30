import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader";

const Computer = ({ isMobile }) => {
  // const computer = useLoader(GLTFLoader, "./desktop_pc/scene.gltf");
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.1}></ambientLight>
      <hemisphereLight intensity={0.95} groundColor="black" />
      <spotLight
        position={[1, 2.7, 1]}
        angle={1}
        penumbra={3}
        intensity={11}
        castShadow
        shadow-mapSize={1024}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.01}
        shadow-radius={1}
      />
      <pointLight intensity={130} position={[4, 10, 1]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.6}
        position={isMobile ? [0, -3, -2.2] : [0, 1, -1.5]}
        rotation={[0, -0.2, -0.3]}
        castShadow
        receiveShadow
      ></primitive>
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        ></OrbitControls>
        <Computer></Computer>
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
