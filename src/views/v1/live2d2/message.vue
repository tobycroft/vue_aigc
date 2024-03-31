<template>
  <div>
    <div class="message"></div>
    <div class="hide-button" @click="hideLive2d">隐藏</div>
    <div id="landlord" @mouseenter="showHideButton" @mouseleave="hideHideButton">
      <!-- 在这里放置 Live2D 模型的代码 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      referrer: document.referrer,
      homePath: `${home_Path}`,
      messagePath: `${message_Path}`,
      showHideBtn: false
    };
  },
  mounted() {
    this.initTips();
    this.initGreetings();
    this.initLive2d();
    this.showHitokoto();
    setInterval(this.showHitokoto, 30000);
  },
  methods: {
    renderTip(template, context) {
      var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
      return template.replace(tokenReg, (word, slash1, token, slash2) => {
        if (slash1 || slash2) {
          return word.replace('\\', '');
        }
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        for (let i = 0, length = variables.length; i < length; ++i) {
          let variable = variables[i];
          currentObject = currentObject[variable];
          if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
      });
    },
    showMessage(text, timeout) {
      if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length)];
      $('.message').stop();
      $('.message').html(text).fadeTo(200, 1);
      if (timeout === null) timeout = 5000;
      this.hideMessage(timeout);
    },
    hideMessage(timeout) {
      $('.message').stop().css('opacity', 1);
      if (timeout === null) timeout = 5000;
      $('.message').delay(timeout).fadeTo(200, 0);
    },
    initTips() {
      $.ajax({
        cache: true,
        url: `${this.messagePath}message.json`,
        dataType: "json",
        success: result => {
          console.log("result",result)
          result.mouseover.forEach(tips => {
            $(tips.selector).mouseover(() => {
              let text = Array.isArray(tips.text) ? tips.text[Math.floor(Math.random() * tips.text.length)] : tips.text;
              text = this.renderTip(text, { text: $(this).text() });
              this.showMessage(text, 3000);
            });
          });
          result.click.forEach(tips => {
            $(tips.selector).click(() => {
              let text = Array.isArray(tips.text) ? tips.text[Math.floor(Math.random() * tips.text.length)] : tips.text;
              text = this.renderTip(text, { text: $(this).text() });
              this.showMessage(text, 3000);
            });
          });
        }
      });
    },
    initGreetings() {
      let text;
      if (this.referrer !== '') {
        let referrer = document.createElement('a');
        referrer.href = this.referrer;
        text = '嗨！来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友！';
        let domain = referrer.hostname.split('.')[1];
        if (domain == 'baidu') {
          text = '嗨！ 来自 百度搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        } else if (domain == 'so') {
          text = '嗨！ 来自 360搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        } else if (domain == 'google') {
          text = '嗨！ 来自 谷歌搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        }
      } else {
        if (window.location.href == this.homePath) {
          let now = new Date().getHours();
          if (now > 23 || now <= 5) {
            text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
          } else if (now > 5 && now <= 7) {
            text = '早上好！一日之计在于晨，美好的一天就要开始了！';
          } else if (now > 7 && now <= 11) {
            text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
          } else if (now > 11 && now <= 14) {
            text = '中午了，工作了一个上午，现在是午餐时间！';
          } else if (now > 14 && now <= 17) {
            text = '午后很容易犯困呢，今天的运动目标完成了吗？';
          } else if (now > 17 && now <= 19) {
            text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
          } else if (now > 19 && now <= 21) {
            text = '晚上好，今天过得怎么样？';
          } else if (now > 21 && now <= 23) {
            text = '已经这么晚了呀，早点休息吧，晚安~~';
          } else {
            text = '嗨~ 快来逗我玩吧！';
          }
        } else {
          text = '欢迎阅读<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        }
      }
      this.showMessage(text, 12000);
    },
    showHitokoto() {
      $.getJSON('https://v1.hitokoto.cn/', result => {
        this.showMessage(result.hitokoto, 5000);
      });
    },
    showHideButton() {
      this.showHideBtn = true;
    },
    hideHideButton() {
      this.showHideBtn = false;
    },
    hideLive2d() {
      $('#landlord').css('display', 'none');
    },
    initLive2d() {
      $('.hide-button').fadeOut(0);
    }
  }
};
</script>

<style scoped>
/* 在这里放置样式 */
</style>
