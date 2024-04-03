<template>
  <v-container>
    <v-card>
      <v-card-title>更新 qwen 信息</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="updateInfo">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="formData.name" label="名称"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.team_id" label="团队 ID"></v-text-field>
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
          <v-btn type="submit" color="primary" block class="mt-4">更新</v-btn>
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
      qwenId: null // 用于存储 qwen 信息的 ID
    };
  },
  methods: {
    async fetchInfo() {
      try {
        // 根据 qwenId 获取 qwen 信息
        const response = await new Net(`/v1/qwen/info/get`).PostFormData({'id': this.qwenId});
        if (response.code === 0) {
          // 填充 qwen 信息到表单中
          const data = response.data;
          this.formData.name = data.name;
          this.formData.team_id = data.team_id;
          this.formData.key = data.key;
          this.formData.base_url = data.base_url;
          this.formData.model = data.model;
          this.formData.detail = data.detail;
        } else {
          console.error('Failed to fetch qwen info:', response.echo);
        }
      } catch (error) {
        console.error('Failed to fetch qwen info:', error);
      }
    },
    async updateInfo() {
      try {
        const payload = {
          id: this.qwenId,
          name: this.formData.name,
          team_id: parseInt(this.formData.team_id),
          key: this.formData.key,
          base_url: this.formData.base_url,
          model: this.formData.model,
          detail: parseInt(this.formData.detail)
        };
        const response = await new Net('/v1/qwen/info/update').PostFormData(payload);
        if (response.code === 0) {
          // 更新成功，可以根据需求执行一些操作，比如跳转页面或者提示成功信息
          this.$router.push('/v1/qwen/info/list');
        } else {
          console.error('Failed to update qwen info:', response.echo);
        }
      } catch (error) {
        console.error('Failed to update qwen info:', error);
      }
    },
    goBack() {
      // 返回到 qwen 信息列表页面
      this.$router.push('/v1/key?tab=qwen');
    }
  },
  mounted() {
    // 在组件挂载时获取 qwen 信息
    this.qwenId = parseInt(this.$route.query.id);
    if (!isNaN(this.qwenId)) {
      this.fetchInfo();
    } else {
      console.error('Invalid qwen ID:', this.$route.query.id);
    }
  }
}
</script>
