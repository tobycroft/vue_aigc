<template>

  <v-container class="align-self-center">
    <v-card v-if="show1"
            class="mx-auto"
            max-width="200"
            height="200"
            image="@/assets/gobotq.png"
            title="GobotQ"
            theme="dark"
    ></v-card>

    <v-sheet width="100%" class="mx-auto mt-6" v-show="show1">
      <v-form @submit.prevent>
        <v-text-field autofocus
                      v-model="qq"
                      :rules="rules"
                      label="这里输入你的QQ号码"
        ></v-text-field>
        <v-btn type="submit" block class="mt-0" color="blue" @click="gotonext">下一步</v-btn>
        <v-btn type="submit" block class="mt-4" color="grey" @click="clearout">清空数据</v-btn>
      </v-form>
    </v-sheet>


    <v-slide-y-transition>
      <v-card v-show="show2"
              class="py-8 px-6 text-center mx-auto ma-4"
              elevation="12"

              max-width="100%"
              width="100%"
      >
        <h3 class="text-h6 mb-4">填写你QQ的登录码</h3>

        <div class="text-body-2">
          <v-col>不是你的QQ密码！！！</v-col>
          <v-col>登录码请通过已在线的Acfur机器人获取</v-col>
          <v-col>向机器人发送“acfur登录”，并等待机器人回复验证码给你</v-col>
        </div>

        <v-sheet color="surface">
          <v-otp-input
            v-model="password"
            type="text"
            length="8"
            variant="solo-filled"
            max-width="400"
          ></v-otp-input>
        </v-sheet>

        <v-btn @click="login"
               class="my-4"
               color="blue"
               height="40"
               text="验证并登录"
               variant="flat"
               width="70%"
        ></v-btn>

        <v-btn @click="clearout"
               class="my-4"
               color="grey"
               height="40"
               text="返回"
               variant="flat"
               width="70%"
        ></v-btn>
      </v-card>
    </v-slide-y-transition>

  </v-container>
</template>


<script>
import Net from "@/plugins/Net";
import TokenModel from "@/model/TokenModel";

export default {
  beforeCreate() {
    if (TokenModel.Api_is_login()) {
      this.$router.push("/center")
    }
  },
  created() {
    this.qq = localStorage.getItem("qq")
  },
  data: () => ({
    show1: true,
    show2: false,
    qq: '',
    password: '',
    rules: [
      value => {
        if (value) return true
        return '这里填写的应该是你的QQ号码，而不是你机器人的QQ号码'
      },
    ],
  }),
  methods: {
    gotonext() {
      if (this.qq.length > 5) {
        this.show1 = false;
        this.show2 = true
        localStorage.setItem("qq", this.qq)
      }
    },
    clearout() {
      this.show2 = false
      this.show1 = true
      this.qq = ''
      localStorage.removeItem('qq')
    },
    async login() {
      var ret = await new Net("/v1/index/login/login").PostFormData({
        qq: this.qq,
        password: this.password
      })
      if (ret.isSuccess) {
        TokenModel.Api_set_uidAndToken(ret.data["uid"], ret.data["token"])
        this.$router.push("/center")
      }
    },
  },
}

</script>

