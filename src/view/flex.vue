<template>
  <div class="container">
    <a-card class="custom-card" title="flex 特性1. flex-direction">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png" alt />
    </a-card>
    <a-card class="custom-card" title="flex 特性2. flex-wrap">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png" alt />
    </a-card>
    <a-card class="custom-card" title="flex 特性3. justify-content">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png" alt />
    </a-card>
    <a-card class="custom-card" title="flex 特性4. align-items">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt />
    </a-card>
    <a-card class="custom-card" title="flex 特性5. align-content">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt />
    </a-card>
    <a-card class="custom-card" title="flex 特性6. order">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png" alt />
    </a-card>
    <a-card class="custom-card" title="flex 特性7. flex-grow">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png" alt />
    </a-card>
    <a-card class="custom-card" title="flex 特性8. flex-shrink">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg" alt />
    </a-card>
    <a-card class="custom-card" title="flex 特性9. align-self">
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png" alt />
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  }
};
</script>

<style lang='less' scoped>
@import "../common/style/index.less";

img {
  width: 100%;
}
</style>