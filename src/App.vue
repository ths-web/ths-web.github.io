<template>
  <!-- container -->
  <div id="hpb-container">
    <Header></Header>
    <!-- inner -->
    <div id="hpb-inner">
      <router-view></router-view>
      <Navi></Navi>
      <Aside></Aside>
    </div>
    <!-- inner end -->
    <Footer></Footer>
  </div>
  <!-- container end -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Navi from "./components/Navi.vue";
import Aside from "./components/Aside.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Navi,
    Aside,
    Footer,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
