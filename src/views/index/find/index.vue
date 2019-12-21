<template>
  <div class="find-container">
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="#ff0000">
        <van-swipe-item v-for="item in bannerList" :key="item.bannerId">
          <img :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="find-menu">
      <div class="menu-item">
        <i class="iconfont icon-meirituijian" />
        <p>每日推荐</p>
      </div>
      <div class="menu-item">
        <i class="iconfont icon-mugedan" />
        <p>歌单</p>
      </div>
      <div class="menu-item" @click="goRanking">
        <i class="iconfont icon-paixingbang" />
        <p>排行榜</p>
      </div>
      <div class="menu-item">
        <i class="iconfont icon-diantai" />
        <p>电台</p>
      </div>
      <div class="menu-item">
        <i class="iconfont icon-zhibobofangshexiangjiguankanmianxing" />
        <p>直播</p>
      </div>
    </div>
    <!-- 推荐歌单 -->
    <div class="recommend-songs">
      <div class="header">
        <p>推荐歌单</p>
        <span>歌单广场</span>
      </div>
      <div class="songs-list">
        <div
          class="songs-list-item"
          v-for="item in recommendSongsList"
          :key="item.id"
        >
          <div class="cover">
            <img :src="item.picUrl" alt="" />
            <span class="playCount"
              ><van-icon name="play" />{{
                item.playCount | playCountHandle
              }}</span
            >
          </div>
          <p class="title">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 新碟 / 新歌 -->
    <div class="new-dash-songs">
      <div class="header">
        <div class="title">
          <span
            :class="{ active: isNewDashSongs }"
            @click="isNewDashSongs = true"
            >新碟</span
          >
          <i class="division">丨</i>
          <span
            :class="{ active: !isNewDashSongs }"
            @click="isNewDashSongs = false"
            >新歌</span
          >
        </div>
        <div class="more">
          <span class="more-btn" v-if="isNewDashSongs">更多新碟</span>
          <span class="more-btn" v-if="!isNewDashSongs">新歌推荐</span>
        </div>
      </div>
      <ul class="list" v-if="isNewDashSongs">
        <li class="list-item" v-for="item in newDishList" :key="item.id">
          <div class="cover">
            <img :src="item.picUrl" alt="" />
          </div>
          <p class="van-ellipsis">{{ item.name }}</p>
          <p class="artist">{{ item.artist.name }}</p>
        </li>
      </ul>
      <ul class="list" v-if="!isNewDashSongs">
        <li class="list-item" v-for="item in newSongsList" :key="item.id">
          <div class="cover">
            <img :src="item.picUrl" alt="" />
            <van-icon class="icon" name="play" />
          </div>
          <p class="van-ellipsis">{{ item.name }}</p>
          <p class="artist">{{ item.song.artists[0].name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { banner } from '@/api/other'
import { recommendSongs, newDish, newSongs } from '@/api/songs'
export default {
  data() {
    return {
      bannerList: '',
      recommendSongsList: '',
      isNewDashSongs: true,
      newDishList: '',
      newSongsList: ''
    }
  },
  methods: {
    async bannerData() {
      const { status, data } = await banner(1)
      if (status === 200 && data.code === 200) {
        this.bannerList = data.banners
      }
    },
    async getRecommendSongs() {
      const { status, data } = await recommendSongs(6)

      if (status === 200 || data.code === 200) {
        this.recommendSongsList = data.result
      }
    },
    async getNewDish() {
      const { status, data } = await newDish(3)
      if (status === 200 && data.code === 200) {
        this.newDishList = data.albums
      }
    },
    async newSongs() {
      const { status, data } = await newSongs()
      if (status === 200 && data.code === 200) {
        console.log(data)
        this.newSongsList = data.result.slice(0, 3)
      }
    },
    goRanking() {
      this.$router.push('/ranking')
    }
  },
  filters: {
    playCountHandle(count) {
      if (count > 99999 && count < 10000000) {
        return `${parseInt(count / 10000)}万`
      } else if (count > 99999999) {
        return `${Math.round((count / 100000000) * 10) / 10}亿`
      }
      return count
    }
  },
  created() {
    this.bannerData()
    this.getRecommendSongs()
    this.getNewDish()
    this.newSongs()
  }
}
</script>

<style lang="less" scoped>
@import url('../../../assets/css/index/find.less');
</style>
