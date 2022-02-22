<template>
  <div class="le-hot48-hours-card">
    <div>
      <article-title-card class="le-center" v-for="article in articles" :key="article.id" :article-id="article.id" :title="article.title"></article-title-card>
    </div>
  </div>
</template>

<script>
import ArticleTitleCard from "./ArticleTitleCard";
import {get48HoursHot, get10DaysHot} from "../../api/article";

export default {
  name: "Hot48HoursCard",
  components:{
    ArticleTitleCard
  },
  props:{
    timeType:{
      type:String
    }
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
  },
  methods:{
    loadArticle(){
      if(this.timeType==='48'){
        get48HoursHot().then(data=>{
          this.articles = data.data
        })
      }else{
        get10DaysHot().then(data=>{
          this.articles = data.data
        })
      }
    }
  },
  mounted() {
    this.loadArticle()
  }
}
</script>

<style scoped>
.le-hot48-hours-card{
  width: 500px;
  height: 800px;

  box-shadow: 7px 7px 20px #d0d0d0;
  border-radius: 25px;

  padding: 20px;
}
.le-center{
  margin-left: auto;
  margin-right: auto;
}

</style>