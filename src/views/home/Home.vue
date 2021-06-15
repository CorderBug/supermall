<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners = "banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import {getHomeMultidate} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 获取展示数据
      getHomeMultidate().then(res => {
        // this.result = res
        this.banners = res.data.banner.list,
        this.recommends = res.data.recommend.list
        // console.log(res);
      })
    }
  }
</script>

<style scoped>
  /* #home {
    height: 100vh;
    position: relative;
  } */

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
