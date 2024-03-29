<template>
  <Topheader></Topheader>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="24" md="6">
          <v-img :src="datalist.img" alt="Image"></v-img>
        </v-col>
        <v-col cols="24" md="6">
          <v-card>
            <v-card-title>{{ datalist.cname }}</v-card-title>
            <v-card-subtitle>机器人类型: {{ datalist.type }}</v-card-subtitle>
            <v-card-subtitle>所有者: {{ datalist.owner }}</v-card-subtitle>
            <v-card-subtitle>过期日期: {{ datalist.end_date }}</v-card-subtitle>
            <v-card-subtitle>启用状态: {{ datalist.active ? "是" : "否" }}</v-card-subtitle>
            <v-card-subtitle>添加日期: {{ datalist.date }}</v-card-subtitle>
            <v-card-subtitle>机器人QQ: {{ datalist.self_id }}</v-card-subtitle>
            <v-card-subtitle>密钥: {{ datalist.secret }}</v-card-subtitle>
            <v-card-subtitle>密码: {{ datalist.password }}</v-card-subtitle>
            <v-card-subtitle>允许IP: {{ datalist.allow_ip }}</v-card-subtitle>
            <!-- 其他字段根据需要添加 -->
          </v-card>
          <v-btn @click="goBack" color="primary" block class="mt-4">返回</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Net from "@/plugins/Net";
import moment from "moment/moment";
import Qqimagedealer from "@/plugins/qqimagedealer";
import Topheader from "@/components/center/header/topheader.vue";

export default {
  components: {Topheader},
  mounted() {
    this.getdata2()
  },
  data() {
    return {
      datalist: {},
    };
  },
  methods: {
    goBack() {
      // 返回上一页的逻辑
      this.$router.go(-1);
    },
    async getdata2() {
      var ret = await new Net("/v1/bot/info/get").PostFormData({
        self_id: this.$route.query.self_id
      })
      if (ret.isSuccess) {
        const data = ret.data
        // data["img"] = Qqimagedealer.GetPath(data["img"])
        data["active"] = data["active"] === 1 ? "是" : "否"
        data["end_date"] = moment(data["end_date"]).format("Y-M-D HH:mm:ss")
        data["date"] = moment(data["date"]).format("Y-M-D HH:mm:ss")
        data["comb"] = data["cname"] + "\n" + data["self_id"]
        this.datalist = data
      }
    },
  }
};
</script>

<style scoped>
.v-card-title {
  font-size: 2rem;
  line-height: unset;
}

.v-card-subtitle {
  font-size: 1.2rem; /* 设置特定组件的字体大小 */
  line-height: unset;
}
</style>
