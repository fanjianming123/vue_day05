<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader
      @add="addFn"
      :list="list"
      @setChecked="setCheckedFn"
    ></TodoHeader>
    <TodoMain :list="show" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @clear="clearFn"
      @toggleSel="toggleSelFn"
    ></TodoFooter>
  </section>
</template>
<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoMain from './components/TodoMain.vue'
import TodoHeader from './components/TodoHeader.vue'
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      isShow: 1,
    }
  },
  components: {
    TodoHeader,
    TodoFooter,
    TodoMain,
  },
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length
    },
    show() {
      if (this.isShow === 2) {
        return this.list.filter((ele) => !ele.isDone)
      } else if (this.isShow === 3) {
        return this.list.filter((ele) => ele.isDone)
      } else {
        return this.list
      }
    },
  },
  methods: {
    addFn(val) {
      this.list.push({
        id: this?.list[this.list.length - 1]?.id + 1 || 100,
        name: val,
        isDone: false,
      })
    },
    setCheckedFn(val) {
      this.list.forEach((ele) => (ele.isDone = val))
    },
    delFn(id) {
      this.list = this.list.filter((ele) => ele.id !== id)
    },
    clearFn() {
      this.list = this.list.filter((ele) => !ele.isDone)
    },
    toggleSelFn(val) {
      this.isShow = val
    },
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler(val) {
        localStorage.setItem('list', JSON.stringify(val || []))
      },
    },
  },
}
</script>
<style scoped></style>
