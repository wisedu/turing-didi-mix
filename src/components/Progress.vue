<template>
    <div style="width:90%;margin:0 5%;">
      <van-progress :percentage="50" />
    </div>
</template>

<script>
import { Progress } from 'vant';

//Vue.use(Progress);

export default {
  name: 'diProgress',
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
      [Progress.name]: Progress
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<!-- no "scoped" -->
<style>

</style>
