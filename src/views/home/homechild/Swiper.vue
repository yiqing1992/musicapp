<!--  -->
<template>
  <div class="home-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swipercom"  v-for="(item, i) in imgs" :key="i">
        <img :src="item.pic" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import { getbanner } from 'network/home.js'

 export default {
 name: '',
 components: {
  Swiper,
  SwiperSlide
 },
 data() {
   return {
     imgs: [
      {pic: require('assets/img/banner/1.jpg')},
      {pic: require('assets/img/banner/2.jpg')},
      {pic: require('assets/img/banner/3.jpg')},
      {pic: require('assets/img/banner/4.jpg')}
     ],
    swiperOptions: {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // Some Swiper option/callback...
    }
   }
 },
  directives: {
    swiper: directive
  },

//生命周期 - 创建完成（访问当前this实例）
created() {
  
 },
//生命周期 - 挂载完成（访问DOM元素）
 async mounted() {
  // getbanner(2).then(res=>{
  //   console.log(res.banners);
  // }) 
  let res = await getbanner()
  this.imgs = res.banners
 }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.home-swiper{
  margin-top: 15px;
  width: 100%;
  padding: 0 20px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
}
</style>