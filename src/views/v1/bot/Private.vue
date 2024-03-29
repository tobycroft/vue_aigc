<template>
  <v-app>
    <v-data-table v-if="TokenModel.Api_is_login()"
                  :headers="headers"
                  :items="ownList"
                  :items-per-page="5"
                  class="elevation-1"
    >
      <template v-slot:top>
        <!--        <v-toolbar flat>-->
        <!--          <v-toolbar-title>绑定在你名下的机器人</v-toolbar-title>-->
        <!--        </v-toolbar>-->
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
          <v-icon>mdi-square-edit-outline</v-icon>
        </v-btn>
        <v-btn @click="bot_setting(item)" icon>
          <v-icon>mdi-cog</v-icon>
        </v-btn>
        <v-btn @click="viewDetails(item)" icon>
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-btn @click="online(item)" icon>
          <v-icon>mdi-power-plug-outline</v-icon>
        </v-btn>
        <v-btn @click="offline(item)" icon>
          <v-icon>mdi-power-plug-off-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>


  </v-app>


</template>


<script>
import Topheader from "@/components/center/header/topheader.vue";
import Net from "@/plugins/Net";
import moment from "moment";
import TokenModel from "@/model/TokenModel";
import Alert from "@/plugins/Alert";

const table_headers = [
  // {title: '合并', value: 'comb'},
  {title: '昵称', value: 'cname'},
  // {title: '图片', value: 'img'},
  // {title: '类型', value: 'type'},
  // {title: '所有者', value: 'owner'},
  // {title: '结束时间', value: 'end_date'},
  {title: '激活状态', value: 'active'},
  {title: '操作', value: 'action', sortable: false},
]

export default {
  computed: {
    TokenModel() {
      return TokenModel
    }
  },
  mounted() {
    this.getOwnList()
  },
  components: {Topheader},
  data: () => ({
    headers: table_headers,
    ownList: [],
    unbindList: [],
  }),
  methods: {
    showColumn(header) {
      // 根据条件判断是否在手机端显示该列
      return header.mobile || this.$vuetify.breakpoint.mdAndUp;
    },
    async getOwnList() {
      var ret = await new Net("/v1/bot/info/owned").Get()
      if (ret.isSuccess) {
        const list = ret.data
        list.forEach(function (data) {
          data["active"] = data["active"] === 1 ? "是" : "否"
          data["end_date"] = moment(data["end_date"]).format("Y-M-D HH:mm:ss")
          data["date"] = moment(data["date"]).format("Y-M-D HH:mm:ss")
          data["comb"] = data["cname"] + "\n" + data["self_id"]
        })
        this.ownList = list
      }
    },
    unbind(item) {
      // 实现解绑逻辑
      this.$router.push({path: '/v1/bot/edit', query: {self_id: item["self_id"]}});
    },
    bot_setting(item) {
      // 实现解绑逻辑
      this.$router.push({path: '/v1/bot/setting', query: {self_id: item["self_id"]}});
    },
    viewDetails(item) {
      // 实现查看详情逻辑
      this.$router.push({path: '/v1/bot/detail', query: {self_id: item["self_id"]}});
    },
    async online(item) {
      // 实现上线逻辑
      console.log("上线", item);
      var ret = await new Net("/v1/bot/info/active").PostFormData({
        self_id: item.self_id,
        active: 1
      })
      Alert.SetAlert(ret.echo)
    },
    async offline(item) {
      // 实现下线逻辑
      console.log("下线", item);
      var ret = await new Net("/v1/bot/info/active").PostFormData({
        self_id: item.self_id,
        active: 0
      })
      Alert.SetAlert(ret.echo)
    },
  },
}
</script>

<style>
.elevation-1 {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
