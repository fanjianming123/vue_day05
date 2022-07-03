<template>
  <header class="header">
    <h1>todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="checkAll"
    />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="msg"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    enter() {
      // console.log('===');
      if (this.msg.length == 0) return alert('Please enter');
      this.$emit('add', this.msg);
      this.msg = '';
    },
  },
  computed: {
    checkAll: {
      set(val) {
         this.$parent.list.forEach((ele) => (ele.isDone = val));
      },
      get() {
        return this.$parent.list.every((ele) => ele.isDone);
      },
    },
  },
};
</script>
