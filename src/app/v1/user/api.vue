<template>
  <v-container>
    <v-list>
      <v-list-item-title>
        API接入
      </v-list-item-title>
    </v-list>

  </v-container>
</template>

<script>
import Net from "@/plugins/Net";
import moment from "moment";

export default {
  data() {
    return {
      formData: {}, // 存储接口返回的数据
    };
  },
  computed: {
    formattedDate() {
      // 格式化日期
      return moment(this.formData.date).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  methods: {
    async fetchData() {
      // 发送获取个人信息的请求
      const ret = await new Net("/v1/user/info/get").PostFormData();
      if (ret.code === 0) {
        // 更新 formData
        this.formData = ret.data;
      } else {
        // 处理请求失败的情况
        console.error(ret.echo);
      }
    },
  },
  mounted() {
    // 在组件挂载时调用 fetchData 方法获取数据
    this.fetchData();
  },
};
</script>
