<template>
  <v-container>
    <v-card-title>编辑团队信息</v-card-title>
    <v-form @submit.prevent="updateTeamInfo">
      <v-text-field v-model="name" label="团队名称"></v-text-field>
      <v-text-field v-model="content" label="团队简介"></v-text-field>
      <v-text-field v-model="prefix" label="key标头"></v-text-field>
      <!-- 如果还有其他要编辑的字段，可以在这里添加 -->
      <div class="d-flex flex-column">
        <v-btn size="large" type="submit" color="primary" class="mt-4">保存</v-btn>
        <v-btn size="large" @click="goBack" color="primary" class="mt-4">返回</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import Net from "@/plugins/Net";

export default {
  data() {
    return {
      name: '', // 存储输入框中的团队名称
      content: '', // 存储输入框中的团队名称
      prefix: '', // 存储输入框中的团队名称
      team: this.$route.query // 获取团队ID
    };
  },
  methods: {
    async fetchTeamInfo() {
      // 获取团队信息
      const ret = await new Net(`/v1/user/team/get`).PostFormData(this.team);
      if (ret.code === 0) {
        // 填充团队信息到表单中
        this.name = ret.data.team_info.name;
        this.content = ret.data.team_info.content;
        this.prefix = ret.data.team_info.prefix;
        // 如果还有其他字段，也可以在这里填充
      } else {
        console.error(ret.echo);
      }
    },
    async updateTeamInfo() {
      // 构造要发送的数据
      const payload = {
        id: this.team.team_id,
        name: this.name,
        img: "",
        content: this.content,
        prefix: this.prefix,
      };

      // 发送更新团队信息的请求
      const ret = await new Net("/v1/team/info/update").PostFormData(payload);
      if (ret.code === 0) {
        // 更新成功后的操作，例如跳转回团队列表页面
        this.goBack();
      } else {
        // 处理更新失败的情况
        console.error(ret.echo);
      }
    },
    goBack() {
      // 返回到团队列表页面
      this.$router.push("/v1/user/team");
    }
  },
  mounted() {
    // 在页面挂载时获取团队信息
    this.fetchTeamInfo();
  }
};
</script>
