<template>
  <div class="container">
    <a-card class="custom-card" title="position 特性1.relative定位">
      <div class="content">div (static)</div>
      <div class="content">div (normal)</div>
      <a-divider></a-divider>
      <div class="content">div (static)</div>
      <div class="content relative">div (relative)</div>
    </a-card>
    <a-card class="custom-card" title="position 特性2.absolute">
      <div class="content">div (static)</div>
      <div class="content">div (normal)</div>
      <a-divider></a-divider>
      <div class="content">div (static)</div>
      <div class="content absolute">div (absolute left:0)</div>
    </a-card>
    <a-card class="custom-card" title="position 特性3.fixed">
      查看屏幕左侧
      <div class="content fixed">look at me!(fixed</div>
    </a-card>
    <a-card class="custom-card" title="position 特性4.sticky">
      <div class="sticky">查看nav</div>
    </a-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
@import "../common/style/index.less";

.relative {
  position: relative;
  left: 30px;
  top: 20px;
}

.absolute {
  position: absolute;
  left: 0;
}
.fixed {
  position: fixed;
  left: 20px;
  bottom: 200px;
}
.sticky {
  position: sticky;
  bottom: 50vh;
}
</style>