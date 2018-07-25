<template>
    <div>
      <md-captcha
        :maxlength="4"
        :isView="true"
      >
        验证码已发送至186****5407
      </md-captcha>
    </div>
</template>

<script>
import {Captcha} from 'mand-mobile';


export default {
  name: 'diCaptcha',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      placeholder: '请输入内容',
      readonly: false,
      maxlength: 100,
      disabled: false
    }
  },
  methods:{
    onClick() {
      Toast({
        content: 'some information',
        icon: 'circle-alert',
      })
    }
  },
  components: {
    [Captcha.name]:Captcha
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<!-- no "scoped" -->
<style>

</style>
