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
        <v-text-field autofocus v-model="username" :rules="rules" label="这里输入你的用户名"></v-text-field>
        <v-btn type="submit" block class="mt-0" color="blue" @click="gotonext">下一步</v-btn>
        <v-btn block class="mt-4" color="red" @click="clearout">清空数据,并开始注册</v-btn>
      </v-form>
    </v-sheet>


    <v-slide-y-transition>
      <v-card v-show="show2" class="py-8 px-6 text-center mx-auto ma-4" elevation="12" max-width="100%" width="100%">
        <h3 class="text-h6 mb-4">填写密码</h3>
        <div class="text-body-2">
        </div>

        <v-sheet color="surface">
          <v-text-field
              v-model="password"
              type="password"
              label="密码"
              max-width="400"
          ></v-text-field>
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
import md5 from "md5";

export default {
  beforeCreate() {
    if (TokenModel.Api_is_login()) {
      this.$router.push("/index")
    }
  },
  created() {
    this.username = localStorage.getItem("username")
  },
  data: () => ({
    show1: true,
    show2: false,
    username: '',
    password: '',
    rules: [
      value => {
        if (value) return true
        return '这里填写的应该是你的用户名，而不是你机器人的用户名'
      },
    ],
  }),
  methods: {
    gotonext() {
      if (this.username.length > 1) {
        this.show1 = false;
        this.show2 = true
        localStorage.setItem("username", this.username)
      }
    },
    clearout() {
      this.show2 = false
      this.show1 = true
      this.username = ''
      localStorage.removeItem('username')
      this.$router.push("/user/register")
    },
    async login() {
      var ret = await new Net("/v1/user/auth/login").PostFormData({
        username: this.username,
        password: md5(this.password)
      })
      if (ret.isSuccess) {
        TokenModel.Api_set_uidAndToken(ret.data["uid"], ret.data["token"])
        this.$router.push("/index")
      }
    },
  },
}

</script>
