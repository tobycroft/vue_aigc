<template>
  <v-container>
    <v-list>
      <v-card>
        <v-card-title>信息准备</v-card-title>
        <v-card-subtitle>1.新建团队</v-card-subtitle>
        <v-card-subtitle>2.在API能力页面新建密钥，填写一个或者多个均可</v-card-subtitle>
        <v-card-subtitle>3.再子密钥管理中新建一个子密钥</v-card-subtitle>
        <v-card-subtitle>4.如果你有讯飞，请填写，这样才能正常发音</v-card-subtitle>
      </v-card>
      <v-card>
        <v-card-title>VRM/Live2d的Demo说明</v-card-title>
        <v-card-subtitle>聊天：你需要在你的账号中填写fastgpt的key等信息</v-card-subtitle>
        <v-card-subtitle>语音/发音：你需要填写讯飞的key信息</v-card-subtitle>
      </v-card>
      <v-card>
        <v-card-title>API接入:https://aigc.aerofsx.com:444</v-card-title>
      </v-card>
      <v-card-title>FastGPT</v-card-title>
      <v-card-subtitle>
        {{ FastGPT }}
      </v-card-subtitle>
      <v-card-title>QWen</v-card-title>
      <v-card-subtitle>
        {{ QWen }}
      </v-card-subtitle>
    </v-list>

  </v-container>
</template>

<script>
import Net from "@/plugins/Net";
import moment from "moment";

export default {
  data() {
    return {
      FastGPT: new Net("/v1/fastgpt/direct/text").apiEndpoint,
      QWen: new Net("/v1/qwen/direct/text").apiEndpoint,
      formData: {}, // 存储接口返回的数据
    };
  },
  computed: {
    formattedDate() {
      // 格式化日期
      return moment(this.formData.date).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  methods: {
    async fetchData() {
      // 发送获取个人信息的请求
      const ret = await new Net("/v1/user/info/get").PostFormData();
      if (ret.code === 0) {
        // 更新 formData
        this.formData = ret.data;
      } else {
        // 处理请求失败的情况
        console.error(ret.echo);
      }
    },
  },
  mounted() {
    // 在组件挂载时调用 fetchData 方法获取数据
    this.fetchData();
  },
};
</script>
