<template>
  <!-- 添加按钮 -->
  <v-container>
    <v-btn @click="addBotRequest" color="primary">添加</v-btn>
  </v-container>

  <!-- 机器人请求表格 -->
  <v-data-table
    :headers="headers"
    :items="botRequests"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-btn @click="deleteBotRequest(item)" color="red" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import Net from "@/plugins/Net";
import Alert from "@/plugins/Alert";

export default {
  data() {
    return {
      headers: [
        // {title: 'ID', value: 'id'},
        // {title: 'UID', value: 'uid'},
        {title: '机器人Q', value: 'bot'},
        {title: '密码', value: 'password'},
        {title: '服主QQ', value: 'owner'},
        {title: '绑定密钥', value: 'secret'},
        {title: '到期日期', value: 'end_date'},
        {title: '申请日', value: 'date'},
        {text: '操作', value: 'actions', sortable: false},
      ],
      botRequests: [] // 机器人请求数据
    };
  },
  methods: {
    // 添加机器人请求的方法，你需要根据实际情况实现
    addBotRequest() {
      // 在这里可以实现打开添加页面的逻辑，例如跳转到一个新的路由或者弹出对话框等
      console.log('添加机器人请求');
      this.$router.push("/v1/index/botrequest/edit")
    },
    // 获取机器人请求数据的方法，你需要根据实际情况实现
    async getBotRequests() {
      var ret = await new Net("/v1/bot/request/list").Get({})
      if (ret.isSuccess) {
        this.botRequests = ret.data
      }
    },
    async deleteBotRequest(item) {
      var ret = await new Net("/v1/bot/request/del").PostFormData(item)
      Alert.SetAlert(ret.echo)
      this.$router.go(0);
    },
  },
  mounted() {
    // 在组件挂载时调用获取机器人请求数据的方法
    this.getBotRequests();
  }
};
</script>

<style>
.elevation-1 {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
