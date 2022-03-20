<template>
  <div>
    <div class="le-publish-comment-input">
      <el-input v-model="comment.content" clearable placeholder="写一点对文章的评论..."></el-input>
    </div>

    <div class="le-publish-comment-button">
      <el-button round type="primary" @click="publishComment">发表</el-button>
    </div>
  </div>

</template>

<script>
import {addComment} from "../../api/comment";
export default {
  name: "CommentInput",
  props:{
    propArticleId:{
      type:String
    }
  },
  data(){
    return{
      comment:{
        content:'',
        articleId:this.propArticleId,
        fromUid:'',
        toUid:0,
        level:1,
        createDate:'',
        parentId:0
      }
    }
  },
  methods:{
    publishComment(){
      if(this.comment.content===''){
        alert('内容不能为空')
        return
      }
      addComment(this.comment).then(()=>{
        this.$router.go(0)
      })

    }
  }
}
</script>

<style scoped>
.le-publish-comment-button{
  margin-top: 10px;
}

.le-publish-comment-button>>>.el-button{
  background-color: #B1D0E0;
  border-color: #B1D0E0;
}
.le-publish-comment-button>>>.el-button:hover{
  background-color: #6a8a96;
  border-color: #6a8a96;
}

</style>