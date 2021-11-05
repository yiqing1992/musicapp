<template>
  <div id="app">
    <main-tab-bar class="main"></main-tab-bar>
    <router-view/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    mounted(){
      let userData = JSON.parse(localStorage.userData) 
      //console.log(userData);
      this.$store.commit('setUser', userData)
    }
  }
</script>

<style lang="less">
  @import 'assets/css/base.css';
  #app {
    background-color: #151515;
    box-sizing: border-box;
    .main {
      z-index: 9;
    }
  }

</style>
