<template>
  <v-container>
    <v-card>
      <v-card-title>添加团队 Token</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createToken">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select v-model="selectedCoinId" :items="coinList" label="选择GPT类型" item-text="name" item-value="id"></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.name" label="key名称"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.team_id" label="团队id"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.prefix" label="prefix标签"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.amount" label="可以使用的余额"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.from_id" label="上级id"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-btn type="submit" color="primary">添加</v-btn>
          <v-btn @click="goBack" color="primary">返回</v-btn>
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
      team: this.$route.query,
      coinList: [],
      selectedCoinId: null,
      formData: {
        name: '测试key名称',
        team_id: this.team.team_id || '',
        prefix: this.team.prefix || 'keyprefix',
        amount: '-1',
        from_id: '1'
      }
    };
  },
  methods: {
    async fetchCoinList() {
      try {
        const response = await new Net('/v1/coin/info/list').PostFormData();
        if (response.code === 0) {
          this.coinList = response.data.map(coin => ({id: coin.id, name: coin.name}));
        } else {
          console.error('Failed to fetch coin list:', response.echo);
        }
      } catch (error) {
        console.error('Failed to fetch coin list:', error);
      }
    },
    async createToken() {
      try {
        const payload = {
          name: this.formData.name,
          team_id: this.formData.team_id,
          coin_id: this.selectedCoinId,
          prefix: this.formData.prefix,
          amount: this.formData.amount,
          from_id: this.formData.from_id
        };
        const response = await new Net('/v1/team/subtoken/create').PostFormData(payload);
        if (response.code === 0) {
          // 添加成功，可以根据需求执行一些操作，比如跳转页面或者提示成功信息
          this.$router.push({path: `/v1/team/subtoken`, query: this.team});
        } else {
          console.error('Failed to create token:', response.echo);
        }
      } catch (error) {
        console.error('Failed to create token:', error);
      }
    },
    goBack() {
      // 返回到团队 Token 列表页面
      this.$router.push({path: `/v1/team/subtoken`, query: this.team});
    }
  },
  mounted() {
    this.fetchCoinList();
  }
}
</script>
