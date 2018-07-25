<template>
    <div style="margin:0 5%;width:90%;">
      <di-input title="姓名1" ></di-input>
      <di-input title="姓名2" ></di-input>
      <di-input title="姓名3" ></di-input>
      <di-input title="姓名4" ></di-input>
      <di-input title="姓名5" ></di-input>
      <di-input title="姓名6" ></di-input>
      <di-input title="姓名7" ></di-input>
      <di-pwdform title="密码1"></di-pwdform>
      <di-textareaform title="文本域1"></di-textareaform>
    </div>
</template>

<script>
import diInput from '../components/Input.vue';
import diPwdform from '../components/Pwdform.vue';
import diTextareaform from '../components/Textareaform.vue';

export default {
  name: '',
  data () {
    return {
    }
  },
  props:{
    
  },
  methods:{
    
  },
  components: {
    diInput,
    diPwdform,
    diTextareaform
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<!-- no "scoped" -->
<style>

</style>
