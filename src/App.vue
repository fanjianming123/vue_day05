<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn" @evaluation="evaluationFn"></TodoHeader>
    <TodoMain :list="showSel" @clear="clearFn"></TodoMain>
    <TodoFooter
      :current="current"
      @subtotal="subtotalFn"
      @clear="delFn"
    ></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      setSel: 'all',
    }
  },
  methods: {
    //添加功能
    addFn(val) {
      this.list.push({
        name: val,
        isDone: false,
        id: this.list[this.list.length - 1]?.id + 1 || 100,
      })
    },
    //删除功能
    clearFn(id) {
      this.list = this.list.filter((ele) => ele.id != id)
    },
    //底部显示
    subtotalFn(val) {
      this.setSel = val
    },
    //清除已完成
    delFn() {
      this.list = this.list.filter((ele) => ele.isDone == false)
    },
    // 选中状态给到头部组件
    evaluationFn(val) {
      this.list.forEach((item) => (item.isDone = val))
    },
  },
  computed: {
    current() {
      return this.list.filter((ele) => !ele.isDone).length
    },
    showSel() {
      //筛选当前状态 给到底部 显示已完成 未完成
      if (this.setSel == 'no') {
        return this.list.filter((ele) => !ele.isDone)
      } else if (this.setSel == 'yes') {
        return this.list.filter((ele) => ele.isDone)
      } else {
        return this.list
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem('list', JSON.stringify(val || []))
      },
    },
  },
}
</script>
