<template>
  <div class="ranking-container">
    <div class="nav-bar">
      <van-icon @click="backPrevPage" class="back-icon" name="arrow-left" />
      <span class="title">排行榜</span>
    </div>
    <div class="list">
      <h2>官方榜</h2>
      <div class="content">
        <div class="cover">
          <img :src="this.soaringList.coverImgUrl" alt="" />
          <span></span>
        </div>
        <ol class="ranking">
          <li v-for="item in soaringList.tracks" :key="item.id"></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { rankingList } from '@/api/songs'
export default {
  data() {
    return {
      soaringList: ''
    }
  },
  methods: {
    backPrevPage() {
      this.$router.push('/index')
    },
    async getSoaringList() {
      let {
        status,
        data: {
          playlist: { tracks, coverImgUrl }
        }
      } = await rankingList(3)

      tracks = tracks.slice(0, 3)

      if (status === 200) {
        this.soaringList = { tracks, coverImgUrl }
      }
    }
  },
  created() {
    this.getSoaringList()
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/ranking/ranking.less');
</style>
