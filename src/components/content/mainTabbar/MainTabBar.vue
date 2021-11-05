<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/faxian.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/faxian_1.svg" alt="">
      <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/video">
      <img slot="item-icon" src="~assets/img/tabbar/shipin.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shipin_1.svg" alt="">
      <div slot="item-text">视频</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/wode.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/wode_1.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
