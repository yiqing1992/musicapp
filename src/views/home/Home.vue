<template>
  <div class="home">
    <nav-bar class="home-nav">
      <input type="text" slot="center" placeholder="搜索" class="nav-input">
    </nav-bar>
    <div class="home-main">
      <swiper class="swiper"></swiper>
      <ball-icon/>
      <music-list></music-list>
      <new-song></new-song>
      <top-song></top-song>
    </div>
    
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import Swiper from './homechild/Swiper.vue'
  import BallIcon from './homechild/BallIcon.vue'
  import MusicList from './homechild/MusicList.vue'
  import NewSong from './homechild/NewSong.vue'
  import TopSong from './homechild/TopSong.vue'

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper,
      BallIcon,
      MusicList,
      NewSong,
      TopSong
    },
    data() {
      return  {
        
      }
    },
   
  }
</script>

<style lang="less" scoped>
.home {
  margin-bottom: 50px;
  .nav-input {
    display: inline-block;
    height: 40px;
    width: 100%;
    border-radius: 20px;
    border: none;
    line-height: 40px;
    text-align: center;
    background-color: #202020;
  }
  .home-main {
    height: 573px;
    margin: 0 0 49px 0;
    overflow: hidden;
    overflow-y: scroll;
  }
}
  
 
</style>
