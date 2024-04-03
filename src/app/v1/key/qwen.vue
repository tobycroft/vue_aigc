<template>
  <v-card
      class="mx-auto"
  >
    <v-card-title>
      FastGPT 信息列表
      <v-spacer></v-spacer>
      <v-btn
          color="primary"
          @click="addInfo"
      >
        新增信息
      </v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <v-virtual-scroll
        :items="infoList"
        item-height="48"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>key：{{ item.key }}</v-list-item-subtitle>
          <v-list-item-subtitle>rid：{{ item.rid }}</v-list-item-subtitle>
          <v-list-item-subtitle>model：{{ item.model }}</v-list-item-subtitle>
          <template v-slot:prepend>
            <v-icon class="bg-primary">mdi-robot</v-icon>
          </template>

          <template v-slot:append>
            <v-btn
                icon
                color="primary"
                @click="editInfo(item)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
                icon
                color="error"
                @click="deleteInfo(item)"
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
      infoList: [], // 存储信息列表数据
    };
  },
  methods: {
    async fetchInfoList() {
      // 发送获取信息列表的请求
      const ret = await new Net("/v1/qwen/info/list").PostFormData();
      if (ret.code === 0) {
        // 更新 infoList
        this.infoList = ret.data;
      } else {
        // 处理请求失败的情况
        console.error(ret.echo);
      }
    },
    async addInfo() {
      this.$router.push('/v1/key/qwen/add');
    },
    async deleteInfo(info) {
      // 发送删除信息的请求
      const ret = await new Net("/v1/qwen/info/delete").PostFormData({id: info.id});
      if (ret.code === 0) {
        // 删除成功，重新获取信息列表数据
        this.fetchInfoList();
      } else {
        // 处理删除失败的情况
        console.error(ret.echo);
      }
    },
    async editInfo(info) {
      // 根据信息跳转到编辑页面
      this.$router.push({path: "/v1/key/qwen/edit", query: info});
    },
  },
  mounted() {
    // 在组件挂载时调用 fetchInfoList 方法获取信息列表数据
    this.fetchInfoList();
  },
};
</script>
