import { proxy } from "valtio";
const state=proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png', // Replace it with mini anon
    fullDecal: './threejs.png',
});

export default state;