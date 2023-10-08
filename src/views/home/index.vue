<template>
  <div class="home">
    <home-tab-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner01.jpeg" alt="" />
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <div class="text">我的位置</div>
        <van-icon name="location-o" />
      </div>
    </div>
  </div>
</template>
<script setup>
import HomeTabBar from './cpns/home-tab-bar.vue'
</script>
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
    margin-bottom: 10px;
  }
  .location {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 16px;
    .city {
      flex: 1;
    }
    .position {
      display: flex;
      align-items: center;
      width: 100px;
      box-sizing: border-box;
      .text {
        margin-right: 5px;
      }
    }
  }
}
</style>
