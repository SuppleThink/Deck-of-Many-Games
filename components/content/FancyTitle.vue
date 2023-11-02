<template>
  <pre class="fancy-title">{{ fancyTitle }}</pre>
</template>

<script setup lang="ts">
import { computed } from "vue";
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";
figlet.parseFont("Standard", standard);
import font3d from "figlet/importable-fonts/3-D.js";
figlet.parseFont("3-D", font3d);
import Epic from "figlet/importable-fonts/Epic";
figlet.parseFont("Epic", Epic);
import Slant from "figlet/importable-fonts/Slant.js";
figlet.parseFont("Slant", Slant);
import SlantRelief from "figlet/importable-fonts/Slant Relief.js";
figlet.parseFont("Slant Relief", SlantRelief);
import SmallSlant from "figlet/importable-fonts/Small Slant.js";
figlet.parseFont("Small Slant", SmallSlant);
export interface Props {
  title?: string;
  font?: string;
}

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
  font-size: 0.75rem;
}
</style>
