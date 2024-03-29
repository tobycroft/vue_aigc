<template>
  <!-- 显示 QQ 号码 -->
  <v-row justify="center">
    <v-col cols="12">
      <v-card>
        <v-card-title>个人信息</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-card-text>
                  <strong>QQ号码：</strong> {{ formData.qq }}
                </v-card-text>
                <v-card-text>
                  <strong>加入时间：</strong> {{ formData.date }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <!-- 退出按钮 -->
          <v-btn @click="logout" color="primary">退出</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>

import Net from "@/plugins/Net";
import moment from "moment";
import TokenModel from "@/model/TokenModel";

export default {
  data() {
    return {
      formData: {}, // 替换为实际的 QQ 号码
    };
  },
  methods: {
    // 退出按钮点击事件
    logout() {
      // 处理退出逻辑，可以调用接口等操作
      TokenModel.Api_clear_uidAndToken()
      this.$router.push('/user/login')
    },
    async fetchData() {
      // 发送获取个人信息的请求
      const ret = await new Net("/v1/user/info/get").Get();
      if (ret.isSuccess) {
        // 将获取到的 QQ 号码更新到数据中
        const data = ret.data
        data['date'] = moment(data['date']).format('YYYY-MM-DD HH:mm:ss');
        this.formData = ret.data
      } else {
        // 处理请求失败的情况，可以显示错误信息等
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
