<template>
  <div>
    <h1>我是search组件</h1>
    <h1>我是params参数----{{ $route.params.keyword }}</h1>
    <h1>我是query参数---{{ $route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      k: "1",
    };
  },
};
</script>

<style scoped></style>
