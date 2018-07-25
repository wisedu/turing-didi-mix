<template>
  <div>
    <di-calendar></di-calendar>
  </div>
</template>
<script>
  import diCalendar from '../components/Calendar';

  export default {
    name:'calendar',
    components: {
      diCalendar
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