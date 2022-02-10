<template>
  <div v-infinite-scroll="loadMore"
    class="le-article-scroll-page">
    <article-card v-for="(article, index) in articles" :key="index" :article="article" class="le-article-card"></article-card>
  </div>
</template>

<script>
import ArticleCard from "../../components/article/ArticleCard";
import {getArticleList} from "../../api/article";

export default {
  name: "ArticleScrollPage",
  components:{
    ArticleCard
  },
  props:{
    queryCondition:{
      type:Object,
      default:null,
    }
  },
  data(){
    return{
      articles:[],

      query:{
        categoryId:String,
        tagId:String,
        authorId:String,
        year:String,
        month:String
      },
      pageParam:{
        page:0,
        pageSize:10
      }
    }
  },
  methods:{
    loadMore(){
      console.log('loadmore')
      this.pageParam.page +=1
      getArticleList(this.pageParam, this.query).then(data=>{
        if(data.data.length===0){
          this.pageParam.page-=1
          return
        }

        for(let i=0;i<data.data.length;i++){
          this.articles.push(data.data[i])
        }
      })
    }
  },
  created() {
    //判断是否有传入查询条件
    if(this.queryCondition===null){
      console.log('no query condition')
    }else{
      this.query = this.queryCondition
    }
  },
  watch:{
    queryCondition(newVal){
      this.query = newVal
      this.pageParam.page = 1
      this.articles = []
      this.loadMore()
    }
  }
}
</script>

<style scoped>
.le-article-scroll-page{
  width: 780px;
  height: 840px;

  overflow: auto;
  margin: auto;
}
.le-article-scroll-page::-webkit-scrollbar{
  display: none;
}
.le-article-card{
  margin:25px auto auto;
}

</style>