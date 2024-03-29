<template>
  <meta name="referrer" content="never">
  <v-dialog width="500" v-model="dialogVisible">
    <template v-if="dialogVisible">
      <v-card title="信息">
        <v-card-text>
          {{ message }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Close Dialog"
              @click="close"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <router-view/>
</template>

<script>
import Alert from "@/plugins/Alert";

export default {
  data: () => ({
    dialogVisible: false,
    message: '',
  }),
  created() {
    setInterval(this.readalert, 500)
  },
  destroyed() {
  },
  methods: {
    readalert() {
      const alert = Alert.GetAlert()
      if (alert != null) {
        this.handleAlert(alert)
      }
      const go = Alert.GetGo()
      if (go != null) {
        this.handleGo(go)
      }
    },
    close() {
      this.dialogVisible = false;
    },
    handleAlert(message) {
      this.message = message;
      this.dialogVisible = true;
      console.log("channelmsg", message);
    },
    handleGo(message) {
      console.log("gou", message)
      this.$router.push(message)
    },
  },
};
</script>
