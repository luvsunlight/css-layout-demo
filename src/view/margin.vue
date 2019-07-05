<template>
  <div class="container">
    <a-card class="custom-card" title="margin 特性1.外边距折叠">
      <div class="content">div1 (margin:0)</div>
      <div class="content">div2 (margin:0)</div>
      <a-divider></a-divider>
      <div class="content" style="margin: 10px 0">div1 (margin:10px)</div>
      <div class="content">div2 (margin:0)</div>
      <a-divider></a-divider>
      <div class="content" style="margin: 10px 0">div1 (margin:10px)</div>
      <div class="content" style="margin: 20px 0">div2 (margin:20px)</div>总间距20px
    </a-card>
    <a-card class="custom-card" title="margin 特性2.负边距">
      <div class="content" style="margin-left:-20px">div1 (margin:-20px)</div>
      <div class="content">div2 (margin:0)</div>
    </a-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
@import "../common/style/index.less";

.custom-card .content {
  margin: 0;
}
</style>