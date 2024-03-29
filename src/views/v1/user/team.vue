<template>
  <v-container>
    <v-card>
      <v-card-title>团队列表</v-card-title>
      <v-card-text>
        <v-btn @click="addTeam" color="primary">添加团队</v-btn>
        <v-list>
          <v-list-item v-for="team in teamList" :key="team.id">
            <v-list-item>
              <v-list-item-title>{{ team.team_info.name }}</v-list-item-title>
              <v-list-item-subtitle v-if="team.nickname">{{ team.nickname }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ team.role }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ formattedDate(team.date) }}</v-list-item-subtitle>
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Net from "@/plugins/Net";
import moment from "moment";

export default {
  data() {
    return {
      teamList: [], // 存储团队列表数据
    };
  },
  methods: {
    async fetchTeamList() {
      // 发送获取团队列表的请求
      const ret = await new Net("/v1/user/team/list").PostFormData();
      if (ret.code === 0) {
        // 更新 teamList
        this.teamList = ret.data;
      } else {
        // 处理请求失败的情况
        console.error(ret.echo);
      }
    },
    async addTeam() {
      this.$router.push('/v1/user/team/create');
    },
    formattedDate(date) {
      // 格式化日期
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  mounted() {
    // 在组件挂载时调用 fetchTeamList 方法获取团队列表数据
    this.fetchTeamList();
  },
};
</script>
