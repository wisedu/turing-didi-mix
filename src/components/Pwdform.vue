<template>
    <div>
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
        <div slot="prepend">{{title}}</div>
        </cube-input>
      </div>
    </div>
</template>

<script>
import {
  /* eslint-disable no-unused-vars */
  Style,
  Input
} from 'cube-ui';

export default {
  name: 'diPwdform',
  data () {
    return {
      
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
      default:'11'
    },
    readonly:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    clearable:{
      type:Boolean,
      default:false
    },
    autofocus:{
      type:Boolean,
      default:false
    },
    autocomplete:{
      type:Boolean,
      default:false
    },
    eye:{
      type:Boolean,
      default:false
    },
    required:{
      type:Boolean,
      default:false
    },
    key:{
      type:String,
      default:''
    }
  },
  methods:{
    
  },
  components: {
    [Input.name]: Input
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<!-- no "scoped" -->
<style>
.didi-input-pswd .cube-input-prepend {
    width: 85px;
    margin-right: 8px;
    font-size: 14px;
    color:#333;
}
.didi-input-pswd .cube-input:after{
  border:none !important;
}
</style>
