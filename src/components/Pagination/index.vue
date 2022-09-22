<template>
  <div class="pagination">
    <button v-if="curPage != 1" @click="$emit('getPageNo', curPage - 1)">
      上一页
    </button>
    <button v-if="startAndEndPage.startPage > 1" @click="$emit('getPageNo', 1)">
      1
    </button>

    <button v-if="startAndEndPage.startPage > 2">···</button>
    <button
      v-for="(pageNum, index) in startAndEndPage.endPage"
      :key="index"
      v-if="pageNum >= startAndEndPage.startPage"
      @click="$emit('getPageNo', pageNum)"
      :class="{ active: pageNum == curPage }"
    >
      {{ pageNum }}
    </button>

    <button v-if="startAndEndPage.endPage < totalPage">···</button>
    <button
      v-if="startAndEndPage.endPage != totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      v-if="curPage != totalPage"
      @click="$emit('getPageNo', curPage + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total", "startPage", "endPage", "continues", "pageSize", "curPage"],

  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startAndEndPage() {
      const { continues, curPage, totalPage } = this;
      let startPage = 0;
      let endPage = 0;
      // 总页面数小于 5 页
      if (totalPage < continues) {
        startPage = 1;
        endPage = totalPage;
      } else {
        startPage = curPage - parseInt(continues / 2);
        endPage = curPage + parseInt(continues / 2);
        if (startPage < 1) {
          startPage = 1;
          endPage = continues;
        }
        if (endPage > totalPage) {
          endPage = totalPage;
          startPage = totalPage - continues;
        }
      }
      return { startPage, endPage };
      // 总页面数大于 5 页
    },
  },
  methods: {
    printData() {
      console.log(startAndEndPage);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
