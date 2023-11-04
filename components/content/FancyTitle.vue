<template>
  <pre class="fancy-title">{{ fancyTitle }}</pre>
</template>

<script setup lang="ts">
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";
import font3d from "figlet/importable-fonts/3-D.js";
import Epic from "figlet/importable-fonts/Epic";
import Slant from "figlet/importable-fonts/Slant.js";
import SlantRelief from "figlet/importable-fonts/Slant Relief.js";
import SmallSlant from "figlet/importable-fonts/Small Slant.js";
import Big from "figlet/importable-fonts/Big.js";
import Doh from "figlet/importable-fonts/Doh.js";
import SubZero from "figlet/importable-fonts/Sub-Zero.js";
import SwampLand from "figlet/importable-fonts/Swamp Land.js";
import font3DASCII from "figlet/importable-fonts/3D-ASCII.js";

export interface Props {
  title?: string;
  font?: string;
}

// Load fonts into figlet
figlet.parseFont("Standard", standard);
figlet.parseFont("3D-ASCII", font3DASCII);
figlet.parseFont("3-D", font3d);
figlet.parseFont("Epic", Epic);
figlet.parseFont("Slant", Slant);
figlet.parseFont("Slant Relief", SlantRelief);
figlet.parseFont("Small Slant", SmallSlant);
figlet.parseFont("Big", Big);
figlet.parseFont("Doh", Doh);
figlet.parseFont("Sub-Zero", SubZero);
figlet.parseFont("Swamp Land", SwampLand);

const props = withDefaults(defineProps<Props>(), {
  title: "Sample Title",
  font: "Slant",
});
const fancyTitle = await figlet.text(
  props.title,
  {
    font: props.font as any,
  },
  function (err: any, data: any) {
    console.log(data);
  }
);
</script>

<style>
.fancy-title {
  font-size: 0.65rem;
}
</style>
