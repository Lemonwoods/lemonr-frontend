<template>
  <div class="le-login-and-register-buttons">
    <el-row>
      <el-col span="12">
        <el-button round @click="register">注册</el-button>
      </el-col>
      <el-col span="12">
        <el-button round type="primary" @click="login">登陆</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LoginAndRegisterButton",
  methods:{
    register(){
      this.$router.push('/register')
    },
    login(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.le-login-and-register-buttons{
  width: 200px;
}

</style>