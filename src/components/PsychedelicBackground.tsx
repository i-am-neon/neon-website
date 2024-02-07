import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import vertexShader from '../utils/psychedelicBackground/vertexShader';
import fragmentShader from '../utils/psychedelicBackground/fragmentShader';

const PsychedelicBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        const uniforms = {
            uTime: { value: 0.0 },
            uMousePosition: { value: new THREE.Vector2(0.5, 0.5) },
            uHue: { value: 0.5 },
            uHueVariation: { value: 0.2 },
            uDensity: { value: 0.5 },
            uDisplacement: { value: 1.0 },
            // Add other uniforms here as needed
        };

        const shaderMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
        });

        const planeGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
        const plane = new THREE.Mesh(planeGeometry, shaderMaterial);
        scene.add(plane);

        let frameId: number | null = null;

        const animate = () => {
            uniforms.uTime.value += 0.05; // Adjust time increment as needed
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (!mountRef.current) {
                return;
            }
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        const handleMouseMove = (event: MouseEvent) => {
            uniforms.uMousePosition.value.x = event.clientX / window.innerWidth;
            uniforms.uMousePosition.value.y = 1.0 - event.clientY / window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        animate();

        return () => {
            if (!mountRef.current) {
                return;
            }
            if (frameId) cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full"></div>;
};

export default PsychedelicBackground;
