<template>
  <div class="le-user-info-table">
    <el-row>
      <el-col :span="5">
        <el-image :src="userInfo.avatar"></el-image>
      </el-col>

      <el-col :span="15" :offset= "1">
        <div>
          <span class="le-user-info-table-nickname">
            {{userInfo.nickname}}
          </span>
        </div>
          <span class="le-user-info-table-account">
            ID: {{userInfo.account}}
          </span>
        <div>

        </div>

        <div class="le-user-info-table-description">
          {{userInfo.userDescription}}
        </div>

        <div class="le-user-info-table-follow-and-fan-button">
          <follow-and-fan-button :user-id="userId"></follow-and-fan-button>
        </div>

        <div>
          <el-button round @click="chatWithCurrentUser">聊天</el-button>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import FollowAndFanButton from "./FollowAndFanButton";
import {getUserInfoById} from "../../api/user";
export default {
  name: "UserInfoTable",
  components:{
    FollowAndFanButton
  },
  props:{
    userId:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      userInfo: {
        avatar:require('../../assets/defaultAvatar.png')
      },
    }
  },
  methods:{
    getUserInfo(){
      getUserInfoById(this.userId).then(data=>{
        this.userInfo = data.data

        if(data.data.avatar==='default'){
          this.userInfo.avatar = require('../../assets/defaultAvatar.png')
        }

      })
    },
    chatWithCurrentUser(){
      this.$router.push(`/home/chat/${this.userId}`)
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style scoped>
.le-user-info-table{
  width: 1000px;

}


.le-user-info-table-nickname{
  font-size: 26px;
  font-weight: 600;
}
.le-user-info-table-account{
  color: gray;
  font-size: 15px;
}
.le-user-info-table-description{
  margin-top: 20px;
}
.le-user-info-table-follow-and-fan-button{
  margin-top: 20px;
}
</style>