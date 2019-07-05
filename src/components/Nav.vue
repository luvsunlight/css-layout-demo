<template>
  <div class="nav">
    <a href></a>
    {{navText}}
    <a-icon class="nav-icon" type="github"></a-icon>
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
@color-primary: #1890ff;
.nav {
  padding: 10px;
  //   border-bottom: 1px solid @color-primary;
  color: @color-primary;
  font-size: 20px;
  text-align: center;

  &-icon {
  }
}
</style>