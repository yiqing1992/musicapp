<!--  -->
<template>
 <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
  }
</script>
<style scoped>
/* @import url(); 引入css类 */
  #tab-bar {
    display: flex;
    background-color: #252323;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, .2);
  }
</style>