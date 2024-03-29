<template>
  <v-container>
    <v-card>
      <v-card-title>个人信息</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card>
                    <v-card-text>
                      <strong>用户ID：</strong> {{ formData.uid }}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card>
                    <v-card-text>
                      <strong>集团头像：</strong> {{ formData.group_img || '暂无' }}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card>
                    <v-card-text>
                      <strong>集团名称：</strong> {{ formData.group_name || '暂无' }}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-card>
                    <v-card-text>
                      <strong>加入时间：</strong> {{ formattedDate }}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-btn variant="tonal" class="flex-grow-1" size="x-large" @click="logout" color="primary" large>退出</v-btn>
              </v-row>

            </v-container>
          </v-col>
        </v-row>

      </v-card-text>

    </v-card>

  </v-container>
</template>

<script>
import Net from "@/plugins/Net";
import moment from "moment";
import TokenModel from "@/model/TokenModel";

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
      const ret = await new Net("/v1/user/info/get").Get();
      if (ret.code === 0) {
        // 更新 formData
        this.formData = ret.data;
      } else {
        // 处理请求失败的情况
        console.error(ret.echo);
      }
    },
    logout() {
      // 处理退出逻辑
      TokenModel.Api_clear_uidAndToken();
      this.$router.push('/v1/login');
    },
  },
  mounted() {
    // 在组件挂载时调用 fetchData 方法获取数据
    this.fetchData();
  },
};
</script>
