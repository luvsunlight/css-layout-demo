<template>
  <div class="container">
    <a-card class="custom-card" title="grid 特性1. template">
      <div class="grid">
        <div v-for="item in list" :key="item" class="item">{{item}}</div>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>

<style lang='less' scoped>
@import "../common/style/index.less";

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px 5px;
}
.item {
  background: @color-grey;
  text-align: center;
  line-height: 50px;
}
</style>