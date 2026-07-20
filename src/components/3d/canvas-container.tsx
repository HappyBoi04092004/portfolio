'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioConfig } from '@/config/portfolio';

// Mutable reference for scroll progress to avoid re-renders
const scrollState = { progress: 0 };

// 1. StarsBackground component
function StarsBackground({ count = 800 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      // Random coordinates in space
      arr[i] = (Math.random() - 0.5) * 80;
      arr[i + 1] = (Math.random() - 0.5) * 80;
      arr[i + 2] = (Math.random() - 0.5) * 80;
    }
    return arr;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      // Gentle rotation
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#a5b4fc"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

// 2. LaptopModel component
function LaptopModel({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Smooth idle bobbing & rotation
    groupRef.current.position.y = Math.sin(time * 1.2) * 0.15;
    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    
    // Slide transition based on scroll progress
    const scroll = scrollState.progress;
    
    if (scroll < 0.25) {
      // Hero position (Center)
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 0, 0.1);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, 0, 0.1);
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, 1, 0.1));
    } else if (scroll >= 0.25 && scroll < 0.55) {
      // About/Skills position (Shift right/smaller)
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 2.5, 0.1);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, -2, 0.1);
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, 0.7, 0.1));
    } else {
      // Push deep into the background (Faded out)
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 0, 0.1);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, -15, 0.1);
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, 0.1, 0.1));
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Laptop Keyboard Base */}
      <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
        <boxGeometry args={[3.2, 0.1, 2.2]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.4} metalness={0.8} />
      </mesh>
      
      {/* Keyboard trackpad indent */}
      <mesh position={[0, -0.04, 0.7]}>
        <boxGeometry args={[0.8, 0.01, 0.5]} />
        <meshStandardMaterial color="#0f172a" roughness={0.6} />
      </mesh>

      {/* Screen Hinge */}
      <mesh position={[0, 0, -1.05]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 3.0, 16]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Laptop Screen Lid */}
      <group position={[0, 0.05, -1.05]} rotation={[Math.PI / 1.7, 0, 0]}>
        {/* Lid Shell */}
        <mesh ref={screenRef} castShadow position={[0, 1.0, 0]}>
          <boxGeometry args={[3.2, 2.0, 0.08]} />
          <meshStandardMaterial color="#1e1b4b" roughness={0.4} metalness={0.8} />
        </mesh>
        
        {/* Screen Display Face */}
        <mesh position={[0, 1.0, 0.051]}>
          <planeGeometry args={[3.0, 1.8]} />
          <meshBasicMaterial color="#050510" />
        </mesh>

        {/* Embedded Interactive Source Code Screen */}
        <Html
          transform
          occlude
          distanceFactor={1.5}
          position={[0, 1.0, 0.055]}
          className="w-[600px] h-[360px] bg-[#020208]/90 text-[10px] p-4 font-mono select-none overflow-hidden rounded-md border border-indigo-500/30 flex flex-col justify-between"
        >
          <div className="flex items-center space-x-2 border-b border-indigo-500/20 pb-1.5 text-indigo-400/80">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30" />
            <span>src/main.dart</span>
          </div>
          <div className="flex-1 mt-2 text-indigo-400 space-y-1 overflow-hidden leading-relaxed">
            <p className="text-pink-400">import &apos;package:flutter/material.dart&apos;;</p>
            <p className="text-pink-400">import &apos;package:bloc/package_bloc.dart&apos;;</p>
            <p className="text-slate-500">// Initialize high-performance engine</p>
            <p><span className="text-yellow-400">void</span> main() {'{'}</p>
            <p className="pl-4">runApp(<span className="text-green-300">const MyApp()</span>);</p>
            <p>{'}'}</p>
            <p className="text-slate-500">// Responsive microservices router</p>
            <p><span className="text-yellow-400">class</span> GoRouterService {'{'}</p>
            <p className="pl-4"><span className="text-yellow-400">final</span> String gatewayUri;</p>
            <p className="pl-4">GoRouterService(<span className="text-yellow-400">this</span>.gatewayUri);</p>
            <p className="pl-4"><span className="text-yellow-400">async</span> dispatch(Packet p) {'{'}</p>
            <p className="pl-8 text-blue-400">await axios.post(gatewayUri, body: p.toJSON());</p>
            <p className="pl-4">{'}'}</p>
            <p>{'}'}</p>
          </div>
          <div className="flex items-center justify-between text-[8px] text-indigo-500/60 border-t border-indigo-500/20 pt-1.5">
            <span>Lines: 1530 // UTF-8</span>
            <span>60 FPS // STABLE</span>
          </div>
        </Html>
      </group>
    </group>
  );
}

