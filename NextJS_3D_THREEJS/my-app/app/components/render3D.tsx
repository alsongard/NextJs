/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 angel_wings.glb -t 
Author: sxnneh (https://sketchfab.com/Sxnneh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/angel-wings-a575b36467d840be84d8f91d5074d7d4
Title: Angel wings
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
  }
  materials: {
    ['head_diff_000_a_whi.001']: THREE.MeshStandardMaterial
  }
//   animations: ${animations.length ? 'GLTFAction' : ''}[]
    // animations: GLTFAction[],
    animations: THREE.AnimationClip[],

}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/angel_wings.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['head_diff_000_a_whi.001']} position={[0.006, 1.307, -0.233]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/angel_wings.glb')
