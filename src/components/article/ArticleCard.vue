<template>
  <div class="le-article-card">

<!--    标题-->
    <div class="le-article-title">
      <router-link class="le-article-title-link" :to="{path:`/articles/detail/${article.id}`}">
      {{article.title}}
      </router-link>
    </div>

<!--    内容-->
    <div class="le-article-summary">
      <span class="le-article-summary-title">文章简介:</span>
      {{article.summary}}
    </div>

<!--    操作栏-->
    <div class="le-article-operate-bar">
      <span class="le-article-operate-bar-icon-label">
        <i class="el-icon-star-off"></i>
        {{article.likeCount}}
      </span>

      <span class="le-article-operate-bar-icon-label">
        <i class="el-icon-view"></i>
        {{article.viewCount}}
      </span>

      <span class="le-article-operate-bar-icon-label">
        <i class="el-icon-chat-round"></i>
        {{article.commentCount}}
      </span>

      <span class="le-article-operate-bar-text-label">
        作者:{{article.authorNickName}}
      </span>

      <span class="le-article-operate-bar-text-label">
        发布时间:{{formatTime}}
      </span>
    </div>

  </div>
</template>

<script>
import {formatDate} from "../../utils/time";
export default {
  name: "ArticleCard",
  components:{

  },
  props:{
    article:{
      type:Object,
      required:true
    },
  },
  data(){
    return {

    }
  },
  computed:{
    formatTime(){
      return formatDate(this.article.createDate)
    }
  }
}
</script>

<style scoped>
.le-article-card{
  padding: 20px;
  background: white;
  width: 694px;
  height: 226px;
  margin-top: 20px;

  box-shadow: 7px 7px 20px #d0d0d0;
  border-radius: 25px;
  border-style: dashed;
  border-color: #f1f1f1;
}

/*文章标题*/
.le-article-title>>>.le-article-title-link:link{
  text-decoration: none;
  color: black;
}
.le-article-title>>>.le-article-title-link:visited{
  text-decoration: none;
}
.le-article-title>>>.le-article-title-link:hover{
  text-decoration: none;
}
.le-article-title>>>.le-article-title-link:active{
  text-decoration: none;
  color: grey;
}
.le-article-title{
  font-size: 18px;
  font-weight: 600;
}

/*文章简介*/
.le-article-summary{
  margin-top: 9px;
  width: 654px;
  height: 50px;
  font-size: 15px;
  color: #545454;
}
.le-article-summary-title{
  font-size: 15px;
  font-weight: 600;
}
/*文章操作栏*/
.le-article-operate-bar{
  padding: 10px 20px;
  color: #b4b4b4;
}
.le-article-operate-bar-text-label{
  font-size: 10px;
  margin-left: 15px;
}
/*文章点赞*/
/*文章评论*/

</style>