<template>
  <v-container>
    <v-card>
      <v-card-title>添加 iflytek 信息</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addInfo">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="formData.name" label="名称"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select v-model="formData.team_id" :items="teamList" label="选项" item-text="title" item-value="id"/>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.host" label="host"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.api_secret" label="api_secret"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.app_id" label="app_id"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.api_key" label="api_key"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.vcn" label="vcn"></v-text-field>
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
          this.teamList = response.data.map(data => ({id: data.team_info.id, title: data.team_info.name}));
        } else {
          console.error('Failed to fetch team list:', response.echo);
        }
      } catch (error) {
        console.error('Failed to fetch team list:', error);
      }
    },
    async addInfo() {
      try {
        const payload = this.formData;
        const response = await new Net('/v1/iflytek/info/add').PostFormData(payload);
        if (response.code === 0) {
          // 添加成功，可以根据需求执行一些操作，比如跳转页面或者提示成功信息
          this.goBack();
        } else {
          console.error('Failed to add iflytek info:', response.echo);
        }
      } catch (error) {
        console.error('Failed to add iflytek info:', error);
      }
    },
    goBack() {
      // 返回到 iflytek 信息列表页面
      this.$router.push('/v1/key?tab=iflytek');
    }
  },
  async mounted() {
    this.fetchTeamList();
  }
}
</script>
