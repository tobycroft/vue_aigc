<template>
  <v-container>
    <v-form v-model="valid" ref="form" @submit.prevent="submitForm">
      <v-row>
        <v-col v-for="field in fields" :key="field.key" cols="12" md="6">

          <v-textarea
            hide-details="false"
            v-if="field.type === 'string'"
            :label="field.label"
            v-model="formData[field.key]"
            :rules="field.rules"
          ></v-textarea>


          <v-switch inset
                    v-if="field.type === 'bool'"
                    :label="field.label"
                    v-model="formData[field.key]"
          ></v-switch>

          <!-- Other types of form fields can be added as needed -->

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
        self_id: 0,
        group_id: 0,
      },
      fields: [],
      field: {},
    };
  },
  methods: {
    async submitForm() {
      // This is where you call your own submission method and pass this.formData to it
      var ret = await new Net("/v1/group/function/edit").PostFormData(this.formData)
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
    async getDetail() {
      var ret = await new Net("/v1/group/function/detail").Get()
      if (ret.isSuccess) {
        const list = ret.data
        for (const i in list) {
          const data = list[i]
          this.fields.push({key: data["key"], label: data["name"], type: data["type"], rules: []})
          this.field[data["key"]] = data["type"]
        }
        this.fillForm()
      } else {
        Alert.SetAlert(ret.echo)
      }
    },
    async fillForm() {
      // Fill the form directly with the provided JSON data
      var ret = await new Net("/v1/group/function/get").PostFormData({
        self_id: this.$route.query.self_id,
        group_id: this.$route.query.group_id,
      })
      if (ret.isSuccess) {
        let list = ret.data
        for (const listKey in list) {
          switch (this.field[listKey]) {
            case "bool":
              this.formData[listKey] = Boolean(list[listKey])
              break

            default:
              this.formData[listKey] = list[listKey]
              break
          }
        }
      } else {
        Alert.SetAlert(ret.echo)
      }
    },
  },
  created() {
    this.formData.self_id = this.$route.query.self_id,
      this.formData.group_id = this.$route.query.group_id,
      // Call fillForm method to perform data filling when the component is mounted
      this.getDetail();
  },
};
</script>
