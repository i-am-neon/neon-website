import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import vertexShader from '../utils/psychedelicBackground/vertexShader';
import fragmentShader from '../utils/psychedelicBackground/fragmentShader';
import { useColor } from '../providers/ColorProvider';

const colorIndexToHueValue = [0.3, 0.45, 0, 0.65, 0.85];

const PsychedelicBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const { currentColorIndex } = useColor();
    const [currentHue, setCurrentHue] = useState(colorIndexToHueValue[currentColorIndex] ?? 0.5);

    useEffect(() => {
        const mount = mountRef.current; // Ensure mount is directly used from ref
        if (!mount) return;

        const width = mount.clientWidth;
        const height = mount.clientHeight;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        mount.appendChild(renderer.domElement);

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
            const transitionSeconds = 0.05;
            uniforms.uHue.value += (targetHue - uniforms.uHue.value) * transitionSeconds;

            setCurrentHue(uniforms.uHue.value);

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        animate();

        const onWindowResize = () => {
            if (!mount) return;
            const width = mount.clientWidth;
            const height = mount.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        const onMouseMove = (event: MouseEvent) => {
            uniforms.uMousePosition.value.x = event.clientX / window.innerWidth;
            uniforms.uMousePosition.value.y = 1.0 - event.clientY / window.innerHeight;
        };

        const onTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                uniforms.uMousePosition.value.x = touch.clientX / window.innerWidth;
                uniforms.uMousePosition.value.y = 1.0 - touch.clientY / window.innerHeight;
            }
        };

        window.addEventListener('resize', onWindowResize);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove);

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
            mount.removeChild(renderer.domElement);
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentColorIndex]); // React to changes in currentColorIndex but should NOT change for currentHue, which will cause re-renders

    return <div ref={mountRef} className="w-full h-full"></div>;
};

export default PsychedelicBackground;
