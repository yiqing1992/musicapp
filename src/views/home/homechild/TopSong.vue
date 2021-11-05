<!--  -->
<template>
  <div class="topsong">
    <div class="music-top">
      <div class="title">精品歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="topcontent">
      <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
        <swiper-slide v-for="(item, i) in musiclist" :key="i" class="swiper-item">
          <img :src="item.coverImgUrl" alt="">
          <div class="name">{{item.name}}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import { getPlayList } from 'network/home.js'
  export default {
    name: '',
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 3,
          spaceBetween: 10,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        },
        musiclist: []
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    async mounted() {
      let res = await getPlayList()
      this.musiclist = res.playlists
    }
  }
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.topsong {
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
  .topcontent {
    height: 150px;
    .swiper {
      .swiper-item {
        display: flex;
        flex-direction: column;
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
</style>