import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float distance={0.5} speed={1}>
      <mesh scale={2.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </Canvas>
  );
};

export default BallCanvas;
