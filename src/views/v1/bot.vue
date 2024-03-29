<template>
  <v-app>

    <topheader></topheader>
    <v-tabs v-model="tab" @click="changetab"
            fixed-tabs
            bg-color="indigo-darken-2"
    >
      <v-tab>私有机器人</v-tab>
      <v-tab>开放机器人</v-tab>
      <v-tab>未绑定机器人</v-tab>
      <v-tab>共享机器人</v-tab>
    </v-tabs>
    <v-slide-x-transition>
      <Public v-if="tab===1"></Public>
      <Private v-if="tab===0"></Private>
      <Unbind v-if="tab===2"></Unbind>
      <Share v-if="tab===3"></Share>
    </v-slide-x-transition>
  </v-app>

</template>


<script>
import Topheader from "@/components/center/header/topheader.vue";
import Public from "@/views/v1/bot/Public.vue";
import Private from "@/views/v1/bot/Private.vue";
import Unbind from "@/views/v1/bot/Unbind.vue";
import Share from "@/views/v1/bot/Share.vue";


export default {
  computed: {},
  mounted() {
  },
  components: {Share, Unbind, Private, Public, Topheader},
  data: () => ({
    tab: '',
  }),
  methods: {
    changetab() {
      // console.log(this.tab)
    },
  },
}
</script>

<style>
.elevation-1 {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
