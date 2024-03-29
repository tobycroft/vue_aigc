<template>
  <Topheader></Topheader>
  <v-container>
    <v-banner-text>欢迎加入GobotQ平台，这里仅需要填写几个重要的参数，后续机器人在连入平台后将会自动启用</v-banner-text>
    <v-banner-text>请不要忘记绑定密码，如果忘记你将无法绑定这个机器人，一般情况下机器人将会默认绑定到你的名下</v-banner-text>
  </v-container>
  <v-container>
    <v-form v-model="valid" ref="form" @submit.prevent="submitForm" class="mt-6">
      <v-row>
        <v-col v-for="field in fields" :key="field.key" cols="12" md="6">
          <v-text-field
            hide-details="false"
            v-if="field.type !== 'password'"
            :label="field.label"
            :type="field.type"
            v-model="formData[field.key]"
            :rules="field.rules"
          ></v-text-field>
          <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            hide-details="false"
            v-if="field.type === 'password'"
            :label="field.label"
            :type="show1 ? 'text' : 'password'"
            v-model="formData[field.key]"
            :rules="field.rules"
            @click:append="show1 = !show1"
          ></v-text-field>
          <!-- 其他类型的表单字段可以根据需要添加 -->
        </v-col>
      </v-row>
      <v-btn type="submit" :disabled="!valid" block color="primary" class="mt-4">提交</v-btn>
      <v-btn block color="grey" class="mt-4" @click="back">返回</v-btn>
    </v-form>
  </v-container>

</template>

<script>
import Topheader from "@/components/center/header/topheader.vue";
import Net from "@/plugins/Net";
import Alert from "@/plugins/Alert";

export default {
  components: {Topheader},
  data() {
    return {
      valid: true,
      show1: false,
      formData: {
        secret: '',
        end_date: '',
        date: '',
        status: 0,
        id: null,
        uid: null,
        bot: null,
        password: '',
        owner: null
      },
      fields: [
        {key: 'secret', label: '绑定密钥，用于后续机器人上线后自动绑定', type: 'password', rules: []},
        {key: 'month', label: '你想使用本平台几个月？', type: 'tel', rules: []},
        {key: 'bot', label: '机器人QQ号，务必不要错避免无法上线', type: 'text', rules: []},
        {key: 'password', label: '设定一个修改机器人相关信息的密码', type: 'password', rules: []},
      ]
    };
  },
  methods: {
    updateFormData(key, value) {
    },
    async submitForm() {
      // 这里调用你自己的提交方法，并将 this.formData 传递给它
      console.log('提交表单', this.formData);
      // 示例：在这里可以调用接口提交数据
      var ret = await new Net("/v1/bot/request/add").PostFormData(this.formData)
      if (ret.isSuccess) {
        Alert.SetAlert(ret.echo)
        this.$router.go(-1)
      } else {
        Alert.SetAlert(ret.echo)
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // 在组件挂载时调用 fillForm 方法进行回填
  }
};
</script>

<style>
/* 可以根据需要添加样式 */
</style>
