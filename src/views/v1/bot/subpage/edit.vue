<template>
  <v-container>
    <v-form v-model="valid" ref="form" @submit.prevent="submitForm">
      <v-row>
        <v-col v-for="field in fields" :key="field.key" cols="12" md="6">
          <v-text-field
            hide-details="false"
            v-if="field.type === 'text'  || field.type === 'ip'"
            :label="field.label"
            :type="field.type"
            v-model="formData[field.key]"
            :rules="field.rules"
          ></v-text-field>
          <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            hide-details="false"
            v-if="field.type === 'password' "
            :label="field.label"
            :type="show1 ? 'text' : 'password'"
            v-model="formData[field.key]"
            :rules="field.rules"
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-select
            v-else-if="field.type === 'select'"
            :label="field.label"
            :items="field.items"
            v-model="formData[field.key]"
          ></v-select>
          <v-switch
            inset
            v-else-if="field.type === 'switch'"
            :label="field.label"
            v-model="formData[field.key]"
          ></v-switch>

          <!-- 其他类型的表单字段可以根据需要添加 -->

        </v-col>
      </v-row>

      <v-btn type="submit" :disabled="!valid" block color="primary" class="mt-4">提交</v-btn>
      <v-btn block color="grey" class="mt-4" @click="back">返回</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import Net from "@/plugins/Net";
import Alert from "@/plugins/Alert";

export default {
  data() {
    return {
      valid: true,
      show1:false,
      formData: {
        img: '',
        password: '',
        allow_ip: '',
        cname: '',
        self_id: null,
        type: 'public', // 默认值 'public'
        owner: null,
        secret: '',
        active: false, // 默认值 1 (开)
        date: '',
        end_date: '',
        id: null
      },
      fields: [
        // {key: 'img', label: '头像', type: 'text', rules: []},
        {key: 'password', label: '密码', type: 'password', rules: []},
        {key: 'secret', label: '密钥', type: 'password', rules: []},
        {key: 'allow_ip', label: '允许的IP', type: 'ip', rules: []},
        // {key: 'cname', label: '名称', type: 'text', rules: []},
        // {key: 'self_id', label: '自身ID', type: 'text', rules: []},
        {key: 'type', label: '类型', type: 'select', items: ['public', 'private', 'share'], rules: []},
        {key: 'owner', label: '所有者', type: 'text', rules: []},
        {key: 'active', label: '激活状态', type: 'switch', rules: []},
        // { key: 'date', label: '日期', type: 'text', rules: [] },
        // { key: 'end_date', label: '结束日期', type: 'text', rules: [] },
        // { key: 'id', label: 'ID', type: 'text', rules: [] }
      ]
    };
  },
  methods: {
    updateFormData(key, value) {
    },
    async submitForm() {
      // 这里调用你自己的提交方法，并将 this.formData 传递给它
      var ret = await new Net("/v1/bot/info/edit").PostFormData(this.formData)
      if (ret.isSuccess) {
        Alert.SetAlert(ret.echo)
        this.$router.go(-1)
      } else {
        Alert.SetAlert(ret.echo)
      }
    },
    back() {
      this.$router.go(-1)
    },
    async fillForm() {
      // 直接将提供的 JSON 数据回填到表单中
      var ret = await new Net("/v1/bot/info/get").PostFormData({
        self_id: this.$route.query.self_id
      })
      if (ret.isSuccess) {
        this.formData = ret.data
        this.formData["active"] = Boolean(ret.data["active"])
      }
    }
  },
  mounted() {
    // 在组件挂载时调用 fillForm 方法进行回填
    this.fillForm();
  },
  props: {
    jsonData: Object // 用于接收外部传入的 JSON 数据
  }
};
</script>
