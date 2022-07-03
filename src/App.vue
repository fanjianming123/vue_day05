<template>
  <div class="todoapp">
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="listArr" @delL="delLFn"></TodoMain>
    <TodoFooter
      :count="count"
      @changeSel="changeSelFn"
      @clearSel="clearSelFn"
    ></TodoFooter>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list:
      // JSON.parse(localStorage.getItem('todolist'))||[],
       [
        { id: 100, name: '吃饭', isDone: true },
        { id: 201, name: '睡觉', isDone: false },
        { id: 103, name: '打豆豆', isDone: true },
      ],
      isSel: 'all',
    };
  },
  mounted() {},
  computed: {
    count() {
      return this.list.reduce((sum, cur) => {
        return (sum = cur.isDone ? sum : sum + 1);
      }, 0);
    },
    listArr() {
      if (this.isSel == 'yes') {
        return this.list.filter((ele) => ele.isDone);
      } else if (this.isSel == 'no') {
        return this.list.filter((ele) => !ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  methods: {
    delLFn(id) {
      this.list = this.list.filter((ele) => ele.id != id);
    },
    addFn(val) {
      // console.log('====');
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
    changeSelFn(val) {
      this.isSel = val;
    },
    clearSelFn() {
      this.list.forEach((ele) => (ele.isDone = false));
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('todolist', JSON.stringify(this.list));
      },
    },
  },
};
</script>
<style scoped></style>
