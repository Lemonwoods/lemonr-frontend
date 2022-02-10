<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="'1'"  mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">{{ likeSent }}</el-menu-item>
          <el-menu-item index="2">{{commentSent}}</el-menu-item>
          <el-menu-item index="3">{{ publishSent }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <user-article-scroll-page :user-id="userId" :article-type="articleType"></user-article-scroll-page>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserArticleScrollPage from "./UserArticleScrollPage";
export default {
  name: "UserArticleListMenu",
  components:{
    UserArticleScrollPage
  },
  props:{
    userId:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      articleType:'liked',

      likeSent:'ta喜欢的',
      commentSent:'ta评论过的',
      publishSent:'ta发布的'

    }
  },
  methods:{
    handleSelect(index){
      if(index=='1'){
        this.articleType = 'liked'
      }else if(index == '2'){
        this.articleType = 'commented'
      }else{
        this.articleType = 'published'
      }
    }
  }
}
</script>

<style scoped>

</style>