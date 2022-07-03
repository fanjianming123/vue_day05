<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{current}}</strong></span>
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSele == 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSele == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSele == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSele: 'all',
    }
  },
  //显示剩余数量
  props:['current'],
  methods: {
    change(checkd) {
      this.isSele = checkd
      this.$emit('subtotal', checkd)
    },
    clear(){
        this.$emit('clear')
    }
  },
}
</script>
