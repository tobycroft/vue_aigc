<template>
  <v-container>
    <v-card>
      <v-card-title>创建团队信息</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submitTeamInfo">
          <v-text-field v-model="name" label="团队名称"></v-text-field>
          <v-tab>
            <v-btn type="submit" color="primary">提交</v-btn>
            <v-btn @click="goBack" color="primary">返回</v-btn>
          </v-tab>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Net from "@/plugins/Net";

export default {
  data() {
    return {
      name: '', // 存储输入框中的团队名称
    };
  },
  methods: {
    async submitTeamInfo() {
      // 发送创建团队信息的请求
      const ret = await new Net("/v1/team/info/create").PostFormData(this.$data);
      if (ret.code === 0) {
        // 处理成功响应
        console.log("团队信息创建成功");
        this.goBack();
      } else {
        // 处理失败响应
        console.error(ret.echo);
      }
    },
    goBack() {
      this.$router.push("/v1/user/team");
    }
  },
};
</script>
