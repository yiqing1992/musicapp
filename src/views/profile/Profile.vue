<!--  -->
<template>
  <div class="me">
    <nav-bar class="home-nav"></nav-bar>
    <div class="me-mian">
      <div class="user">
        <div class="left">
          <div class="touxiang">
            <img :src="$store.state.user.userDetail.profile.avatarUrl" alt="">
          </div>
          <div class="name">
            <div class="username">日落千年</div>
            <div class="leave">Lv-9</div>
          </div>
        </div>
        <div class="right">
          <span>VIP首月3.99元</span>
        </div>
      </div>
      <div class="tubiao">
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiazai1"></use>
          </svg>
          <span>本地音乐</span>
        </div>
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yinle"></use>
          </svg>
          <span>我的电台</span>
        </div>
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>我的收藏</span>
        </div>
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ico_tongxinyuanbuju"></use>
          </svg>
          <span>关于新歌</span>
        </div>
      </div>
      <div class="ower">
        <div class="top">
          <span>我的音乐</span>
        </div>
        <div class="center">
          <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
            <swiper-slide class="swiper-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-aixin"></use>
              </svg>
              <span>我喜欢的音乐</span>
            </swiper-slide>
            <swiper-slide class="swiper-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mianxingshizixingzuanshishuijing"></use>
              </svg>
              <span>私人FM</span>
            </swiper-slide>
            <swiper-slide class="swiper-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mianxingbabianlingxingxingzuanshishuijing"></use>
              </svg>
              <span>电音专区</span>
            </swiper-slide>
            <swiper-slide class="swiper-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mianxingshierbianlingxingzuanshishuijingde"></use>
              </svg>
              <span>最嗨电音</span>
            </swiper-slide>
            <swiper-slide class="swiper-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mianxingxinxingzuanshishuijing"></use>
              </svg>
              <span>音乐罐子</span>
            </swiper-slide>
          </swiper>
        </div>
        <div class="bottom">
          <div class="text">我的歌单</div>
          <div class="songlist">
            <div class="list-item" v-for="item in $store.state.user.userSong.playlist">
              <img :src="item.coverImgUrl" alt="">
              <div class="songname">
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import NavBar from 'components/common/navbar/NavBar';

  export default {
    name: '',
    components: {
      NavBar,
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
        songlist: []
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      this.songlist =JSON.parse(localStorage.userData) 
      // console.log(this.songlist);
    }
  }
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.me {
  box-sizing: border-box;
  
  .me-mian {
    height: 573px;
    margin: 0 0 49px 0;
    overflow: hidden;
    overflow-y: scroll;
    .user {
      display: flex;
      justify-content: space-between;
      height: 60px;
      .left {
        display: flex;
        flex-direction: row;
        width: 150px;
        margin-left: 15px;
        .touxiang {
          width: 60px;
          height: 60px;
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .name {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-content: space-around;
          align-items: center;
          margin-left: 5px;
          .username {
            font-size: 19px;
            font-weight: 900;
          }
          .leave {
            border-radius: 15px;
            padding: 0 6px;
            background-color: #aaa;
          }
        }
      }
      .right{
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          margin-right: 15px;
        }
      }
    }
    .tubiao {
      display: flex;
      width: 100%;
      padding: 20px 15px;
      .icon-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 30px;
          height: 30px;
          fill: #fff;
        }
        span {
          margin: 5px 0;
          font-size: 14px;
        }
      }
    }
    .ower {
      height: 100%;
      //background-color: #ccc;
      border-top: 1px solid #aaa;
      border-radius: 20px 20px 0 0;
      .top {
        margin: 15px 15px;
        span {
          font-size: 19px;
          font-weight: 900;
        }
      }
      .center {
        width: 100%;
        height: 150px;
        margin: 0 15px;
        .swiper {
          height: 100%;
          .swiper-item {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #ccc;
            border-radius: 11px;
            .icon {
              width: 37px;
              height: 37px;
            }
            span {
              font-size: 15px;
            }
          }
        }
      }
      .bottom {
        width: 100%;
        height: 100%;
        margin: 20px 15px;
        .text {
          font-weight: 900;
        }
        .songlist {
          width: 100%;
          height: 100%;
          margin-top: 15px;
          display: flex;
          flex-flow: row wrap;
          .list-item {
            width: 50%;
            height: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 10px;
            img {
              width: 60px;
              height: 60px;
              border-radius: 11px;
            }
            .songname {
              display: flex;
              justify-content: center;
              align-items: center;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              padding: 0 8px 0 8px;
              span {
                font-size: 14px;
                
              };
            }
          }
        }
      }
    }
  }
}
</style>