<template>
  <div id="app">
    <Nav></Nav>
    <a-menu v-model="current" mode="horizontal" @click="handleClick" class="menu">
      <a-menu-item key="display">
        <a-icon type="setting"></a-icon>display
      </a-menu-item>
      <a-menu-item key="position">
        <a-icon type="setting"></a-icon>position
      </a-menu-item>
      <a-menu-item key="float">
        <a-icon type="setting"></a-icon>float
      </a-menu-item>
      <a-menu-item key="margin">
        <a-icon type="setting"></a-icon>margin
      </a-menu-item>
      <a-menu-item key="flex">
        <a-icon type="setting"></a-icon>flex
      </a-menu-item>
      <a-menu-item key="grid">
        <a-icon type="setting"></a-icon>CSS Grid
      </a-menu-item>
      <a-menu-item key="align">
        <a-icon type="setting"></a-icon>对齐
      </a-menu-item>
    </a-menu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: { Nav, Footer },
  data() {
    return {
      current: ["display"]
    };
  },
  watch: {
    "$route.name"(path) {
      console.log(path);
      this.current[0] = path;
    }
  },
  methods: {
    handleClick(e) {
      this.$router.push(e.key);
    }
  }
};
</script>

<style lang="less">
@import "common/style/index.less";

* {
  &::-webkit-scrollbar {
    width: 10px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #dfe6e9;
  }
}

.menu {
  position: sticky;
  top: 0;
  box-shadow: 0 1px 5px #ddd;
  z-index: @z-index-max;
}
</style>
