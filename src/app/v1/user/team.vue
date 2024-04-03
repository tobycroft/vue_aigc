<template>
  <v-container>
    <v-card>
      <v-card-title>团队列表</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="team in teamList" :key="team.id">
            <v-row align="center" justify="space-around">
              <v-col >
                <v-list-item-title>{{ team.team_info.name }}</v-list-item-title>
                <v-list-item-subtitle v-if="team.nickname">{{ team.nickname }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ team.role }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ formattedDate(team.date) }}</v-list-item-subtitle>
              </v-col>
              <v-col >
                <v-btn-group>
                  <v-btn @click="subtoken(team)" color="green">团队token管理</v-btn>
                  <v-btn @click="editTeam(team)" color="primary">修改团队信息</v-btn>
                  <v-btn v-if="team.role === 'admin' || team.role === 'owner'" @click="deleteTeam(team)" color="error">解散团队</v-btn>
                  <v-btn v-else @click="deleteTeam(team)" color="error">退出团队</v-btn>
                </v-btn-group>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
import Net from "@/plugins/Net";
import moment from "moment";
import top_header from "@/components/topheader.vue";

export default {
  components: {top_header},
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
    async deleteTeam(team) {
      // 发送删除团队的请求
      const ret = await new Net("/v1/user/team/delete").PostFormData(team);
      if (ret.code === 0) {
        // 删除成功，重新获取团队列表数据
        this.fetchTeamList();
      } else {
        // 处理删除失败的情况
        console.error(ret.echo);
      }
    },
    async editTeam(team) {
      // 根据团队信息跳转到编辑页面
      this.$router.push({path: '/v1/user/team/edit', query: team});
    },
    async subtoken(team) {
      // 根据团队信息跳转到编辑页面
      this.$router.push({path: `/v1/team/subtoken`, query: team});
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
