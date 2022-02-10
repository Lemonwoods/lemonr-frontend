<template>
  <div>
    <article-card v-for="(article, index) in articles" :key="index" :article="article"></article-card>
    <el-pagination
        :total="total"
        @current-change="currentChange"
        @prev-click="prevClick"
        @next-click="nextClick">

    </el-pagination>
  </div>
</template>

<script>
import {getUserPublishedArticles, getUserCommentedArticles, getUserLikedArticles} from "../../api/article";

export default {
  name: "UserArticleList",
  props:{
    articleType:{
      type:String,
      required:true,
    },
    userId:{
      type:String,
      required: true,
    }
  },
  data(){
    return {
      total:Number,

      pageParam:{
        page:Number,
        pageSize:10
      },
      query:{
        categoryId:String,
        tagId:String,
        authorId:String,
        year:String,
        month:String
      },
      articles:Array,
      getArticles:null
    }
  },
  watch:{
    articleType(newVal){
      if(newVal==='like'){
        this.getArticles=this.userLiked
      }else if(newVal === 'comment'){
        this.getArticles=this.userCommented
      }else{
        this.getArticles = this.userPublished
      }

      this.pageParam.page=1
    }
  },
  methods:{
    userLiked(){
      getUserLikedArticles(this.userId, this.pageParam).then(data=>{
        this.articles = data.data
      })
    },
    userCommented(){
      getUserCommentedArticles(this.userId, this.pageParam).then(data=>{
        this.articles = data.data
      })
    },
    userPublished(){
      getUserPublishedArticles(this.userId, this.pageParam).then(data=>{
        this.articles = data.data
      })
    },
    currentChange(currentPage){
      this.pageParam.page = currentPage
      this.getArticles()
    },
    prevClick(){
      this.pageParam.page = this.pageParam.page-1
      this.currentChange(this.pageParam.page)
    },
    nextClick(){
      this.pageParam.page = this.pageParam.page+1
      this.currentChange(this.pageParam.page)
    }
  },
  mounted() {
    //判断是否有传入查询条件
    if(this.queryCondition===null){
      console.log('')
    }else{
      this.query = this.queryCondition
    }

    //每次挂载就获取所有的文章
    this.getArticles()
    this.getTotalCount()
  }
}
</script>

<style scoped>

</style>