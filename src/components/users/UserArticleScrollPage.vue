<template>
  <div v-infinite-scroll="loadMore"
       class="le-user-article-scroll-page">
    <article-card v-for="(article, index) in articles" :key="index" :article="article" class="le-article-card"></article-card>
  </div>
</template>

<script>
import ArticleCard from "../article/ArticleCard";
import {getUserArticles} from "../../api/article";

export default {
  name: "UserArticleScrollPage",
  components:{
    ArticleCard
  },
  props:{
    articleType:{
      type:String,
      required:true,
      default:'liked'
    },
    userId:{
      type:String,
      required: true
    }
  },
  data(){
    return{
      articles:[],

      pageParam:{
        page:0,
        pageSize:10
      },

      getArticleList:Function
    }
  },
  methods:{
    loadMore(){
      this.pageParam.page +=1
      getUserArticles(this.userId, this.articleType, this.pageParam).then(data=>{
        if(data.data.length===0){
          this.pageParam.page-=1
          return
        }

        for(let i=0;i<data.data.length;i++){
          this.articles.push(data.data[i])
        }
      })
    },
  },
  created() {
  },
  watch:{
    userId(){
      this.loadMore()
    },
    articleType(){
      this.articles = []
      this.pageParam.page = 0
      this.loadMore()
    }
  }
}
</script>

<style scoped>
.le-user-article-scroll-page{
  overflow: auto;
}
</style>