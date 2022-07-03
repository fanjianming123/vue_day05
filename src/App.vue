<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="list" @del="delFn"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import './assets/styles/base.css'
import './assets/styles/index.css'

import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

export default {
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 101, name: '睡觉', isDone: false },
        { id: 102, name: '打豆豆', isDone: true },
      ],
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    //增加
    addFn(val) {
      // console.log(val);
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100
      this.list.push({
        id,
        name: val,
        isDone: false,
      })
    },
    //删除
    delFn(id) {
      this.list=this.list.filter((ele) => ele.id !== id)
    },
  },
}
</script>
