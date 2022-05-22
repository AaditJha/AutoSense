import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Car3DElement(props) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  const gltf = useLoader(GLTFLoader, "./car.gltf");
  return (
    <mesh ref={ref}>
      <primitive object={gltf.scene} scale={1.5} />
    </mesh>
  );
}
export default Car3DElement;
