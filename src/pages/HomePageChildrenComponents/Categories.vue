<template>
  <div>
    <h1>Categories</h1>
    <article-scroll-page :query-condition="{categoryId:this.$route.params.id}"></article-scroll-page>
  </div>
</template>

<script>
import ArticleScrollPage from "./ArticleScrollPage";
export default {
  name: "Categories",
  components: {ArticleScrollPage},
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

</style>