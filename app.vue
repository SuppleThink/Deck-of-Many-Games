<template>
  <Body class=""></Body>
  <AppHeader />
  <div class="container">
    <div class="container-inner">
      <NuxtPage />
    </div>
  </div>
  <AppFooter />
</template>

<script setup type="ts">
import IBM_VGA from "/fonts/Web437_IBM_VGA_9x16.woff"
import NEC_MultiSpeed from "/fonts/Web437_NEC_MultiSpeed.woff"
import ToshibaT300 from "/fonts/Web437_ToshibaT300_8x8.woff"
import ToshibaSat from "/fonts/WebPlus_ToshibaSat_8x8.woff"

if(process.server){
  useHead({
    link: [
      {
        rel: 'preload',
        href: IBM_VGA,
        crossorigin: '',
        as: 'font',
        type: 'font/woff2',

      },
      {
        rel: 'preload',
        href: NEC_MultiSpeed,
        crossorigin: '',
        as: 'font',
        type: 'font/woff2',

      },
      {
        rel: 'preload',
        href: ToshibaT300,
        crossorigin: '',
        as: 'font',
        type: 'font/woff2',

      },
      {
        rel: 'preload',
        href: ToshibaSat,
        crossorigin: '',
        as: 'font',
        type: 'font/woff2',

      },
    ]
  })
}
</script>

<style scoped>
.container {
  padding-top: 5em;
  padding-bottom: 5em;
}
</style>
<style>
body {
  background-color: #111;
  color: #cdedcf;
}
</style>
