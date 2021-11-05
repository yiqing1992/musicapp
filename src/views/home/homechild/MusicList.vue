<!--  -->
<template>
  <div class="music">
    <div class="music-top">
      <div class="title">推荐歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musiclist">
      <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
        <swiper-slide v-for="(item, i) in musicList" :key="i" class="swiper-item">
          <img :src="item.picUrl" alt="">
          <div class="name">{{item.name}}</div>
          <div class="count">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gl-play"></use>
            </svg>
            <span>{{changeValue(item.playCount)}}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import { getMusicList } from 'network/home.js'
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data(){
      return {
        swiperOptions: {
          slidesPerView: 3,
          spaceBetween: 10,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        },
        musicList: []
      }
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
    created() {
      
    },
    async mounted(){
      let res = await getMusicList()
      this.musicList = res.result;
      //console.log(this.musicList);
      
 
    },
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
    height: 150px;
    .swiper-item {
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
      .count {
        position: absolute;
        right: 2px;
        top: 2px;
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