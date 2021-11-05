<template>
  <div class="video">
    <nav-bar class="home-nav">
      <input type="text" slot="center" placeholder="搜索" class="nav-input">
    </nav-bar>
    <div class="video-main">
      <div class="video-item" v-for="(item, i) in mvlist" :key="i">
        <img :src="item.cover" alt="" class="video-play">
        <div class="name">{{item.name}}---{{item.artistName}}</div>
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24gl-play"></use>
          </svg>
          <span>{{changeValue(item.playCount)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import { getMV } from 'network/video.js'

  export default {
    name: '',
    components: {
      NavBar
    },
    data() {
      return {
        mvlist: []
      }
    },
    async mounted() {
      let res = await getMV()
      this.mvlist = res.data
    },
    methods:{
      changeValue(num){
        let res = 0
        if(num >= 100000000){
          res = num / 100000000
          res = res.toFixed(1) + '亿'
        }else if(num > 10000){
          res = num / 10000
          res = res.toFixed(1) + '万'
        }else if(num > 1000){
          res = num / 1000
          res = res.toFixed(1) + '千'
        }
        return res
      }
    },
  }
</script>
<style lang="less" scoped>
.video {
  .home-nav {
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
  }
  .video-main {
    height: 573px;
    margin: 0 0 49px 0;
    overflow: hidden;
    overflow-y: scroll;
    .video-item {
      width: 100%;
      padding: 10px;
      margin: 20px 0;
      height: 251px;
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .name {
        margin: 5px 0;
      }
      .count {
        position: absolute;
        left: 20px;
        bottom: 20px;
        font-size: 13px;
        color: #ccc;
        display: flex;
        align-items: center;
      }
      .icon {
        width: 15px;
        height: 15px;
        fill: #ccc;
      }
    }
  }
}

</style>