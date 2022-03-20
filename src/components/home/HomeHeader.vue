<template>
  <div class="le-home-header">
    <el-row>
      <!--    导航标签-->
      <el-col :span=10 :offset="5">
        <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">分类</template>
            <el-submenu index="2-1">
              <template slot="title">按类别</template>
              <el-menu-item v-for="(category, index) in categories" :key="category.id" :index="'2-1-'+index">{{category.categoryName}}</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">按标签</template>
              <el-menu-item v-for="(tag, index) in tags" :key="tag.id" :index="'2-2-'+index">{{tag.tagName}}</el-menu-item>
            </el-submenu>
          </el-submenu>
<!--          <el-menu-item index="3">热榜</el-menu-item>-->
          <el-menu-item index="4">消息</el-menu-item>
          <el-menu-item index="5">写文章</el-menu-item>
<!--          <el-menu-item index="6">-->
<!--            <el-input-->
<!--                placeholder="请输入内容"-->
<!--                prefix-icon="el-icon-search"-->
<!--                v-model="searchInput">-->
<!--            </el-input>-->
<!--          </el-menu-item>-->
        </el-menu>
      </el-col>

<!--      输入框-->

      <el-col :span=7>
        <div v-if="loginState" >
          <user-button-and-logout-button :user-id="userId"></user-button-and-logout-button>
        </div>
        <login-and-register-button v-else></login-and-register-button>
      </el-col>

    </el-row>

  </div>
</template>

<script>
import LoginAndRegisterButton from "../LoginAndRegister/LoginAndRegisterButton";
import {getCategories, getTags} from "../../api/article";
import UserButtonAndLogoutButton from "../LoginAndRegister/UserButtonAndLogoutButton";

export default {
  name: "HomeHeader",
  components:{
    LoginAndRegisterButton,
    UserButtonAndLogoutButton
  },
  data(){
    return{
      activeIndex:'1',
      searchInput:'',

      loginState:Boolean,

      categories:[],
      tags:[]
    }
  },
  methods:{
    getCategoryList(){
      getCategories().then(data=>{
        this.categories = data.data
      })
    },
    getTagList(){
      getTags().then(data=>{
        this.tags = data.data
      })
    },
    handleSelect(key, keyPath){
      console.log('key:'+key)
      console.log('keyPath:'+keyPath)

      if(key==='1'){
        this.$router.push('/home/articles')
        this.activeIndex='1'
      }
      if(key.substring(0,3)==='2-1'){
        let number = Number(key.substring(4,5))
        this.$router.push(`/home/categories/${this.categories[number].id}`)
        this.activeIndex='2'

      }
      if(key.substring(0,3)==='2-2'){
        let number = Number(key.substring(4,5))
        this.$router.push(`/home/tags/${this.tags[number].id}`)
        this.activeIndex='2'
      }
      if(key==='3'){
        this.$router.push('/home/hotArticles')
        this.activeIndex='3'
      }
      if(key==='4'){
        this.$router.push('/home/chat/-1')
        this.activeIndex='4'
      }
      if(key==="5"){
        this.$router.push('/home/articleEditor')
        this.activeIndex = '5'
      }
    },
    isLogin(){
      if(this.$store.state.token===''||this.$store.state.token===undefined){
        this.loginState = false
      }else{
        this.loginState = true
      }
    }
  },
  computed:{
    userId(){
      console.log(this.$store.state.id)
      return this.$store.state.id
    },
    avatar(){
      return this.$store.state.avatar
    }
  },
  mounted() {
    //每次挂载时都获取一次user的信息,用于显示user的头像
    console.log(this.$store.state.token)
    this.$store.dispatch('getUserInfo')
    //每次挂在的时候,判断是显示头像还是显示登陆注册按钮
    this.isLogin()

    this.getCategoryList()
    this.getTagList()

  }
}
</script>

<style scoped>
.le-home-header{
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>