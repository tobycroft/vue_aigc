<template>
  <div>
    <topheader></topheader>
    <div id="landlord">
      <div class="message" style="opacity: 0;"></div>
      <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
      <div class="hide-button" @click="hideLive2d">隐藏</div>
    </div>
  </div>
</template>

<script>
import Topheader from "@/components/center/header/topheader.vue";
// 导入 Live2D 相关文件
// import '@/assets/live2d/js/live2d.js';
import '@/assets/live2d/css/live2d.css';
import '@/assets/live2d.min.js'

// 导入 jQuery
import('https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js');

const message_Path = 'live2d/';
const home_Path = 'https://localhost/';


export default {
  name: 'App',
  components: {
    Topheader,
  },
  data() {
    return {
      direction: 'right',
      style: 'position: fixed; bottom: 0; right: 0;',
      width: 800,
      height: 800,
      size: 600,
      apiPath: "https://live2d.fghrsh.net/api/",
      tips: {}
    }
  },
  created() {
    loadlive2d("live2d", "@/assert/live2d/model/tia/model.json");
    // tips 未使用，可自行在组件绑定此参数，注意此参数只会初始化一次
    // this.tips = this.customTips
  }
}
</script>

<!-- 这里不需要再引入样式文件，因为已经在<script setup>中导入 -->
<!--<style href="live2d/css/live2d.css">-->
<!---->
<!--</style>-->
