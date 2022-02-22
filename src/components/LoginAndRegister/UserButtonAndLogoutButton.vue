<template>
  <div class="le-user-button-and-logout-button">
    <el-row>
      <el-col :span="12">
        <avatar-button class="le-user-button" :user-id="userId"></avatar-button>
      </el-col>
      <el-col :span="12">
        <el-button class="le-logout-button" type="danger" icon="el-icon-delete" circle @click="logout"></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AvatarButton from "../users/AvatarButton";
export default {
  name: "UserButtonAndLogoutButton",
  components:{
    AvatarButton
  },
  props:{
    userId:{
      type:String
    }
  },
  methods:{
    logout(){
      console.log('logout button clicked')
      this.$store.dispatch('logout').then(()=>{
        this.$router.go(0)
      }).catch(()=>{
        console.log('login error')
      })
    }
  }
}
</script>

<style scoped>
.le-user-button-and-logout-button{
  width: 120px;
}
.le-user-button{
  box-shadow: 2px 2px 5px #bdbdbd;
  margin-right: 20px;

  border-style: solid;
  border-width: 1px;
  border-color: #ececec;
}
.le-logout-button{
  width: 50px;
  height: 50px;
  box-shadow: 2px 2px 5px #bdbdbd;
}

</style>