// 3. Orbiting items component for Tech Orbit section
interface OrbitNodeProps {
  name: string;
  position: THREE.Vector3;
  color: string;
}

function OrbitNode({ name, position, color }: OrbitNodeProps) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Keep facing the camera
      meshRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color={hovered ? '#818cf8' : '#312e81'} />
        <Html distanceFactor={6} center>
          <div
            className={`px-3 py-1.5 rounded-full font-mono text-[9px] border transition-all duration-300 pointer-events-none uppercase whitespace-nowrap ${
              hovered
                ? 'bg-indigo-600/90 border-indigo-400 text-white scale-110 shadow-lg shadow-indigo-500/50'
                : 'bg-slate-950/80 border-indigo-900/30 text-indigo-300'
            }`}
          >
            {name}
          </div>
        </Html>
      </mesh>
    </group>
  );
}

function OrbitingSphere() {
  const sphereRef = useRef<THREE.Group>(null);
  
  // Flatten all skills into a simple list
  const allSkills = portfolioConfig.skills.flatMap(cat => cat.skills).map(s => s.name);
  
  // Arrange skills evenly in 3D sphere coordinate
  const nodes = useState(() => {
    return allSkills.map((name, i) => {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const radius = 3.5;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      return {
        name,
        position: new THREE.Vector3(x, y, z),
        color: '#818cf8'
      };
    });
  })[0];

  useFrame((state) => {
    if (!sphereRef.current) return;
    
    // Slow rotational orbit
    sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;
    
    // Position/Scale transition based on scroll progress
    const scroll = scrollState.progress;
    
    if (scroll < 0.35) {
      // Hide far away
      sphereRef.current.position.y = 15;
      sphereRef.current.scale.setScalar(0.1);
    } else if (scroll >= 0.35 && scroll < 0.65) {
      // Reveal at center for Skills / Tech Orbit section
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, 0, 0.08);
      sphereRef.current.scale.setScalar(THREE.MathUtils.lerp(sphereRef.current.scale.x, 1.0, 0.08));
    } else {
      // Slide off screen
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, -12, 0.08);
      sphereRef.current.scale.setScalar(THREE.MathUtils.lerp(sphereRef.current.scale.x, 0.2, 0.08));
    }
  });

  return (
    <group ref={sphereRef} position={[0, 15, 0]}>
      {nodes.map((node, i) => (
        <OrbitNode key={i} name={node.name} position={node.position} color={node.color} />
      ))}
      
      {/* Visual glowing center anchor */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#4f46e5" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

// Camera and scene coordinator
function SceneController({ introActive }: { introActive: boolean }) {
  useFrame((state) => {
    // Sync scroll
    const scroll = scrollState.progress;
    
    if (introActive) {
      // 1. Loading sequence - Camera starts very far back
      state.camera.position.x = 0;
      state.camera.position.y = 0;
      state.camera.position.z = 25;
      state.camera.lookAt(0, 0, 0);
    } else {
      // 2. Camera transition / follow scroll
      // Base positions
      let targetX = 0;
      let targetY = 0;
      let targetZ = 5.5; // default zoom
      
      if (scroll < 0.25) {
        // Hero: normal view
        targetX = (state.pointer.x * 1.5);
        targetY = (state.pointer.y * 1.5);
        targetZ = 5.5;
      } else if (scroll >= 0.25 && scroll < 0.55) {
        // About / Skills: camera shifts left (which moves 3D right)
        targetX = -1.2 + (state.pointer.x * 0.8);
        targetY = (state.pointer.y * 0.8);
        targetZ = 5.0;
      } else if (scroll >= 0.55 && scroll < 0.7) {
        // Tech Orbit: Zoom out slightly to see orbit sphere
        targetX = (state.pointer.x * 1.2);
        targetY = (state.pointer.y * 1.2);
        targetZ = 7.5;
      } else {
        // Timeline & Contact: deep fade out
        targetX = 0;
        targetY = -3;
        targetZ = 12;
      }

      // Smooth interpolation (lerp)
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

interface CanvasContainerProps {
  introActive: boolean;
}

export default function CanvasContainer({ introActive }: CanvasContainerProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        scrollState.progress = window.scrollY / scrollHeight;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        shadows
      >
        <color attach="background" args={['#050816']} />
        
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <directionalLight position={[0, 5, 5]} intensity={1.0} color="#ffffff" castShadow />

        {/* 3D Content elements */}
        <StarsBackground count={1000} />
        <LaptopModel active={!introActive} />
        <OrbitingSphere />
        
        {/* Dynamic camera behaviors */}
        <SceneController introActive={introActive} />
      </Canvas>
    </div>
  );
}
