<template>
  <div>
    <h1 class="le_title">当前的分类为:{{this.categoryName}}</h1>
    <article-scroll-page :query-condition="{categoryId:this.$route.params.id}"></article-scroll-page>
  </div>
</template>

<script>
import ArticleScrollPage from "./ArticleScrollPage";
export default {
  name: "Categories",
  components: {ArticleScrollPage},
  data(){
    return {
      categoryName:this.$route.params.name
    }
  },
  watch:{
    '$route' (to, from) {
      console.log(to)
      console.log(from)
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.le_title{
  width: 300px;

  margin-left: auto;
  margin-right: auto;
}

</style>