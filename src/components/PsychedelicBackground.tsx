import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import vertexShader from '../utils/psychedelicBackground/vertexShader';
import fragmentShader from '../utils/psychedelicBackground/fragmentShader';
import { useColor } from '../providers/ColorProvider';

const colorIndexToHueValue = [0.2, 0.45, 0.05, 0.65, 0.6];

const PsychedelicBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const { currentColorIndex } = useColor();
    const [currentHue, setCurrentHue] = useState(colorIndexToHueValue[currentColorIndex] ?? 0.5);

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
            uHue: { value: currentHue },
            uHueVariation: { value: 0.2 },
            uDensity: { value: 0.5 },
            uDisplacement: { value: 1.0 },
        };

        const shaderMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
        });

        const planeGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
        const plane = new THREE.Mesh(planeGeometry, shaderMaterial);
        scene.add(plane);

        let frameId: number;

        const animate = () => {
            uniforms.uTime.value += 0.05; // Speed at which it flows ambiently
            const targetHue = colorIndexToHueValue[currentColorIndex] ?? 0.5;
            const transitionSeconds = 0.01;
            uniforms.uHue.value += (targetHue - uniforms.uHue.value) * transitionSeconds; // Smoothly interpolate hue value

            setCurrentHue(uniforms.uHue.value); // Update state to trigger re-render if necessary

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
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
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, [currentColorIndex]); // React to changes in currentColorIndex


    return <div ref={mountRef} className="w-full h-full"></div>;
};

export default PsychedelicBackground;
