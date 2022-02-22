<template>
  <div>
    <div class="le-login">
      <div class="le-login-input-form">
        <h1>LemonR 注册</h1>

        <el-form ref="userForm" :model="userForm" :rules="rules" :label-position="'left'">
          <el-form-item prop="nickname" label="昵称">
            <el-input placeholder="昵称" v-model="userForm.nickname"></el-input>
          </el-form-item>
          <el-form-item prop="account" label="用户名">
            <el-input placeholder="用户名" v-model="userForm.account"></el-input>
          </el-form-item>

          <el-form-item prop="password" label="密码">
            <el-input placeholder="密码" type="password" v-model="userForm.password"></el-input>
          </el-form-item>

          <el-form-item size="small" class="me-login-button">
            <el-button type="primary" @click.native.prevent="le_login">注册</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data(){
    return{
      userForm:{
        nickname:'',
        account:'',
        password:''
      },
      rules: {
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 1, max: 18, message: '长度在 1 到 18 个字符', trigger: 'change' }
        ],
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 5 到 18 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 18, message: '长度在 8 到 18 个字符', trigger: 'change' }
        ],
      }
    }
  },
  methods:{
    le_login(){
      this.$refs["userForm"].validate((valid) => {
        if (valid) {
          this.$store.dispatch('register',this.userForm).then(()=>{
            console.log(this.$store.state.token)
            this.$store.dispatch('getUserInfo')
            this.$router.go(-1)
          }).catch(e=>{
            console.log(e)
          })
        } else {
          console.log('格式错误，请仔细检查格式');
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