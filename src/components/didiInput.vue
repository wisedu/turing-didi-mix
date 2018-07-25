<template>
    <div>
      <div class="didi-relt">
          <span class="didi-required">*</span>
          <md-input-item
            ref="input0"
            title="普通文本"
            placeholder="普通文本"
            :maxlength="5"
          >
          </md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input1"
          title="禁用表单"
          value="禁用表单"
          disabled
        ></md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input12"
          title="只读表单"
          value="只读表单"
          readonly
        ></md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input13"
          title="高亮表单"
          placeholder="高亮表单"
          is-highlight
        ></md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input2"
          title="大尺寸表单"
          placeholder="大尺寸表单"
          size="large"
        ></md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input3"
          title="文本居中"
          placeholder="文本居中"
          align="center"
        ></md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input4"
          title="文本居右"
          placeholder="文本居右"
          align="right"
        ></md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input4"
          title=""
          placeholder="无标题"
        ></md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input11"
          placeholder="left/right slots"
          title="右侧带图标"
        >
          <md-icon name="circle-alert" slot="right" @click.native="onClick"></md-icon>
        </md-input-item>
      </div>
      <div class="didi-relt didi-input-code">
        <md-input-item
          ref="input11"
          placeholder="left/right slots"
          title="右侧带文字"
        >
          <div slot="right" class="didi-codebut">获取验证码</div>
        </md-input-item>
      </div>
      <div class="didi-relt didi-input-code">
        <md-input-item
          ref="input11"
          placeholder="left/right slots"
          title="右侧带图片"
        >
          <img slot="right" class="didi-codebut" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png" />
        </md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input11"
          placeholder="left/right slots"
          title="年收入"
        >
          <div slot="right" class="didi-rmbbut"><span></span>元</div>
        </md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input11"
          placeholder="left/right slots"
          title="邮箱"
        >
          <div slot="right" class="didi-rmbbut"><span></span>.com</div>
        </md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="input9"
          title="带清空按钮"
          placeholder="normal text"
          clearable
        ></md-input-item>
      </div>
      <div class="didi-relt didi-input-pswd">
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
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="name"
          title="真实姓名"
          placeholder="投保人姓名"
          is-title-latent
          clearable
        ></md-input-item>
      </div>
      <div class="didi-relt">
        <md-input-item
          ref="id"
          title="身份证号"
          placeholder="投保人身份证号"
          is-title-latent
          clearable
          ></md-input-item>
      </div>
      <div class="didi-relt">
        <div class="didi-textarea-title-v">我是文本框(上下)</div>
        <cube-textarea v-model="value" :indicator="true" :maxlength="100" placeholder="请输入"></cube-textarea>
      </div>
      <div class="didi-relt">
        <div class="didi-textarea-title-h">我是文本框</div>
        <div style="width:calc(100% - 98px);display:inline-block;">
          <cube-textarea v-model="value" :indicator="true" placeholder="请输入"></cube-textarea>
        </div>
        
      </div>
    </div>
</template>

<script>
import {InputItem, Field, Icon, Toast,Captcha} from 'mand-mobile';
import {
  /* eslint-disable no-unused-vars */
  Style,
  Textarea,
  Input
} from 'cube-ui';

export default {
  name: 'didiInput',
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
      default:''
    },
    maxlength:{
      type:[String,Number],
      default:''
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
    }
  },
  methods:{
    
  },
  components: {
    [InputItem.name]: InputItem,
    [Input.name]: Input,
    [Field.name]: Field,
    [Textarea.name]:Textarea,
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
.didi-textarea-title-v {
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
}
</style>
<!-- no "scoped" -->
<style>
.didi-input-code .md-input-item .md-input-item-control .md-input-item-input {
  width:70%;
}
.didi-input-pswd .cube-input-prepend {
    width: 85px;
    margin-right: 8px;
    font-size: 14px;
    color:#333;
}
/* .didi-input-pswd .cube-input-field{
  height:50px;
} */
.didi-input-pswd .cube-input:after{
  border:none !important;
}
</style>
