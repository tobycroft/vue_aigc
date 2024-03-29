<template>
  <v-container>
    <v-form v-model="valid" ref="form" @submit.prevent="submitForm">
      <v-row>
        <v-col v-for="field in fields" :key="field.key" cols="12">
          <v-text-field
            v-if="field.type === 'text' || field.type === 'date'"
            hide-details="auto"
            :label="field.label"
            v-model="formData[field.key]"
            readonly
          ></v-text-field>


          <v-col v-else-if="field.type === 'radio'" :key="field.key" cols="12" elevation="10">
            <v-toolbar flat color="deep-purple-accent-4" dark>
              <v-toolbar-title>{{ field.label }}</v-toolbar-title>
            </v-toolbar>
            <v-chip-group v-model="formData[field.key]" filter>
              <v-chip
                v-for="option in field.options"
                :key="option.value"
                :value="option.value"
                class="ma-2"
              >
                {{ option.text }}
              </v-chip>
            </v-chip-group>
          </v-col>

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
      formData: {
        self_id: null,
        add_friend: null,
        add_group: null,
        change_date: null,
        date: null,
        id: null
      },
      fields: [
        // {key: 'self_id', label: '自身ID', type: 'text'},
        {
          key: 'add_friend',
          label: '是否允许添加好友',
          type: 'radio',
          options: [{value: -1, text: '禁止所有人添加'}, {value: 0, text: '根据白名单列表'}, {value: 1, text: '允许所有人添加'}]
        },
        {
          key: 'add_group',
          label: '是否允许被拉到群中',
          type: 'radio',
          options: [{value: -1, text: '禁止所有人添加'}, {value: 0, text: '根据白名单列表'}, {value: 1, text: '允许所有人添加'}]
        },
        // {key: 'change_date', label: '修改日期', type: 'date'},
        // {key: 'date', label: '日期', type: 'date'},
        // {key: 'id', label: 'ID', type: 'text'}
      ]
    };
  },
  methods: {
    async submitForm() {
      // 这里调用你自己的提交方法，并将 this.formData 传递给它
      var ret = await new Net("/v1/bot/setting/edit").PostFormData(this.formData);
      if (ret.isSuccess) {
        Alert.SetAlert(ret.echo);
        this.$router.go(-1);
      } else {
        Alert.SetAlert(ret.echo);
      }
    },
    back() {
      this.$router.go(-1);
    },
    async fillForm() {
      // 直接将提供的 JSON 数据回填到表单中
      var ret = await new Net("/v1/bot/setting/get").PostFormData(this.$route.query);
      if (ret.isSuccess) {
        this.formData = ret.data;
      } else {
        Alert.SetAlert(ret.echo);
      }

    }
  },
  mounted() {
    // 在组件挂载时调用 fillForm 方法进行回填
    this.fillForm();
  },
};
</script>
