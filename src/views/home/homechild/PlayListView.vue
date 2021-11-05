<!--  -->
<template>
  <div class="music">
    <div class="music-top">
      <div class="title">精品歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musiclist">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in musicList">
            <img :src="item.coverImgUrl" alt="">
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';  
  import 'swiper/css/swiper.css'
  import { getPlayList } from 'network/home.js'
  export default {
    data(){
      return {
        musicList: []
      }
    },
   
    async mounted(){
      var swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 10,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
      let res = await getPlayList()
      this.musicList = res.playlists;
      //console.log(this.musicList);
      // var swiper = new Swiper('.mySwiper', {
      //   slidesPerView: 3,
      //   spaceBetween: 10,
      //   observer:true,//修改swiper自己或子元素时，自动初始化swiper
      //   observeParents:true,//修改swiper的父元素时，自动初始化swiper
      // });
 
    },
    // mounted(){
    //   getMusicList().then(res => {
    //     console.log(res.result);
    //   })
    // },
    // updated(){
    //   var swiper = new Swiper('.mySwiper', {
    //     slidesPerView: 3,
    //     spaceBetween: 10,
    //     observer:true,//修改swiper自己或子元素时，自动初始化swiper
    //     observeParents:true,//修改swiper的父元素时，自动初始化swiper
    //   });
    // }
  }
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.music {
  width: 100%;
  padding: 0 15px;
  .music-top {
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 18px;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      border-radius: 15px;
      font-size: 15px;
      height: 25px;
      width: 80px;
      text-align: center;
      line-height: 25px;
    }
  }
  .musiclist {
    overflow: hidden;
    .swiper {
      width: 100%;
      height: 150px;
      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          flex-direction: column;
          position: relative;
          img {
            width: 100%;
            height: auto;
            border-radius: 10px;
          }
          .name {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            padding: 6px 3px;
          }
          
        }
      }
    }
  }
}
</style>