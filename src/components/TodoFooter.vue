<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel === 1 }"
          href="javascript:;"
          @click="change(1)"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 2 }"
          href="javascript:;"
          @click="change(2)"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 3 }"
          href="javascript:;"
          @click="change(3)"
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
      isSel: 1,
    }
  },
  props: ['count'],
  methods: {
    clear() {
      this.$emit('clear')
    },
    change(val) {
      this.isSel = val
      this.$emit('toggleSel',val)
    },
  },
}
</script>
