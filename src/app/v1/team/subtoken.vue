<template>
  <v-card
      class="mx-auto"
  >
    <v-card-title>
      团队成员列表
      <v-spacer></v-spacer>
      <v-btn
          color="primary"
          @click="addTeam"
      >
        新增团队成员
      </v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <v-virtual-scroll
        :items="teamList"
        item-height="48"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-title>团队名称：{{ item.team_info.name }}</v-list-item-title>
          <v-list-item-subtitle>团队权限：{{ item.role }}</v-list-item-subtitle>
          <v-list-item-subtitle>团队备注：{{ item.team_info.content }}</v-list-item-subtitle>
          <template v-slot:prepend>
            <v-icon class="bg-primary">mdi-group</v-icon>
          </template>

          <template v-slot:append>
            <v-btn class="ma-2"
                   icon
                   color="primary"
                   @click="editTeam(item)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="ma-2"
                   icon
                   color="error"
                   @click="deleteTeam(item)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
import Net from "@/plugins/Net.js";
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
      const ret = await new Net("/v1/team/subtoken/list").PostFormData();
      if (ret.code === 0) {
        // 更新 teamList
        this.teamList = ret.data;
      } else {
        // 处理请求失败的情况
        console.error(ret.echo);
      }
    },
    async addTeam() {
      this.$router.push('/v1/team/subtoken/create');
    },
    async deleteTeam(team) {
      // 发送删除团队的请求
      const ret = await new Net("/v1/team/subtoken/delete").PostFormData(team);
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
      this.$router.push({path: "/v1/team/subtoken/edit", query: team});
    },
  },
  mounted() {
    // 在组件挂载时调用 fetchTeamList 方法获取团队列表数据
    this.fetchTeamList();
  },
};
</script>
