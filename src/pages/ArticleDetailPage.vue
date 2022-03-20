<template>
  <div>
    <article-detail :article-id="articleId"></article-detail>
  </div>
</template>

<script>
import ArticleDetail from "../components/article/ArticleDetail";
export default {
  name: "ArticleDetailPage",
  components:{
    ArticleDetail,
  },
  data(){
    return {
      articleId : this.$route.params.articleId
    }
  }
}
</script>

<style scoped>

</style>