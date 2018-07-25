<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Components</h2>
    <ul>
      <li>
        <a
          href="#/Input"
        >
         Input 输入框
        </a>
      </li>
      <li>
        <a
          href="#/progress"
        >
          progress 进度条
        </a>
      </li>
      <li>
        <a
          href="#/calendar"
        >
          calendar 日历
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to TuringDidi based on  Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  text-align: left;
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
