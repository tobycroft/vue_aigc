<script>
import Topheader from "@/components/center/header/topheader.vue";
// import vrm from '@/lib/vrm/main.vue'


export default {
  name: 'App',
  components: {
    Topheader,
    // vrm,
  },
  data() {
    return {
      message: "",
    }
  },
  async mounted() {

  },
  methods: {
    updateMessage() {

    },
    chatMessage() {

    }
  },
}
</script>

<template>
  <Topheader></Topheader>
  <v-container>
    <vrm
    :height="300"
    :width="300"
    ></vrm>
    <v-card-title>VRM语音+显示</v-card-title>
    <v-form @submit.prevent="updateMessage">
      <v-text-field v-model="message" label="这里输入你想让VRM说的话"></v-text-field>
      <div class="d-flex flex-column">
        <v-btn size="large" type="submit" color="primary" class="mt-4">确认</v-btn>
      </div>
    </v-form>
    <v-card-title>VRM语音+聊天</v-card-title>
    <v-form @submit.prevent="chatMessage">
      <v-text-field v-model="message" label="这里输入你想和VRM聊的内容，AI会自动回复你"></v-text-field>
      <div class="d-flex flex-column">
        <v-btn size="large" type="submit" color="primary" class="mt-4">确认</v-btn>
      </div>
    </v-form>
  </v-container>

</template>

<style scoped>
/* Add any necessary styles here */
</style>
