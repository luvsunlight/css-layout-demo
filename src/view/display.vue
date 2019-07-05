<template>
  <div class="container">
    <a-card class="custom-card" title="block 特性1.占据一整行" :headStyle="headStyle">
      <div class="content">div1</div>
      <div class="content">div2</div>
    </a-card>

    <a-card class="custom-card" title="block 特性2.可以设置宽高" :headStyle="headStyle">
      <div class="content">div</div>
      <div class="content" style="height:100px">div (height:100px)</div>
    </a-card>

    <a-card class="custom-card" title="inline 特性1.不强制换行" :headStyle="headStyle">
      <span class="content">span1</span>
      <span class="content">span2</span>
    </a-card>

    <a-card class="custom-card" title="inline 特性2.具有包裹性" :headStyle="headStyle">
      <span class="content">span</span>
    </a-card>

    <a-card class="custom-card" title="inline 特性3.不能设置宽高" :headStyle="headStyle">
      <span class="content">span</span>
      <span class="content" style="height:100px">span (height:100px)</span>
    </a-card>

    <a-card class="custom-card" title="inline 特性4.具有断裂性(可跨行)" :headStyle="headStyle">
      <p class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <span
          class="inline"
        >Mauris tempus turpis id ante mollis dignissim.</span>
        Nam sed dolor non tortor lacinia lobortis id dapibus nunc.
      </p>
    </a-card>

    <a-card
      class="custom-card"
      title="inline 特性5.其margin，padding,border属性对周围的块级元素无效"
      :headStyle="headStyle"
    >
      <span class="content custom-margin">span1 (margin:20px)</span>
      <span class="content">span2</span>
      <div class="content">div</div>
    </a-card>

    <a-card class="custom-card" title="inline-block 特性1.不强制换行" :headStyle="headStyle">
      <span class="content">span</span>
      <span class="content" style="height:100px">span (height:100px)</span>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    headStyle() {
      return {
        color: "#1890ff"
      };
    }
  }
};
</script>

<style lang='less' scoped>
.custom-card {
  width: 600px;
  margin: 10px auto;

  .content {
    margin: 5px 0;
    background: #ddd;

    .inline {
      display: inline;
      border: 1px solid #000;
      background: yellow;
    }

    &.custom-margin {
      margin: 20px;
    }
  }
}
</style>