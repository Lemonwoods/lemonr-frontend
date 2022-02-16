<template>
  <div class="le-hot48-hours-card">
    <div>
      <article-title-card v-for="article in articles" :key="article.id" :article-id="article.id" :title="article.title"></article-title-card>
    </div>
  </div>
</template>

<script>
import ArticleTitleCard from "./ArticleTitleCard";

export default {
  name: "Hot48HoursCard",
  components:{
    ArticleTitleCard
  },
  data(){
    return {
      articles:[
        {
          id:1,
          title:'hello'
        },
        {
          id:2,
          title:'hello'
        },
        {
          id:3,
          title:'hello'
        },
        {
          id:4,
          title:'hello'
        },
      ]
    }
  }
}
</script>

<style scoped>
.le-hot48-hours-card{
  width: 500px;
  height: 800px;

  box-shadow: 7px 7px 20px #d0d0d0;
  border-radius: 25px;
}

</style>