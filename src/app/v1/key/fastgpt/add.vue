<template>
  <v-container>
    <v-card>
      <v-card-title>添加 FastGPT 信息</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addInfo">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="formData.name" label="名称"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select v-model="formData.team_id" :items="teamList" label="选项"/>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.key" label="Key"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.base_url" label="Base URL"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.model" label="Model"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.detail" label="Detail"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-btn type="submit" color="primary" block class="mt-4">添加</v-btn>
          <v-btn @click="goBack" color="grey" block class="mt-4">返回</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Net from "@/plugins/Net.js";

export default {
  data() {
    return {
      formData: {
        name: '',
        team_id: null,
        key: '',
        base_url: '',
        model: '',
        detail: 0
      },
      teamList: [] // 存储团队列表数据
    };
  },
  methods: {
    async fetchTeamList() {
      try {
        const response = await new Net('/v1/user/team/list').PostFormData();
        if (response.code === 0) {
          this.teamList = response.data.map(coin => ({id: coin.team_info.id, title: coin.team_info.name}));
        } else {
          console.error('Failed to fetch team list:', response.echo);
        }
      } catch (error) {
        console.error('Failed to fetch team list:', error);
      }
    },
    async addInfo() {
      try {
        const payload = {
          name: this.formData.name,
          team_id: parseInt(this.formData.team_id),
          key: this.formData.key,
          base_url: this.formData.base_url,
          model: this.formData.model,
          detail: parseInt(this.formData.detail)
        };
        const response = await new Net('/v1/fastgpt/info/add').PostFormData(payload);
        if (response.code === 0) {
          // 添加成功，可以根据需求执行一些操作，比如跳转页面或者提示成功信息
          this.$router.push('/v1/fastgpt/info/list');
        } else {
          console.error('Failed to add FastGPT info:', response.echo);
        }
      } catch (error) {
        console.error('Failed to add FastGPT info:', error);
      }
    },
    goBack() {
      // 返回到 FastGPT 信息列表页面
      this.$router.push('/v1/key/fastgpt');
    }
  },
  async mounted() {
    this.fetchTeamList();
  }
}
</script>
