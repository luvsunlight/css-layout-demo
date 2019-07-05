<template>
  <div class="container">
    <a-card class="custom-card" title="浮动 特性1.吸附">
      test content1
      <div class="content">float:left</div>test content2
      <a-divider orientation="left">after float</a-divider>test content1
      <div class="content highlight float">float:left</div>test content2
    </a-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
@import "../common/style/index.less";

.float {
  float: left;
}
</style>