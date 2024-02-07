import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import vertexShader from '../utils/psychadelicBackground/vertexShader';
import fragmentShader from '../utils/psychadelicBackground/fragmentShader';

const PsychedelicBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mountRef.current) {
            // Renderer setup
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            mountRef.current.appendChild(renderer.domElement);

            // Scene and Camera setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;

            // Shader Material
            const shaderMaterial = new THREE.ShaderMaterial({
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                uniforms: {
                    uTime: { value: 0.0 },
                },
            });

            // Plane Geometry
            const planeGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
            const plane = new THREE.Mesh(planeGeometry, shaderMaterial);
            scene.add(plane);

            // Animation Loop
            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();
                shaderMaterial.uniforms.uTime.value = elapsedTime;
                renderer.render(scene, camera);
            };
            animate();

            // Cleanup
            return () => {
                mountRef.current?.removeChild(renderer.domElement);
            };
        }
    }, []); // Empty dependency array ensures this runs once on mount

    return <div ref={mountRef} className="w-full h-full"></div>;
};

export default PsychedelicBackground;
