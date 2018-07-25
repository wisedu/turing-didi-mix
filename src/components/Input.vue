<template>
      <div class="didi-relt">
        <span class="didi-required" v-if="required">*</span>
        <md-input-item
          :ref="caption"
          :title="title"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :disabled="disabled"
          :readonly="readonly"
          :isHighlight="isHighlight"
          :size="size"
          :align="align"
          :clearable="clearable"
          :isTitleLatent="isTitleLatent"
        >
          <slot name="left"></slot>
          <slot name="right"></slot>
        </md-input-item>
      </div>
      <!-- <div class="didi-relt didi-input-pswd">
        <cube-input
          v-model="value"
          :placeholder="placeholder"
          type="password"
          :maxlength="maxlength"
          :readonly="readonly"
          :disabled="disabled"
          :autofocus="true"
          :autocomplete="true"
          :clearable="true"
          :eye="true"
        >
        <div slot="prepend">密码</div>
        </cube-input>
      </div> -->

      <!-- <div class="didi-relt">
        <div class="didi-textarea-title-v">我是文本框(上下)</div>
        <cube-textarea v-model="value" :indicator="true" :maxlength="100" placeholder="请输入"></cube-textarea>
      </div>
      <div class="didi-relt">
        <div class="didi-textarea-title-h">我是文本框</div>
        <div style="width:calc(100% - 98px);display:inline-block;">
          <cube-textarea v-model="value" :indicator="true" placeholder="请输入"></cube-textarea>
        </div>
      </div> -->
</template>

<script>
import {InputItem, Field, Icon, Toast,Captcha} from 'mand-mobile';
// import {
//   /* eslint-disable no-unused-vars */
//   Style,
//   Textarea,
//   Input
// } from 'cube-ui';

export default {
  name: 'diInput',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{
    type:{
      type:String,
      default:'text'
    },
    name:{
      type:String,
      default:''
    },
    value:{
      type:String,
      default:''
    },
    title:{
      type:String,
      default:''
    },
    placeholder:{
      type:String,
      default:'请输入内容'
    },
    maxlength:{
      type:[String,Number],
      default:'5'
    },
    size:{
      type:String,
      default:'normal'
    },
    align:{
      type:String,
      default:'left'
    },
    error:{
      type:String,
      default:''
    },
    readonly:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    isTitleLatent:{
      type:Boolean,
      default:false
    },
    isHighlight:{
      type:Boolean,
      default:false
    },
    isFormative:{
      type:Boolean,
      default:false
    },
    clearable:{
      type:Boolean,
      default:false
    },
    isVirtualKeyboard:{
      type:Boolean,
      default:false
    },
    virtualKeyboardDisorder:{
      type:Boolean,
      default:false
    },
    virtualKeyboardOkText:{
      type:String,
      default:'确定'
    },
    required:{
      type:Boolean,
      default:false
    },
    caption:{
      type:String,
      default:''
    }
  },
  methods:{
    
  },
  components: {
    [InputItem.name]: InputItem,
    //[Input.name]: Input,
    [Field.name]: Field,
    //[Textarea.name]:Textarea,
    [Captcha.name]:Captcha,
    [Icon.name]: Icon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.didi-required {
    position: absolute;
    top: 20px;
    left: -6px;
    color: red;
 }
.didi-relt {
  position: relative;
}
.didi-codebut {
  width: 70px;
  position: absolute;
  font-size: 14px;
  color: #3ca0e6;
  right: 0;
}
.didi-rmbbut {
  font-size: 14px;
}
.didi-rmbbut span {
  display: inline-block;
  border-left:solid 1px #999;
  height:14px;
  vertical-align: text-top;
  margin-right: 8px;
}
/* .didi-textarea-title-v {
  text-align:left;
  font-size: 14px;
  color: #333;
  padding: 8px 0;
}
.didi-textarea-title-h {
  position: relative;
  display: inline-block;
  width:77px;
  font-size: 14px;
  color: #333;
  padding-right: 8px;
  vertical-align: top;
  text-align: left;
  top:14px;
} */
</style>
<!-- no "scoped" -->
<style>
.didi-input-code .md-input-item .md-input-item-control .md-input-item-input {
  width:70%;
}
/* .didi-input-pswd .cube-input-prepend {
    width: 85px;
    margin-right: 8px;
    font-size: 14px;
    color:#333;
}
.didi-input-pswd .cube-input:after{
  border:none !important;
} */
</style>
