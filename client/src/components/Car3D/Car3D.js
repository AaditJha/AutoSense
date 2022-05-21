import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Car3DElement from "./Car3DElement";
import { Environment, OrbitControls } from "@react-three/drei";
import "../../styles/Car3D.css";

function Car3D() {
  return (
    <div className="car3d-canvas">
      <Canvas camera={{ position: [3, 6, 7], fov: 35 }}>
        <Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.75}
            minPolarAngle={Math.PI / 2.75}
          />
          <Environment preset="city" />
          <ambientLight intensity={1} />
          <Car3DElement />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default Car3D;
