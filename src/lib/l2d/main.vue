<template>

  <!--  <component :is="'script'" src="/live2d.min.js">-->
  <!--    // JS Here-->
  <!--  </component>-->
  <div
      :class="{
      'vue-live2d': true,
      'vue-live2d-on-left': direction === 'left',
      'vue-live2d-on-right': direction === 'right',
    }"
      :style="{
      width: `${live2dWidth}px`,
      height: `${live2dHeight}px`,
    }"
      @mouseover="openLive2dTool"
      @mouseout="closeLive2dTool">
    <div
        v-show="tipShow"
        v-html="tipText"
        :class="{
        'vue-live2d-tip': true,
        'vue-live2d-tip-on-top': tipPosition === 'top',
        'vue-live2d-tip-on-bottom': tipPosition === 'bottom',
      }">
    </div>
    <canvas
        :id="customId"
        v-show="mainShow"
        :class="{
        'vue-live2d-main': true,
        'vue-live2d-main-on-left': direction === 'left',
        'vue-live2d-main-on-right': direction === 'right',
      }"
        :width="live2dWidth"
        :height="live2dHeight"
    >
    </canvas>
    <div v-show="toolShow" class="vue-live2d-tool">
      <span
          v-for="(tool, index) in tools"
          :key="l2d"
          :class="tool.className"
          v-html="tool.svg"
          @click="tool.click"/>
    </div>
    <div
        v-show="toggleShow"
        @click="openLive2dMain"
        :class="{
        'vue-live2d-toggle': true,
        'vue-live2d-toggle-on-left': direction === 'left',
        'vue-live2d-toggle-on-right': direction === 'right',
      }">
      <span>AIGC-Live2D</span>
    </div>
  </div>
</template>

<script>
import Live2dLibURL from "./live2d.min.js?url"
import '@/styles/live2d.scss'


async function loadLive2dLib() {
  await import(/* @vite-ignore */Live2dLibURL);
}


