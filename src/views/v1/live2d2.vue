<template>
  <topheader></topheader>
  <!--  <head>-->
  <!--    <meta charset="utf-8">-->
  <!--    <title>Live2D！把可爱的看板娘扑捉到你的博客去吧！</title>-->
  <!--  </head>-->
  <div id="landlord">
    <div class="message" style="opacity:0"></div>
    <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
    <div class="hide-button">隐藏</div>
  </div>
</template>
<script setup>

import Topheader from "@/components/center/header/topheader.vue";
import('https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js')


import('@/assets/live2d/js/live2d.js')
import('@/assets/live2d/js/message.js')


import('@/assets/live2d/css/live2d.css')


var message_Path = 'live2d/'
var home_Path = 'https://localhost/'

// loadlive2d("live2d", "@/assert/live2d/model/tia/model.json");
</script>
<!--<style href="live2d/css/live2d.css">-->
<!---->
<!--</style>-->