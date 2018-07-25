<template>
  <div class="wrapper">
    我是日历
    <text value="我是第三方组件"></text>
    1122
    <div class="btn" @click="showCalendar">
      <text class="btn-txt">单程日历</text>
    </div>

    <div class="btn btn-margin yellow" @click="showReturnCalendar">
      <text class="btn-txt">往返日历</text>
    </div>

    <div class="panel">
      <text v-if="currentDate" class="text">当前日期: {{currentDate}}</text>
    </div>

    <!-- <wxc-page-calendar :date-range="dateRange"
                       :animationType="animationType"
                       :selected-date="selectedDate"
                       :selected-note="selectedNote"
                       :is-range="isRange"
                       :minibar-cfg="minibarCfg"
                       :desc-list="descList"
                       @wxcPageCalendarBackClicked="wxcPageCalendarBackClicked"
                       @wxcPageCalendarDateSelected="wxcPageCalendarDateSelected"
                       ref="wxcPageCalendar"></wxc-page-calendar> -->
  </div>
</template>
<script>
  //import { WxcPageCalendar } from 'weex-ui';
  //import ditext from './text.vue'
  export default {
    name:'calendar',
    components: {
      //WxcPageCalendar
      
    },
    data: () => ({
      animationType: 'push',
      currentDate: '',
      selectedDate: ['2017-06-23', '2017-06-30'],
      isRange: true,
      calendarTitle: '选择日期',
      dateRange: ['2017-06-10', '2018-06-10'],
      selectedNote: ['出发', '到达', '往返'],
      minibarCfg: {
        title: '日期选择'
      },
      descList: [
        { date: '2017-06-23', value: '￥200' },
        { date: '2017-06-24', value: '￥200' },
        { date: '2017-06-25', value: '￥200' },
        { date: '2017-06-26', value: '￥200' },
        { date: '2017-06-27', value: '￥222' },
        { date: '2017-06-28', value: '￥341' },
        { date: '2017-06-29', value: '￥230' },
        { date: '2017-06-30', value: '￥2000' }
      ]
    }),
    methods: {
      wxcPageCalendarDateSelected (e) {
        this.selectedDate = e.date;
        this.currentDate = e.date;
      },
      wxcPageCalendarBackClicked () {
      },
      showCalendar () {
        this.isRange = false;
        setTimeout(() => {
          this.$refs['wxcPageCalendar'].show();
        }, 10);
      },
      showReturnCalendar () {
        this.isRange = true;
        setTimeout(() => {
          this.$refs['wxcPageCalendar'].show();
        }, 10);
      }
    }
  };
</script>