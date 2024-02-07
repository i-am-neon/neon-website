import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import vertexShader from '../utils/psychedelicBackground/vertexShader';
import fragmentShader from '../utils/psychedelicBackground/fragmentShader';
import { useColor } from '../providers/ColorProvider';

const colorIndexToHueValue = [0.2, 0.45, 0.05, 0.65, 0.6];

const PsychedelicBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    const { currentColorIndex } = useColor();

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

        const colorIndexToHueValue = [0.2, 0.45, 0.05, 0.65, 0.6]; // Adjusted to array
        const hueValue = colorIndexToHueValue[currentColorIndex] ?? 0.5; // Default to 0.5 if not found

        const uniforms = {
            uTime: { value: 0.0 },
            uMousePosition: { value: new THREE.Vector2(0.5, 0.5) },
            uHue: { value: hueValue }, // Set from currentColor
            uHueVariation: { value: 0.2 },
            uDensity: { value: 0.5 },
            uDisplacement: { value: 1.0 },
            // Add other uniforms here
        };

        const shaderMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
        });

        const planeGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
        const plane = new THREE.Mesh(planeGeometry, shaderMaterial);
        scene.add(plane);

        const animate = () => {
            uniforms.uTime.value += 0.05; // Adjust time increment as needed
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        window.addEventListener('resize', () => {
            if (!mountRef.current) {
                return;
            }
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        window.addEventListener('mousemove', (event: MouseEvent) => {
            uniforms.uMousePosition.value.x = event.clientX / window.innerWidth;
            uniforms.uMousePosition.value.y = 1.0 - event.clientY / window.innerHeight;
        });

        return () => {
            // Cleanup code
            mountRef.current?.removeChild(renderer.domElement);
            // Cleanup for window event listeners would also go here
        };
    }, [currentColorIndex]); // Depend on currentColor to re-run setup if it changes


    return <div ref={mountRef} className="w-full h-full"></div>;
};

export default PsychedelicBackground;
