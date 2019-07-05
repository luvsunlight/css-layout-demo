<template>
  <div class="footer">{{footerText}}</div>
</template>

<script>
export default {
  data() {
    return {
      footerText: "©️prozac <516060659@qq.com>"
    };
  }
};
</script>

<style lang='less' scoped>
@import "../common/style/index.less";

.footer {
  .text-center;
  padding: @offset-base;
  background: @color-dark;
  color: @color-light;
}
</style>