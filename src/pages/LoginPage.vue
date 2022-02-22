<template>
  <div class="le-login">
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
      },
      rules:{
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 5 到 18 个字符', trigger: 'change' }
        ],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' },
        //   { min: 8, max: 18, message: '长度在 8 到 18 个字符', trigger: 'change' }
        // ],
      }
    }
  },
  methods:{
    le_login(){
      this.$refs["userForm"].validate((valid) => {
        if (valid) {
          this.$store.dispatch('login',this.userForm).then(()=>{
            console.log(this.$store.state.token)
            this.$store.dispatch('getUserInfo')
            this.$router.go(-1)
          }).catch(()=>{
            console.log('login error')
          })
        } else {
          console.log('账户名或密码错误，请仔细检查');
          return false;
        }
      });



    }
  }
}
</script>

<style scoped>
.le-login{
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}
</style>