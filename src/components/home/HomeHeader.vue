<template>
  <div class="le-home-header">
    <el-row>
      <!--    导航标签-->
      <el-col :span=23>
        <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">分类</template>
            <el-menu-item index="2-1">按标签</el-menu-item>
            <el-menu-item index="2-2">按类别</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">热榜</el-menu-item>
          <el-menu-item index="4">消息</el-menu-item>
          <el-menu-item index="5">
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="searchInput">
            </el-input>
          </el-menu-item>
        </el-menu>
      </el-col>

<!--      输入框-->

      <el-col :span=1>
          <avatar-button v-if="loginState" :user-id="userId"></avatar-button>
        <login-and-register-button v-else></login-and-register-button>
      </el-col>

    </el-row>

  </div>
</template>

<script>
import AvatarButton from "../users/AvatarButton";
import LoginAndRegisterButton from "../LoginAndRegister/LoginAndRegisterButton";

export default {
  name: "HomeHeader",
  components:{
    AvatarButton,
    LoginAndRegisterButton
  },
  data(){
    return{
      activeIndex:'1',
      searchInput:'',

      loginState:Boolean,
    }
  },
  methods:{
    handleSelect(){

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