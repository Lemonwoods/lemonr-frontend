<template>
  <div class="le-avatar-button">
    <el-image :src="avatar" @click="toUserInfoPage"></el-image>
  </div>
</template>

<script>
import {getUserInfoById} from "../../api/user";
export default {
  name: "AvatarButton",
  props:{
    userId:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      avatar: require('../../assets/defaultAvatar.png')
    }
  },
  methods:{
    getAvatarUrl(){
      console.log('userId:'+this.userId)
      getUserInfoById(this.userId).then(data=>{
        if(data.data.avatar==''||data.data.avatar=='default'){
          return
        }
        this.avatar = data.data.avatar
      })
    },
    toUserInfoPage(){
      this.$router.push(`/users/info/${this.userId}`)
    }
  },
  watch:{
    userId:function (){
      this.getAvatarUrl()
    }
  }
}
</script>

<style scoped>
.le-avatar-button{
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
</style>