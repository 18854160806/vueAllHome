<template>


  <div class="todo-footer">
    <label>
      <!--占位，传递了标签就显示，不传递就不显示，用于组件的复用-->
     <!-- <input type="checkbox" v-model="isAllChecked"/>-->
      <slot name="checkAll"></slot>
    </label>
    <span>
          <!--<span>已完成{{complateSize}} / 全部{{todos.length}}</span>-->
      <slot name="count"></slot>
        </span>
   <!-- <button class="btn btn-danger" v-show="complateSize>0" @click="deleteCompleteTodos">清除已完成任务</button>-->
      <slot name="delete"></slot>
  </div>
</template>

<script>
  export default {

    //因为用到了slot组件通信，所有的计算属性等应该放到父组件当中去
   /* props:{
      todos:Array,
      deleteCompleteTodos:Function,
      selectAllTodos:Function
    },*/
   /*
   computed:{
      complateSize(){
        //如果为true则是已经完成
        return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complate?1:0),0)
      },
      isAllChecked:{
        //回调函数，当获取值的时候自动调用绑定的时候就调用了，把返回值作为属性值
        get(){
          return this.complateSize==this.todos.length && this.complateSize>0
        },
        //当属性值发生改变时候再去调用，同步更新其他属性的值
        set(value){//value是当前checkbox最新的值
          this.selectAllTodos(value)
        }
      }
    }*/
  }
</script>

<style scoped>

  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
