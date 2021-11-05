<!--  -->
<template>
  <div class="icon-list">
    <div class="icon-contant">
      <ul class="ball-icon" v-for="(item,i) in iconlist" :key="i">
        <li class="icon-item">
          <div class="icon">
            <img :src="item.iconUrl" alt="">
          </div>
          <span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import { getball } from 'network/home.js'
  export default {
    name: '',
    components: {
    },
    data() {
      return {
        iconlist: [{}]
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    async mounted() {
      let res = await getball()
      this.iconlist = res.data
      //console.log(this.iconlist);
    },

  }
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.icon-list {
  height: 100px;
  overflow: hidden;
  .icon-contant {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 25px;
  margin-left: 7px;
}
.ball-icon {
  display: inline-block;
 
  
  margin-top: 15px;
  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
  }
  .icon {
    background-color: rgb(71, 71, 71);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    font-size: 14px;
    margin-top: 8px;
  }
}
}

</style>