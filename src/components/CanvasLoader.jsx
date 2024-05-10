import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  console.log(progress.toFixed(2));

  return (
    <Html className=" ">
      <span className="canvas-load  "></span>
      <p
        className=" h-[100vh] text-center flex items-center "
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: -400,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
