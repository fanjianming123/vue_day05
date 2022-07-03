<template>
  <div class="todoapp">
    <TodoHeader @add="addFn" ></TodoHeader>
    <!-- @setchecked="setcheckedFn" -->
    <TodoMain :list="showList" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @filterdata="filterdataFn"
      @clear="clearFn"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      // list: [
      //   { id: 100, name: '吃饭', isDone: true },
      //   { id: 101, name: '睡觉', isDone: false },
      //   { id: 102, name: '打豆豆', isDone: true },
      // ],
      getSel: 'all',
    };
  },
  methods: {
    addFn(val) {
      // console.log(val);
      const id = this.list[this.list.length - 1]?.id + 1 || 100;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
    delFn(val) {
      // console.log(val);
      this.list = this.list.filter((ele) => ele.id != val);
    },
    filterdataFn(val) {
      this.getSel = val;
    },
    clearFn() {
      this.list = this.list.filter((ele) => !ele.isDone);
    },
    // setcheckedFn(val){
    //   this.list.forEach(ele => ele.isDone = val);
    // }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  computed: {
    count() {
      //统计剩余条数
      // return this.list.filter(ele => !ele.isDone ).length
      return this.list.reduce(
        (sum, item) => (sum = item.isDone ? sum : sum + 1),
        0
      );
    },
    showList() {
      if (this.getSel == 'no') {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getSel == 'yes') {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem('list', JSON.stringify(val || []));
      },
    },
  },
};
</script>

<style></style>
