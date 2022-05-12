import { createRoot } from 'react-dom/client';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Environment, OrbitControls, useFBX } from '@react-three/drei';

function Box(props) {
	const obj = useLoader(FBXLoader, './78-pig/untitled.fbx');
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef();
	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (ref.current.rotation.x += 0.01));
	// Return the view, these are regular Threejs elements expressed in JSX
	const colorMap = useLoader(TextureLoader, './78-pig/gun_dead_space.png');
	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1}			
		>

			<primitive object={obj} scale={0.1} />;

			<meshStandardMaterial isMeshStandardMaterial map={colorMap} />

		</mesh>
	);
}
export const Monkey = () => {

	const Model = () => {

		const obj = useLoader(OBJLoader, './78-pig/Pig.obj');
		return <primitive object={obj} dispose={null} scale={1} material={'./78-pig/Pig.png'} />;
	};
	return (
		<Canvas  camera={{ position: [0, 0, 25], fov: 45 }}>
			<Suspense fallback={null}>
				<ambientLight intensity={0.2} />
				<OrbitControls maxDistance={40} minDistance={40}/>
				<directionalLight />	
				<Box />
			</Suspense>
		</Canvas>
	);
};




