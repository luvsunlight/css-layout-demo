<template>
  <div id="app">
    <Nav></Nav>
    <a-menu v-model="current" mode="horizontal" @click="handleClick">
      <a-menu-item key="display">
        <a-icon type="setting"></a-icon>display
      </a-menu-item>
      <a-menu-item key="position">
        <a-icon type="setting"></a-icon>position
      </a-menu-item>
      <a-menu-item key="float">
        <a-icon type="setting"></a-icon>float
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
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "app",
  components: { Nav },
  data() {
    return {
      current: ["display"]
    };
  },
  methods: {
    handleClick(e) {
      this.$router.push(e.key);
    }
  }
};
</script>

<style lang="less">
</style>
