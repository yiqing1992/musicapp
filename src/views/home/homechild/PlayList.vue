<!--  -->
<template>
  <div class="playlist">
    <div class="music-top">
      <div class="title">精品歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="playlistcontent">
      <div class="playlist-con" v-for="item in playlist">
        <div class="list-item">
          <img :src="item.coverImgUrl" alt="">
          <div class="text">{{item.name}}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  import { getPlayList } from 'network/home.js'

  export default {
    name: '',
    components: {
    },
    data() {
      return {
        playlist: []
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    async mounted() {
      let res = await getPlayList()
      this.playlist = res.playlists
    }
  }
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.playlist {
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
  .playlistcontent {
    width: 100%;
    height: 150px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    .playlist-con {
      display: inline-block;
      height: 100%;
      .list-item {
        width: 80px;
        height:100px ;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 10px;
        img{
          width: 80px;
          height: 80px;
          border-radius: 10px;
        }
      .text {
        width: 80px;
        font-size: 14px;
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