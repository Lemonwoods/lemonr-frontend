<template>
  <div class="le-article-detail">
    <div class="le-article-title">
      {{article.title}}
    </div>

    <el-row class="le-article-detail-user-count-bar">
      <el-col class="le-article-info-label" span="12">
        <user-info-card :user-id="article.authorId"></user-info-card>
      </el-col>

      <el-col class="le-article-info-label le-article-detail-count-info-bar" span="12">
        <count-info-bar :article-id="articleId"></count-info-bar>
      </el-col>
    </el-row>

    <div class="le-article-summary">
      <span class="le-article-summary-text">简介:</span>
      {{article.summary}}
    </div>

    <div class="le-article-content">
      <p v-html="article.content"></p>
    </div>

    <div class="le-article-detail-comment-title">
      <span>文章评论</span>
    </div>

    <div>
      <comment-input></comment-input>
    </div>

    <div>
      <comment-list :article-id="articleId"></comment-list>
    </div>

  </div>
</template>

<script>
import {getArticleById} from "../../api/article";
import CountInfoBar from "./CountInfoBar";
import UserInfoCard from "../users/UserInfoCard";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
export default {
  name: "ArticleDetail",
  components:{
    UserInfoCard,
    CommentList,
    CountInfoBar,
    CommentInput
  },
  props:{
    articleId:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      article:Object,
      comments:Array
    }
  },
  methods:{
    getArticle(){
      getArticleById(this.articleId).then(data=>{
        this.article = data.data
      })
    }
  },
  created() {
    this.getArticle()
  }
}
</script>

<style scoped>
.le-article-detail{
  width: 690px;
  margin-left: auto;
  margin-right: auto;
}

.le-article-title{
  padding-left: 10px;
  font-size: 30px;
  font-weight: 600;
}

.le-article-detail-user-count-bar{
  position: relative;
}
.le-article-detail-count-info-bar{
}

.le-article-summary-text{
  font-weight: 600;
}
.le-article-summary{
  height: auto;
  background-color: #728491;

  border-radius: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;

  color: white;
}

.le-article-content{
  height: auto;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.le-article-detail-comment-title{
  font-size: 24px;
  font-weight: 600;

  margin-bottom: 10px;
}
</style>