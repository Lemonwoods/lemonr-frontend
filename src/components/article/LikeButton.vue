<template>
  <div>
    <el-button v-if="likeState" icon="el-icon-star-on" type="primary" round @click="buttonClike">{{count}}</el-button>
    <el-button v-else icon="el-icon-star-off" round @click="buttonClike">{{count}}</el-button>
  </div>
</template>

<script>
import {likeArticle} from "../../api/article";
import {cancelLikeArticle} from "../../api/article";
export default {
  name: "LikeButton",
  props:{
    isLike:{
      type:Boolean
    },
    count:{
      type:Number
    },
    articleId:{
      type:String
    }
  },
  data(){
    return {
      likeState:this.isLike
    }
  },
  methods:{
    buttonClike(){
      if(this.likeState){
        this.likeState = false
        this.count-=1
        likeArticle(this.articleId).catch(()=>{
          this.likeState = true
          this.count+=1
        })
      }else{
        this.likeState = true
        this.count+=1
        cancelLikeArticle(this.articleId).catch(()=>{
          this.likeState = false
          this.count-=1
        })
      }
    }
  }
}
</script>

<style scoped>

</style>