export default {
  name: 'live2d',
  props: {
    direction: {
      default: 'right',
      validator: function (value) {
        return new Set(['left', 'right']).has(value)
      },
      type: String
    },
    tipPosition: {
      default: 'top',
      validator: function (value) {
        return new Set(['top', 'top']).has(value)
      },
      type: String
    },
    customId: {
      default: 'vue-live2d-main1',
      type: String
    },
    apiPath: {
      // 注意：这是我服务器目前部署的 api 服务，若更新服务地址会在 README.md 说明
      default: 'https://ai.aerofsx.com:444/static/live2d/indexes',
      type: String
    },
    resourcePath: {
      // 注意：这是我服务器目前部署的 api 服务，若更新服务地址会在 README.md 说明
      default: 'https://live.ai.aerofsx.com:444/static/live2d/indexes',
      type: String
    },
    aigcUrl: {
      default: 'https://aigc.aerofsx.com:444',
      type: String
    },
    sdkUrl: {
      default: '',
      type: String,
    },
    model: {
      default: () => ['Potion-Maker/Pio', 'school-2017-costume-yellow'],
      type: Array
    },
    homePage: {
      default: 'https://ai.aerofsx.com:444',
      type: String
    },
    tips: {
      default: {},
      type: Object
    },
    width: {
      default: 0,
      type: Number
    },
    height: {
      default: 0,
      type: Number
    },
    size: {
      default: 255,
      type: Number
    },
    apiKey: {
      default: "",
      type: String,
    },
    showOnLoad: {
      default: true,
      type: Boolean
    },
    uid: {
      default: 0,
    },
    token: {
      default: "",
    }
  },
  data() {
    return {
      messageTimer: null,
      containerDisplay: {
        tip: false,
        main: true,
        tool: false,
        toggle: false
      },
      Tips: {},
      tipText: 'vue-live2d 看板娘',
      modelPath: '',
      modelTexturesId: '',
      tools: [{
        className: 'custom-fa-comment',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="20px" width="20px"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/></svg>',
        click: this.showHitokoto
      }, {
        className: 'custom-fa-user-circle',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" height="20px" width="20px"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>',
        click: this.loadRandModel
      }, {
        className: 'custom-fa-street-view',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="20px" width="20px"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65 0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24zM256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32z"/></svg>',
        click: this.loadRandTextures
      }, {
        className: 'custom-fa-camera-retro',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="20px" width="20px"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"/></svg>',
        click: this.takePhoto
      }, {
        className: 'custom-fa-info-circle',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="20px" width="20px"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/></svg>',
        click: this.openHomePage
      }, {
        className: 'custom-fa-times',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -40 432 592" fill="currentColor" height="20px" width="20px"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>',
        click: this.closeLive2dMain
      }],
      AudioStream: new Audio(),
    }
  },
  async mounted() {
    await loadLive2dLib();
    await this.updateTips();
    [this.modelPath, this.modelTexturesId] = this.model;
    this.loadModel();

    this.$nextTick(() => {
      this.loadEvent()
    })
    setInterval(this.say, 500)
  },
  computed: {
    live2dWidth() {
      return this.width ? this.width : this.size
    },
    live2dHeight() {
      return this.height ? this.height : this.size
    },
    tipShow() {
      return this.mainShow && this.containerDisplay.tip
    },
    mainShow() {
      return this.containerDisplay.main
    },
    toolShow() {
      return this.mainShow && this.containerDisplay.tool
    },
    toggleShow() {
      return !this.mainShow
    }
  },
  watch: {
    width() {
      this.changeLive2dSize()
    },
    height() {
      this.changeLive2dSize()
    },
    size() {
      this.changeLive2dSize()
    },
    doAction() {
      console.log(this.doAction)
      this.doAction = {}
    }
  },
  methods: {
    async say() {
      const action = localStorage.getItem("doAction")
      if (action) {
        localStorage.removeItem("doAction")
        try {
          const act = JSON.parse(action)
          switch (act.type) {
            case "say":
              this.showMessage(act["text"], 2000)
              break

            case "chat":
              this.chatMessage(act["text"])
              break

            default:
              console.log(act)

          }

        } catch (e) {
          console.log("doAction-error", e)
        }
      }
    },
    async updateTips() {
      const ret = await (await this.PostAsync(`${this.aigcUrl}/v1/live2d/tips/list`, "")).json()
      if (ret.code !== 0) {
        console.log("update-tips-error", ret.echo)
        return
      }
      // console.log("tips", ret.data)
      this.Tips = ret.data
    },
    changeLive2dSize() {
      // 针对当前这份 live2d.min.js 来说，更改宽高就是这样。更好的方案是调用重绘方法，但是需要改 lib 源码。
      document.querySelector(`#${this.customId}`).outerHTML = `<canvas id=${this.customId} width="${this.live2dWidth}" height="${this.live2dHeight}" class="vue-live2d-main"></canvas>`
      this.loadModel()
    },
    loadModel() {
      console.log("loading...", this.customId, `${this.apiPath}/${this.modelPath}/${this.modelTexturesId}.json`)
      window.loadlive2d(this.customId, `${this.apiPath}/${this.modelPath}/${this.modelTexturesId}.json`)
      console.log(`Live2D 模型 ${this.modelPath}，服装 ${this.modelTexturesId} 加载完成`)
    },
    loadRandModel() {
      console.log("随机加载模型……")
      this.Post(`${this.aigcUrl}/v1/live2d/models/list`, "",
          (data) => {
            const models = data.filter(({modelPath}) => modelPath !== this.modelPath)
            const {modelPath, modelIntroduce} = models[Math.floor(Math.random() * models.length)]
            this.modelPath = modelPath
            this.showMessage(`${modelIntroduce}`, 4000)
            this.loadRandTextures(true)
          })
    },
    async loadRandTextures(isAfterRandModel = false) {
      await this.http({
        url: `${this.apiPath}/${this.modelPath}/textures.json`,
        success: (data) => {
          const modelTexturesIds = data.filter(modelTexturesId => modelTexturesId !== this.modelTexturesId)
          this.modelTexturesId = modelTexturesIds[Math.floor(Math.random() * modelTexturesIds.length)]
          this.loadModel()
          if (!isAfterRandModel) {
            this.showMessage('我的新衣服好看嘛？', 4000)
          }
        }
      })
    },
    showMessage(msg = '', timeout = 6000) {
      if (this.messageTimer) {
        clearTimeout(this.messageTimer)
        this.messageTimer = null

      } else {
        this.containerDisplay.tip = true
      }
      this.voice(msg)
      this.tipText = msg
      this.messageTimer = setTimeout(() => {
        this.containerDisplay.tip = false
        this.messageTimer = null
      }, timeout)

    },
    async chatMessage(msg = '') {
      if (msg.length < 1) {
        return
      }
      let reply = await this.chat(msg)
      this.showMessage(reply)
    },
    async chat(msg) {
      let fd = new FormData();
      fd.set("message", msg)
      fd.set("chat_id", "111")
      let ret = await (await this.PostAsync(`${this.aigcUrl}/v1/fastgpt/api/text`, fd)).json();
      if (ret.code !== 0) {
        console.log("chat-error", ret.echo)
      }
      return ret.echo
    },
    async voice(msg = '') {
      const speech = new SpeechSynthesisUtterance()
      speech.lang = 'zh-CN'
      speech.text = msg
      // speech.volume = 1
      speech.rate = 2
      speech.pitch = 1
      if (localStorage.getItem("currentVoice") !== msg) {
        console.log("VoiceSpeak", msg)
        this.stopVoice()
        localStorage.setItem("currentVoice", msg)
        // window.speechSynthesis.speak(speech)
        this.iflyVoice(msg)
      }
    },
    async stopVoice() {
      //stop AudioStream
      try {
        await this.AudioStream.pause()
      } catch (e) {

      }
      window.speechSynthesis.cancel()

    },
    async iflyVoice(msg = '') {
      let fm = new FormData();
      fm.set("message", msg)
      const audio = await this.PostAsync(`${this.aigcUrl}/v1/iflytek/tts/audio`, fm)
      // play audio stream and make it play as blob as background level
      try {
        const blob = await audio.blob()
        // this.AudioStream = new Audio()
        this.AudioStream.src = URL.createObjectURL(blob)
        this.AudioStream.play()
      } catch (e) {
        console.log("iflyVoice-error", e)
      }

    },
    takePhoto() {
      this.showMessage('照好了嘛，留个纪念吖~')
      window.Live2D.captureName = 'photo.png'
      window.Live2D.captureFrame = true
    },
    async showHitokoto() {
      await this.http({
        url: 'https://v1.hitokoto.cn',
        success: ({hitokoto, id, creator, from}) => {
          this.showMessage(`${hitokoto} <br> - by <a href="https://hitokoto.cn?id=${id}">${creator}</a> from 《${from} 》`)
        }
      })
    },
    openHomePage() {
      open(this.homePage)
    },
    closeLive2dMain() {
      this.containerDisplay.main = false
    },
    openLive2dMain() {
      this.containerDisplay.main = true
    },
    closeLive2dTool() {
      this.containerDisplay.tool = false
    },
    openLive2dTool() {
      this.containerDisplay.tool = true
    },
    loadEvent() {
      let tips = this.Tips
      for (const event in tips) {
        console.log("event", event)
        for (const {selector, texts} of tips[event]) {
          const dom = selector === 'document' ? document : document.querySelector(selector)
          if (dom == null) {
            continue
          }

          dom.addEventListener(event, () => {
            const msg = texts[Math.floor(Math.random() * texts.length)]
            this.showMessage(msg, 2000)
          })
        }
      }
    },
    http({url, success}) {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if ((xhr.status >= 200 || xhr.status < 300) || xhr.status === 304) {
            success && success(JSON.parse(xhr.response))
          } else {
            console.error(xhr)
          }
        }
      }
      xhr.open('GET', url)
      xhr.send(null)
    },
    async Get({url, success}) {
      // 如果已经包含查询字符串，则在原有查询字符串的基础上添加时间戳参数
      // url = url + '?ver=' + Date.now();
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          uid: this.uid,
          token: this.token,
          //no cache
          // 'Cache-Control': 'no-cache',
          // 'Pragma': 'no-cache',
          // 'Expires': 0
        },
        mode: 'no-cors',
        credentials: 'include',
      });
      console.log("a:", response)
      let ret = await response.json()

      if ((ret.status >= 200) || ret.status === 304) {
        // const ret = await response.json()
        console.log(ret)
        success && success(ret)
      } else {
        console.error(response)
      }
    },
    Post(url, data, success) {
      fetch(url, {
        method: 'POST',
        headers: {
          uid: this.uid,
          token: this.token
        },
        body: data,
        mode: 'cors',
        credentials: 'include',
      })
          .then(ret => ret.json())
          .then(ret => {
            success && success(ret.data)
          })
          .catch((err) => {
            console.log("fet-error:", err)
          })

    },
    async PostAsync(url, data) {
      return await fetch(url, {
        method: 'POST',
        headers: {
          uid: this.uid,
          token: this.token
        },
        body: data,
        mode: 'cors',
        credentials: 'include',
        // timeout: 1000
      })
    }
  }
}
</script>

