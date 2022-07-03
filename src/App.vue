<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn"></TodoHeader>
    <!-- @setchecked="setcheckedFn" -->
    <TodoMain :list="showlist" @del="delFn"></TodoMain>
    <TodoFooter :count="count" @clear="clearFn" @filterdata="filterdataFn"></TodoFooter>
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
      // list: [
      //   { id: 100, name: '吃饭', isDone: true },
      //   { id: 201, name: '睡觉', isDone: false },
      //   { id: 103, name: '打豆豆', isDone: true },
      // ],
      list:JSON.parse(localStorage.getItem('list'))||[],
      getSel:"all",
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100
      this.list.push({
        name: val,
        isDone: false,
        id,
      })
    },
    delFn(id) {
      // const index=this.list.findIndex((ele)=>ele.id==id)
      // this.list.splice(index,1)
      this.list = this.list.filter((ele) => ele.id !== id)
    },
    filterdataFn(val){
      //根据val list
      console.log(val);
      this.getSel=val
      //list 是不是根据 val不同值 显示不同的list
    },
    clearFn(){
      this.list.forEach((ele)=>(ele.isDone=false))
    },
    // setcheckedFn(val){
    //   this.list.forEach((ele)=>(ele.isDone=val))
    // }
  },
  computed: {
    //统计剩余数量
    count() {
      // return this.list.filter((ele) => !ele.isDone).length
      return this.list.reduce((sum, item) => {
        return (sum = item.isDone ? sum : sum+1)
      },0)
    },
    showlist(){
      if(this.getSel=='no'){
        return this.list.filter((ele)=>!ele.isDone)
      }else if(this.getSel=='yes'){
        return this.list.filter((ele)=>ele.isDone)
      }else{
        return this.list
      }
    }
  },
  watch:{
    list:{
      deep:true,
      handler(val){
        localStorage.setItem('list',JSON.stringify(val ||[]))
      }
    }
  }
}
</script>
