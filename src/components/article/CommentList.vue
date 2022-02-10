<template>
  <div>
    <div v-infinite-scroll="loadComments"
         class="le-comment-scroll-page">
      <comment-card v-for="(comment) in comments" :key="comment.id" :comment="comment"></comment-card>
    </div>
  </div>
</template>

<script>
import CommentCard from "./CommentCard";
import {getComments} from "../../api/comment";
export default {
  name: "CommentList",
  components:{
    CommentCard
  },
  props:{
    articleId:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      comments:[],

      pageParam:{
        page:0,
        pageSize:20
      }
    }
  },
  methods:{
    loadComments(){
      this.pageParam.page+=1
      getComments(this.articleId, this.pageParam).then(data=>{
        if(data.data.length===0){
          this.pageParam.page-=1
          return
        }

        for(let i=0;i<data.data.length;i++){
          this.comments.push(data.data[i])
        }
      })
    }
  },
  mounted() {
    this.pageParam.page=0
    this.loadComments()
  }
}
</script>

<style scoped>

</style>