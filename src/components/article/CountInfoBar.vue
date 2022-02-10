<template>
  <div class="le-count-info-bar">
    <div class="le-count-icon-and-text">

      <div class="le-center">
        <span class="el-icon-star-on le-count-icon" v-if="isLiked" @click="userCancelLikeArticle"></span>
        <span class="el-icon-star-off le-count-icon" v-else @click="userLikeArticle"></span>

        <span class="le-count-icon-text">{{likeCount}}</span>
      </div>

    </div>

    <div class="le-count-icon-and-text">
      <div class="le-center">
        <span class="el-icon-chat-round le-count-icon"></span>
        <span class="le-count-icon-text">{{commentCount}}</span>
      </div>
    </div>

    <div class="le-count-icon-and-text">
      <div class="le-center">
        <span class="el-icon-view le-count-icon"></span>
        <span class="le-count-icon-text">{{viewCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {getArticleById} from "../../api/article";
import {getIsLiked} from "../../api/article";
import {likeArticle} from "../../api/article";
import {cancelLikeArticle} from "../../api/article";
export default {
  name: "CountInfoBar",
  props:{
    articleId:{
      type:String,
    },
  },
  data(){
    return{
      likeCount:0,
      commentCount:0,
      viewCount:0,

      isLiked:false
    }
  },
  methods:{
    getCount(){
      getArticleById(this.articleId).then(data=>{
        this.likeCount = data.data.likeCount
        this.commentCount = data.data.commentCount
        this.viewCount = data.data.viewCount
      })
    },
    getIsLiked(){
      getIsLiked(this.articleId).then(data=>{
        this.isLiked = data.data
      })
    },
    userLikeArticle(){
      likeArticle(this.articleId).then(()=>{
        this.isLiked = true
        this.likeCount+=1
      })
    },
    userCancelLikeArticle(){
      cancelLikeArticle(this.articleId).then(()=>{
        this.isLiked = false
        this.likeCount-=1
      })
    }
  },
  watch:{
    articleId(){
      this.getCount()
      this.getIsLiked()
    }
  },
  created() {
    this.getCount()
    this.getIsLiked()
  }
}
</script>

<style scoped>
.le-count-info-bar{
  width: 300px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 7px 7px 15px #bdbdbd;
  margin-top: 10px;
  margin-bottom: 10px;

  margin-left: 40px;
}
.le-count-icon-and-text{
  display: inline-block;

  width: 30px;
  height: 40px;

  margin-left: 50px;
  padding-top: 5px;
}

.le-center{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center
}

.le-count-icon{
  font-size: 30px;
}

.le-count-icon-text{
  font-size: 12px;
  color: grey;

  height: 12px;
}

.el-icon-star-off::before{
  color: #e7ac2e;
}
.el-icon-star-off:hover{
  color: orange;
}
.el-icon-star-on::before{
  color: #e7ac2e;
}
.el-icon-star-on:hover{
  color: orange;
}

.el-icon-chat-round:before{
  color: #B1D0E0;
}
.el-icon-view:before{
  color: #bfe5bc;
}
</style>