const vertexShader: string = `
    // custom uniforms to build up our tubes
    uniform float uTime;
    uniform vec2 uMousePosition;

    // pass a few things along to the vertex shader
    varying vec2 vUv;

    void main() {
    vUv = uv;
    vec4 pos = vec4(position, 1.0);
    gl_Position = pos;
    }
`;

export default vertexShader;
