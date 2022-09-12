<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav/";
import ListContainer from "./ListContainer/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Recommend from "./Recommend/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";

export default {
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
    Rank,
    Like,
    Recommend,
    Brand,
    Brand,
    Recommend,
    Floor,
  },
};
</script>

<style scoped lang="less"></style>
