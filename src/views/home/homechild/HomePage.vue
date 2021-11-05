<!--  -->
<template>
 <div>
   <!-- <img src="http://p1.music.126.net/_mmo5i3rqky4GqbAeiC73A==/109951166509970162.jpg" alt=""> -->
 </div>
</template>

<script>
  import { getHomePage } from 'network/home.js'
  export default {
    name: '',
    components: {
    },
    data() {
      return {

      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      getHomePage().then(res => {
        console.log(res);
      })
    }
  }
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>