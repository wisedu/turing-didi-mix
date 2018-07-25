<template>
    <div>
      <div class="didi-relt" v-if="type==='textarea-v'">
        <div class="didi-textarea-title-v">{{title}}</div>
        <cube-textarea v-model="value" :indicator="true" :maxlength="maxlength" :placeholder="placeholder"></cube-textarea>
      </div>
      <div class="didi-relt" v-else>
        <div class="didi-textarea-title-h">{{title}}</div>
        <div style="width:calc(100% - 98px);display:inline-block;">
          <cube-textarea v-model="value" :indicator="true" :placeholder="placeholder"></cube-textarea>
        </div>
      </div>
    </div>
</template>

<script>
import {
  /* eslint-disable no-unused-vars */
  Style,
  Textarea
} from 'cube-ui';

export default {
  name: 'diTextareaform',
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
      default:'请输入'
    },
    maxlength:{
      type:[String,Number],
      default:'11'
    },
    indicator:{
      type:Boolean,
      default:true
    },
    readonly:{
      type:Boolean,
      default:false
    },
    disabled:{
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
    [Textarea.name]:Textarea
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
