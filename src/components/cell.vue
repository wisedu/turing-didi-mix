<template>
  <div class="container">
      我是cell
    <text >我是第三方组件</text>
    1122
    <div class="demo">
      <text class="demo-title">列表list展示</text>

      <wxc-cell label="标题"
                title="Weex Ui"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                :has-margin="true"></wxc-cell>

      <wxc-cell label="标题"
                title="带链接"
                :has-arrow="true"
                link="https://h5.m.taobao.com/trip/home/index.html"
                @wxcCellClicked="wxcCellClicked"
                spm="181.12312312.12312.d01"
                :has-top-border="false"></wxc-cell>

      <wxc-cell label="标题"
                title="Weex Ui"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false"></wxc-cell>

    </div>
    <div class="demo">
      <text class="demo-title">不配置label</text>
      <wxc-cell title="标题"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="true"></wxc-cell>
    </div>

    <div class="demo">
      <text class="demo-title">配置附加信息</text>
      <wxc-cell title="标题"
                desc="这里是附加信息"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="true"></wxc-cell>
    </div>

    <div class="demo">
      <text class="demo-title">不显示箭头</text>
      <wxc-cell title="标题"
                :has-arrow="false"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="true"></wxc-cell>
    </div>
    <div class="demo">
      <text class="demo-title">自定义子元素</text>
      <wxc-cell title="这里是标题"
                :has-arrow="false"
                :has-top-border="true">
        <switch slot="value"></switch>
      </wxc-cell>
    </div>
  </div>
</template>

<script>
  import { WxcCell } from 'weex-ui';
  export default {
    components: {
        WxcCell
    },
    name:'cell',
    methods: {
      wxcCellClicked (e) {
        console.log(e)
      }
    }
  };
</script>
