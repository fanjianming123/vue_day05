<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="enter"
      v-model.trim="task"
    />
  </header>
</template>

<script>
export default {
  data(){
    return{
      task:''
    }
  },
  methods:{
    enter(){
      if(this.task.length==0){
        return alert("Please enter a task");
      }
      //-自定义事件
      this.$emit('add',this.task)
      this.task=''
    }
  },
    computed:{
    //计算属性
    isAll:{
      get(){
        return this.$parent.list.every((ele)=>ele.isDone)
      },
      set(checked){
        //子到父
        this.$parent.list.forEach((ele)=>(ele.isDone = checked))
      }
    }
  }
 
}
</script>