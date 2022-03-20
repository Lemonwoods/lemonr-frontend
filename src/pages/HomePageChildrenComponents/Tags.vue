<template>
  <div>
    <h1 class="le_title">当前的标签为:{{}}</h1>
    <article-scroll-page :query-condition="{tagId:this.$route.params.id}"></article-scroll-page>
  </div>
</template>

<script>
import ArticleScrollPage from "./ArticleScrollPage";
export default {
  name: "Tags",
  components:{
    ArticleScrollPage
  },
  data(){
    return {
      tagName:this.$route.params.name
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
  margin: auto;
}
</style>