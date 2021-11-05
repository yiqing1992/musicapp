<!--  -->
<template>
  <div class="newsong">
    <div class="newsong-top">
      <div class="title">活力无限</div>
      <div class="more">播放全部</div>
    </div> 
    <div class="newsonglist">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="newsong-item" v-for="item in list1">
               <div class="left">
                 <img :src="item.picUrl" alt="">
               </div>
               <div class="center">{{item.name}}---{{item.song.artists[0].name}}</div>
               <div class="right">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
               </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="newsong-item" v-for="item in list2">
               <div class="left">
                 <img :src="item.picUrl" alt="">
               </div>
               <div class="center">{{item.name}}---{{item.song.artists[0].name}}</div>
               <div class="right">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
               </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="newsong-item" v-for="item in list3">
               <div class="left">
                 <img :src="item.picUrl" alt="">
               </div>
               <div class="center">{{item.name}}---{{item.song.artists[0].name}}</div>
               <div class="right">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
  import Swiper from 'swiper';  
  import 'swiper/css/swiper.css'
  import { getNewSong } from 'network/home.js'
  export default {
    name: '',
    components: {
    },
    data() {
      return {
        list1: [],
        list2: [],
        list3: [],
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    async mounted() {
      var swiper = new Swiper('.mySwiper', {
        width: 310,
        spaceBetween: 10,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
      let res = await getNewSong()
      //console.log(res.result);
      let arr = res.result
      for(let i =0; i < arr.length; i++){
        if(i < 3){
          this.list1.push(arr[i])
        }else if(i < 6){
          this.list2.push(arr[i])
        }else if(i < 9){
          this.list3.push(arr[i])
        }
      } 
      //console.log(this.list1);
      // console.log(this.list2);
      // console.log(this.list3);
      // var swiper = new Swiper('.mySwiper', {
      //   width: 310,
      //   spaceBetween: 10,
      //   observer:true,//修改swiper自己或子元素时，自动初始化swiper
      //   observeParents:true,//修改swiper的父元素时，自动初始化swiper
      // });
    },
    updated(){
      var swiper = new Swiper('.mySwiper', {
        width: 310,
        spaceBetween: 10,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
    }
  }
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.newsong {
  width: 100%;
  padding: 0 15px;
  margin: 15px 0;
  .newsong-top {
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
  .newsonglist {
    overflow: hidden;
    .swiper {
      width: 100%;
      height: 150px;
      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          flex-direction: column;
          align-content: space-around;
          .newsong-item {
            display: flex;
            justify-content: space-between;
            margin: 3px 0;
            .left {
              width: 40px;
              height: 40px;
              img {
                width: 100%;
                height: auto;
                border-radius: 6px;
              }
            }
            .center {
              flex: 1;
              padding: 0 10px;
              line-height: 40px;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
            .right {
              width: 25px;
              height: 25px;
              .icon {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>