<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <!-- 主页面内容区域 -->
    <v-main>
      <!-- 根据路由显示不同的页面 -->
      <router-view>
      </router-view>
      <v-data-table
        :headers="headers"
        :items="openList"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:top>
<!--          <v-toolbar flat>-->
<!--            <v-toolbar-title>开放机器人</v-toolbar-title>-->
<!--          </v-toolbar>-->
        </template>
        <template v-slot:header="{ props }">
          <thead>
          <tr>
            <th v-for="header in props.headers" :key="header.title" :class="{ 'text-left': header.value !== 'action' }">
              {{ header.title }}
            </th>
            <th class="text-right">操作</th>
          </tr>
          </thead>
        </template>
        <template v-slot:item.img="{ item }">
          <v-img :src="item.img" alt="Image" width="50" height="50"></v-img>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn @click="unbind(item)" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn @click="viewDetails(item)" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn @click="online(item)" icon>
            <v-icon>mdi-arrow-up-bold</v-icon>
          </v-btn>
          <v-btn @click="offline(item)" icon>
            <v-icon>mdi-arrow-down-bold</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-main>
  </v-app>
</template>

<script>

import Topheader from "@/components/center/header/topheader.vue";
import Net from "@/plugins/Net";
import moment from "moment/moment";

const table_headers = [
  // {title: '合并', value: 'comb'},
  {title: '昵称', value: 'cname'},
  {title: '机器人号码', value: 'self_id'},
  // {title: '图片', value: 'img'},
  // {title: '类型', value: 'type'},
  {title: '所有者', value: 'owner'},
  {title: '结束时间', value: 'end_date'},
  {title: '激活状态', value: 'active'},
]

export default {
  components: {Topheader},
  data: () => ({
    headers: table_headers,
    openList: [],
  }),
  mounted() {
    this.getOpenList()
  },
  methods: {
    async getOpenList() {
      var ret = await new Net("/v1/bot/info/list").PostFormData({
        type: "share"
      })
      if (ret.isSuccess) {
        const list = ret.data
        list.forEach(function (data) {
          data["active"] = data["active"] === 1 ? "是" : "否"
          data["end_date"] = moment(data["end_date"]).format("Y-M-D HH:mm:ss")
          data["date"] = moment(data["date"]).format("Y-M-D HH:mm:ss")
          data["comb"] = data["cname"] + "\n" + data["self_id"]
        })
        this.openList = list
      }
    },
  },

};
</script>
