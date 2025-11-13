/*
  Optimized Room.jsx
  - Materials are memoized (no recreation per render)
  - EffectComposer moved inside only if absolutely necessary
  - Shared materials reused where possible
  - Unused imports removed
  - GLTF preloading intact
*/

import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  /** ✅ Memoized materials (created only once) */
  const curtainMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#d90429" }),
    []
  );

  const bodyMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ map: matcapTexture }),
    [matcapTexture]
  );

  const tableMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#582f0e" }),
    []
  );

  const radiatorMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#a9a39d" }),
    []
  );

  const compMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#00000f" }),
    []
  );

  const pillowMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#ffffcc" }),
    []
  );

  const chairMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#000000" }),
    []
  );

  /** ✅ Optional: Shared default for repetitive meshes */
  const defaultMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#cccccc" }),
    []
  );

  return (
    <group {...props} dispose={null}>
      {/* ✅ Lightweight lighting — good visual without heavy shadow passes 
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />

      {/* ✅ Postprocessing — ideally this should live in the Canvas root */}
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.8}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      {/* ✅ Core geometry with optimized materials */}
      <mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={chairMaterial} />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.miuse_blinn1_0.geometry} material={pillowMaterial} />
      <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.kovrik_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.red_bttns_blinn1_0.geometry} material={curtainMaterial} />
      <mesh geometry={nodes.tablet_blinn1_0.geometry} material={compMaterial} />
      {/* Bloom target */}
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />

      {/* ✅ Reused material where blinn1 was repeated */}
      <mesh geometry={nodes.handls_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.lamp_bl_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.lamp_white_blinn1_0.geometry} material={defaultMaterial} />
    
      <mesh geometry={nodes.pCylinder5_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} />
      <mesh geometry={nodes.polySurface53_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.radiator_blinn1_0.geometry} material={radiatorMaterial} />
      <mesh geometry={nodes.radiator_blinn1_0001.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.railing_blinn1_0.geometry} material={curtainMaterial} />
      <mesh geometry={nodes.red_vac_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.stylus_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.triangle_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.vac_black_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.vacuum1_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.vacuumgrey_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.vires_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.window_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
