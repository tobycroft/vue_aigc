<template>
  <v-container>
    <v-card>
      <v-card-title>团队 Token 列表</v-card-title>
      <v-card-actions>
        <v-btn color="primary" @click="addToken">添加</v-btn>
      </v-card-actions>
      <v-card-text>
        <v-data-table :items="tokenList" item-key="id">
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.key }}</td>
            <td>{{ props.item.amount }}</td>
            <td>{{ formatDate(props.item.change_date) }}</td>
            <v-btn @click="editToken(props.item.id)" color="primary">修改</v-btn>
            <v-btn @click="deleteToken(props.item.id)" color="error">删除</v-btn>
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
      tokenList: [], // 存储团队 Token 列表
    };
  },
  mounted() {
    this.fetchTokenList();
  },
  methods: {
    async fetchTokenList() {
      try {
        const response = await new Net('/v1/team/subtoken/list').PostFormData(this.team);
        if (response.code === 0) {
          this.tokenList = response.data;
        } else {
          console.error('Failed to fetch token list:', response.echo);
        }
      } catch (error) {
        console.error('Failed to fetch token list:', error);
      }
    },
    async deleteToken(tokenId) {
      try {
        const response = await new Net("/v1/team/subtoken/delete").PostFormData({id: tokenId});
        if (response.code === 0) {
          this.tokenList = this.tokenList.filter(token => token.id !== tokenId);
        } else {
          console.error('Failed to delete token:', response.echo);
        }
      } catch (error) {
        console.error('Failed to delete token:', error);
      }
    },
    editToken(tokenId) {
      // 编辑团队 Token，将用户重定向到编辑页面，并将团队 Token 的 ID 作为查询参数传递
      this.$router.push({path: `/v1/team/subtoken/edit`, query: {...this.team, id: tokenId}});
    },
    addToken() {
      // 添加团队 Token，将用户重定向到添加页面
      this.$router.push({path: `/v1/team/subtoken/add`, query: this.team});
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
  },
};
</script>
