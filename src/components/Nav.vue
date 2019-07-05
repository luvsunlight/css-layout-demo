<template>
  <div class="nav">
    <a href="https://github.com/luvsunlight/css-layout-demo" target="_blank">
      {{navText}}
      <a-icon type="github"></a-icon>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return { navText: "css-layout-demo" };
  }
};
</script>

<style lang='less' scoped>
@import "../common/style/index.less";

.nav {
  .text-center;
  padding: @offset-small;
  background: @color-primary;
  opacity: 0.95;
  color: @color-light;
  font-size: @offset-base;
  z-index: @z-index-max;
  a {
    color: @color-light;
  }
}
</style>