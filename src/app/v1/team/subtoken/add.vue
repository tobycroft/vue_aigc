<template>
  <v-container>
    <v-card>
      <v-card-title>添加团队 Token</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createToken">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select v-model="formData.team_id" :items="teamList" label="团队id" item-text="title" item-value="id"></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.name" label="key名称,测试key名称，随便起一个"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.prefix" label="密钥的prefix"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.amount" label="可以使用的余额,如果是-1就是无线，大于0就按正常的扣"></v-text-field>
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
import Net from "@/plugins/Net";

export default {
  data() {
    return {
      teamList: [],
      team: this.$route.query,
      coinList: [],
      selectedCoinId: null,
      formData: {
        name: 'key',
        team_id: '',
        prefix: 'aigc',
        amount: '-1',
        from_id: '1'
      }
    };
  },
  methods: {
    async fetchTeamInfo() {
      // 获取团队信息
      const response = await new Net(`/v1/user/team/list`).PostFormData();
      if (response.code === 0) {
        // 填充团队信息到表单中
        this.teamList = response.data.map(data => ({id: data.team_info.id, title: data.team_info.name}));
        // 如果还有其他字段，也可以在这里填充
      } else {
        console.error(response.echo);
      }
    },
    async fetchCoinList() {
      try {
        const response = await new Net('/v1/coin/info/list').PostFormData();
        if (response.code === 0) {
          this.coinList = response.data.map(coin => ({id: coin.id, title: coin.name}));
        } else {
          console.error('Failed to fetch coin list:', response.echo);
        }
      } catch (error) {
        console.error('Failed to fetch coin list:', error);
      }
    },
    async createToken() {
      try {
        const payload = this.formData;
        const response = await new Net('/v1/team/subtoken/create').PostFormData(payload);
        if (response.code === 0) {
          // 添加成功，可以根据需求执行一些操作，比如跳转页面或者提示成功信息
          this.goBack()
        } else {
          console.error('Failed to create token:', response.echo);
        }
      } catch (error) {
        console.error('Failed to create token:', error);
      }
    },
    goBack() {
      // 返回到团队 Token 列表页面
      this.$router.push({path: "/v1/team", query: {tab: "subtoken"}});
    }
  },
  mounted() {
    this.fetchTeamInfo()
    this.fetchCoinList();
  }
}
</script>
