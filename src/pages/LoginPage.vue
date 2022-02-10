<template>
  <div>
    <div class="le-login-input-form">
      <h1>LemonR 登录</h1>

      <el-form ref="userForm" :model="userForm" :rules="rules">
        <el-form-item prop="account">
          <el-input placeholder="用户名" v-model="userForm.account"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" v-model="userForm.password"></el-input>
        </el-form-item>

        <el-form-item size="small" class="me-login-button">
          <el-button type="primary" @click.native.prevent="le_login">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>

export default {
  name: "LoginPage",
  data(){
    return{
      userForm:{
        account:'',
        password:''
      }
    }
  },
  methods:{
    le_login(){
      this.$store.dispatch('login',this.userForm).then(()=>{
        console.log(this.$store.state.token)
        this.$store.dispatch('getUserInfo')
        this.$router.go(-1)
      })

    }
  }
}
</script>

<style scoped>

</style>