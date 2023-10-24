import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#423bf7",
  isLogoTexture: true,
  isFullTExture: false,
  logoDecal: "./logo_main.png",
  fullDecal: "./logo_main.png",
});

export default state;
