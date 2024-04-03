<template>
  <v-container>
    <v-card>
      <v-card-title>更新 iflytek 信息</v-card-title>
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
                <v-text-field v-model="formData.rid" label="rid"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.model" label="Model"></v-text-field>
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
      formData: {},
      iflytekId: null // 用于存储 iflytek 信息的 ID
    };
  },
  methods: {
    async fetchInfo() {
      try {
        // 根据 iflytekId 获取 iflytek 信息
        const response = await new Net(`/v1/iflytek/info/get`).PostFormData({'id': this.iflytekId});
        if (response.code === 0) {
          // 填充 iflytek 信息到表单中
          this.formData = response.data;
        } else {
          console.error('Failed to fetch iflytek info:', response.echo);
        }
      } catch (error) {
        console.error('Failed to fetch iflytek info:', error);
      }
    },
    async updateInfo() {
      try {
        const payload = this.formData;
        const response = await new Net('/v1/iflytek/info/update').PostFormData(payload);
        if (response.code === 0) {
          // 更新成功，可以根据需求执行一些操作，比如跳转页面或者提示成功信息
          this.goBack();
        } else {
          console.error('Failed to update iflytek info:', response.echo);
        }
      } catch (error) {
        console.error('Failed to update iflytek info:', error);
      }
    },
    goBack() {
      // 返回到 iflytek 信息列表页面
      this.$router.push('/v1/key?tab=iflytek');
    }
  },
  mounted() {
    // 在组件挂载时获取 iflytek 信息
    this.iflytekId = parseInt(this.$route.query.id);
    if (!isNaN(this.iflytekId)) {
      this.fetchInfo();
    } else {
      console.error('Invalid iflytek ID:', this.$route.query.id);
    }
  }
}
</script>
