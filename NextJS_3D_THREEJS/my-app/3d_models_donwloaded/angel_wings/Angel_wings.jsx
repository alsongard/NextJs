/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 angel_wings.glb -T 
Files: angel_wings.glb [497.83KB] > /home/alson-kali/PROGRAMMING/NextJs/NextJS_3D_THREEJS/my-app/3d_models_donwloaded/angel_wings/angel_wings-transformed.glb [65.22KB] (87%)
Author: sxnneh (https://sketchfab.com/Sxnneh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/angel-wings-a575b36467d840be84d8f91d5074d7d4
Title: Angel wings
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/angel_wings-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['head_diff_000_a_whi.001']} position={[0.006, 1.307, -0.233]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/angel_wings-transformed.glb')
