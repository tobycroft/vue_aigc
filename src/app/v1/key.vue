<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>FastGPT</v-tab>
    <v-tab>QWen</v-tab>
    <v-tab>IFLY</v-tab>

  </v-tabs>

  <fastgpt v-if="tab===0"></fastgpt>
  <qwen v-if="tab===1"></qwen>
  <ifly v-if="tab===2"></ifly>


</template>

<script>
import Topheader from "@/components/topheader.vue";
import info from "@/app/v1/user/info.vue";
import Fastgpt from "@/app/v1/key/fastgpt.vue";
import Qwen from "@/app/v1/key/qwen.vue";
import Ifly from "@/app/v1/key/ifly.vue"; // 引入 Net 方法

export default {
  components: {Ifly, Qwen, Fastgpt, info, Topheader},
  data() {
    return {
      tab: 0
    };
  },
  methods: {
    changetab() {
      // set tab to query
      this.$router.push({query: {tab: this.tab}});
    },
  },
  mounted() {
    if (this.$route.query.tab) {
      this.tab = parseInt(this.$route.query.tab);
    }
  },
};
</script>
