import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  Shadow,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const Computer = ({ isMobile }) => {
  // const computer = useLoader(GLTFLoader, "./desktop_pc/scene.gltf");
  const computer = useGLTF("./office/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.01}></ambientLight>
      <hemisphereLight intensity={1.1} groundColor="black" />
      <directionalLight
        position={[0.1, 7, -6]}
        intensity={1}
        castShadow={true}
        receiveShadow
      ></directionalLight>
      <spotLight
        position={[0, -0.7, -0.4]}
        angle={0.3}
        penumbra={3}
        intensity={1.8}
        castShadow
        shadow-mapSize={1024}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.01}
        shadow-radius={7}
      />
      <pointLight intensity={11} position={[1, 1, 3]} />
      <Environment preset="city"></Environment>
      <Shadow
        color="black"
        colorStop={0.4}
        opacity={1}
        fog={false}
        position={[0, -2.5, -0.2]}
        scale={8}
        // Reacts to fog (default=false)
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 2.4}
        position={isMobile ? [0, -2, -1.3] : [2, -2, -1]}
        rotation={[0, 2, 0]}
        castShadow={true}
        receiveShadow={true}
      ></primitive>
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width : 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, 0]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 0.5, tension: 100, friction: 10 }} // Spring config
        >
          <Computer isMobile={isMobile}></Computer>
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
