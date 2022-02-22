<template>
  <div class="le-article-title-card">
    <router-link :to='articlePath' class="le-article-title-card-title">{{title}}</router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleTitleCard",
  props:{
    articleId:{
      type:String,
    },
    title:{
      type:String,
    },
  },
  data(){
    return{
      articlePath:`/articles/detail/${this.articleId}`
    }
  }
}
</script>

<style scoped>
.le-article-title-card{
  height: 50px;
  width: 480px;

  box-shadow: 7px 7px 20px #d0d0d0;
  border-radius: 25px;

  margin-bottom: 15px;
  margin-top: 5px;
}
.le-article-title-card-title{
  margin-top: auto;
  margin-bottom: auto;

  padding-left: 20px;
}
</style>