<template>
  <div class="index-container">
    <div class="topbar">
      <div class="menu"><van-icon name="wap-nav" size="1.5rem" /></div>
      <div class="nav">
        <router-link to="/index/my">我的</router-link>
        <router-link to="/index/find">发现</router-link>
        <router-link to="/index/village">云村</router-link>
        <router-link to="/index/mv">视频</router-link>
      </div>
      <div class="search"><van-icon name="search" size="1.3rem" /></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import url('../../assets/css/index/index.less');
</style>
