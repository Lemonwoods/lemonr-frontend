<template>
  <div class="le-avatar-button">
    <el-image :src="avatar" @click="toUserInfoPage">
      <div slot="error">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
  </div>
</template>

<script>
export default {
  name: "AvatarButtonWithUrl",
  props:{
    userId:{
      type:String,
      required:true
    },
    avatarUrl:{
      type:String,
    }
  },
  data(){
    return {
      avatarDefault: require('../../assets/defaultAvatar.png')
    }
  },
  methods:{
    toUserInfoPage(){
      return this.$router.push(`/users/info/${this.userId}`)
    }
  },
  computed:{
    avatar(){
      if(this.avatarUrl=="default"){
        return require('../../assets/defaultAvatar.png')
      }else{
        return this.avatarUrl
      }
    }
  },
  watch:{
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