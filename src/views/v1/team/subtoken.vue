<template>
  <v-container>
    <v-card>
      <v-card-title>团队 Token 列表</v-card-title>
      <v-card-actions>
        <v-btn color="primary" @click="addToken">添加</v-btn>
      </v-card-actions>
      <v-card-text>
        <v-data-table :headers="headers" :items="tokenList" item-key="id">
          <template v-slot:item.actions="{ item }">
            <v-icon class="me-2" size="small" @click="editToken(item.id)">mdi-pencil</v-icon>
            <v-icon size="small" @click="deleteToken(item.id)">mdi-delete</v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
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
      headers: [
        {title: 'ID', key: 'id'},
        {title: 'Key', key: 'key'},
        {title: '剩余量', key: 'amount'},
        {title: '变动时间', key: 'change_date'},
        {title: '操作', key: 'actions', sortable: false}
      ]
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
        const response = await new Net("/v1/team/subtoken/delete").PostFormData({id: tokenId, team_id: this.team.team_id});
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
      this.$router.push({path: `/v1/team/subtoken/edit`, query: {id: tokenId, team_id: this.team.team_id}});
    },
    addToken() {
      // 添加团队 Token，将用户重定向到添加页面
      this.$router.push({path: `/v1/team/subtoken/add`, query: {team_id: this.team.team_id}});
    },
    initialize() {
      // 重置表格数据
      this.tokenList = [];
    }
  }
};
</script>
