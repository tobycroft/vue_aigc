<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="15"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <tr>
        <td>{{ props.item.self_id }}</td>
        <td>{{ props.item.user_id }}</td>
        <td>{{ props.item.nickname }}</td>
        <td>{{ props.item.card }}</td>
        <td>{{ props.item.role }}</td>
        <td>{{ formatTimestamp(props.item.join_time) }}</td>
        <td>{{ formatTimestamp(props.item.last_sent_time) }}</td>
        <td>{{ props.item.level }}</td>
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.group_id }}</td>
        <td>{{ props.item.title }}</td>
      </tr>
    </template>
    <template v-slot:item.modify="{ item }">
      <v-btn @click="modify(item)" icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <!--      <v-btn @click="reset(item)" icon>-->
      <!--        <v-icon>mdi-refresh</v-icon>-->
      <!--      </v-btn>-->
    </template>
  </v-data-table>

</template>

<script>
import Net from "@/plugins/Net";
import TokenModel from "@/model/TokenModel";

export default {
  mounted() {
    this.getGroupList()
  },
  data() {
    return {
      headers: [
        // {title: '机器人ID', value: 'self_id'},
        {title: '群ID', value: 'group_id'},
        {title: '群名称', value: 'group_info.group_name'},
        // {title: '用户ID', value: 'user_id'},
        // {title: '昵称', value: 'nickname'},
        {title: '群名片', value: 'card'},
        {title: '角色', value: 'role'},
        // {title: '加入时间', value: 'join_time'},
        // {title: '最后发送时间', value: 'last_sent_time'},
        // {title: '等级', value: 'level'},
        // {title: '记录ID', value: 'id'},
        // {title: '头衔', value: 'title'},
        {title: '操作', value: 'modify', sortable: false},
      ],
      items: [],
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      // 将时间戳格式化为可读的日期时间字符串
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    },
    async getGroupList() {
      var ret = await new Net("/v1/group/member/list").PostFormData({
        user_id: TokenModel.Api_find_uid(),
        role: JSON.stringify(["admin", "owner"])
      })
      if (ret.isSuccess) {
        const list = ret.data
        list.forEach(function (data) {
          switch (data["role"]) {
            case "admin":
              data["role"] = "管理员"
              break

            case "owner":
              data["role"] = '群主'
              break

            case "member":
              data["role"] = '群成员'
              break
          }
        })
        this.items = list
      }
    },
    modify(item) {
      this.$router.push({path: '/v1/group/edit', query: {group_id: item["group_id"], self_id: item["self_id"]}});
    },
    reset(item) {
      console.log(item)
    },
  }
};
</script>
