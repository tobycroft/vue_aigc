<template>
  <v-container>
    <v-card>
      <v-card-title>
        添加团队 Token
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="updateToken">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select v-model="formData.team_id" :items="teamList" label="团队id" item-text="title" item-value="id"></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.name" label="key名称"></v-text-field>
              </v-col>
              <!--              <v-col cols="12">-->
              <!--                <v-text-field v-model="formData.prefix" label="prefix标签"></v-text-field>-->
              <!--              </v-col>-->
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
      coinList: [],
      selectedCoinId: null,
      formData: {
        id: null,
        name: '测试key名称，随便起一个',
        team_id: '',
        prefix: '',
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
        this.teamList = response.GetVutifySelectMap();
        // 如果还有其他字段，也可以在这里填充
      } else {
        console.error(response.echo);
      }
    },
    async fetchInfo() {
      try {
        // 根据 team_id 获取 iflytek 信息
        const response = await new Net(`/v1/team/subtoken/get`).PostFormData(this.formData);
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
    async fetchCoinList() {
      try {
        const response = await new Net('/v1/coin/info/list').PostFormData();
        if (response.code === 0) {
          this.coinList = response.GetVutifySelectMap();
        } else {
          console.error('Failed to fetch coin list:', response.echo);
        }
      } catch (error) {
        console.error('Failed to fetch coin list:', error);
      }
    },
    async updateToken() {
      try {
        const payload = {
          name: this.formData.name,
          id: this.formData.id,
          team_id: this.formData.team_id,
          coin_id: this.selectedCoinId,
          prefix: this.formData.prefix,
          amount: this.formData.amount,
          from_id: this.formData.from_id
        };
        const response = await new Net('/v1/team/subtoken/update').PostFormData(payload);
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
      this.$router.push({path: "/v1/team?tab=subtoken"});
    }
  },
  mounted() {
    this.formData.id = parseInt(this.$route.query.id);
    if (!isNaN(this.formData.id)) {
    } else {
      console.error('Invalid id ID:', this.$route.query.id);
    }
    this.formData.team_id = parseInt(this.$route.query.team_id);
    if (!isNaN(this.formData.team_id)) {
    } else {
      console.error('Invalid team_id ID:', this.$route.query.team_id);
    }
    this.fetchTeamInfo()
    this.fetchInfo();
  }
}
</script>
