<template>
  <v-container>
    <v-card>
      <v-card-title>团队 Token 列表</v-card-title>
      <v-card-actions>
        <v-btn color="primary" @click="add_token">添加</v-btn>
      </v-card-actions>
      <v-card-text>
        <v-data-table
            :items="dataList"
            item-key="id"
        >
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.key }}</td>
            <td>{{ props.item.amount }}</td>
            <td>{{ formatDate(props.item.date) }}</td>
            <td>{{ formatDate(props.item.change_date) }}</td>
            <td>
              <v-btn @click="editToken(props.item.id)" color="primary">修改</v-btn>
              <v-btn @click="deleteToken(props.item.id)" color="error">删除</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Net from "@/plugins/Net"; // 假设Net插件已经定义并正确引入

export default {
  data() {
    return {
      team: this.$route.query,
      dataList: [], // 获取团队ID
    }
  },
  mounted() {
    this.fetchTokenList()
  },
  methods: {
    async fetchTokenList() {
      const ret = await new Net('/v1/team/subtoken/list').PostFormData(this.team);
      if (ret.code === 0) {
        this.dataList = ret.data;
      } else {
        console.error('Failed to fetch token list:', ret.echo);
      }
    },
    async deleteToken(tokenId) {
      try {
        const response = await new Net("/v1/user/team/delete").PostFormData(this.team);
        if (response.code === 0) {
          this.tokenList = this.tokenList.filter(token => token.id !== tokenId);
        } else {
          console.error('Failed to delete token:', response.echo);
        }
      } catch (error) {
        console.error('Failed to delete token:', error);
      }
    },
    editToken() {
      // 跳转到编辑页面
      this.$router.push({path: '/v1/team/subtoken/edit', query: this.team});
    },
    add_token() {
      // 跳转到编辑页面
      this.$router.push({path: `/v1/team/subtoken/add`, query: this.team});
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    }
  }
}
</script>
