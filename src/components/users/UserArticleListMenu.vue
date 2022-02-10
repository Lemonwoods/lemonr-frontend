<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="1"  mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">{{ likeSent }}</el-menu-item>
          <el-menu-item index="2">{{commentSent}}</el-menu-item>
          <el-menu-item index="3">{{ publishSent }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <user-article-list :article-type="articleType" :user-id="userId"></user-article-list>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserArticleList from "./UserArticleList";
export default {
  name: "UserArticleListMenu",
  components:{
    UserArticleList,
  },
  props:{
    userId:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      articleType:'like',

      likeSent:'ta喜欢的',
      commentSent:'ta评论过的',
      publishSent:'ta发布的'

    }
  },
  methods:{
    handleSelect(index){
      if(index=='1'){
        this.articleType = 'like'
      }else if(index == '2'){
        this.articleType = 'comment'
      }else{
        this.articleType = 'publish'
      }
    }
  }
}
</script>

<style scoped>

</style>