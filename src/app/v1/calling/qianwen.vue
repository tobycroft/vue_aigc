<script>
import {VueWebRTC} from 'vue-webrtc';

export default {
  name: 'App',
  components: {
    'vue-webrtc': VueWebRTC
  }
}


</script>

<template>
  <vue-webrtc ref="webrtc" width="100%" roomId="sample-room">
  </vue-webrtc>
</template>

<style scoped>

</style>