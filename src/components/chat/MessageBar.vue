<template>
  <div class="le-message-bar">
    <el-row>
      <el-col :span="22">
        <div>
          <div class="le-message-bar-info">
            <span class="le-message-bar-info-time">{{nickName}}  {{formatTime}}</span>
            <div class="le-message-bar-info-content">{{message}}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <avatar-button-with-url :user-id="userId" :avatar-url="avatarUrl"></avatar-button-with-url>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {formatDate} from "../../utils/time";
import AvatarButtonWithUrl from "../users/AvatarButtonWithUrl";
export default {
  name: "MessageBar",
  components:{
    AvatarButtonWithUrl
  },
  props:{
    userId:{
      type:String
    },
    avatarUrl:{
      type:String
    },
    nickName:{
      type:String
    },
    time:{
      type:String
    },
    message:{
      type:String
    },
  },
  data(){
    return {
      formatTime:formatDate(this.time)
    }
  }
}
</script>

<style scoped>
.le-message-bar{
  width: 800px;
}
.le-message-bar-info{
  float: right;

  box-shadow: -7px 7px 10px #e3e3e3;
  border-radius: 15px;

  /*width: 500px;*/

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 10px;

  display: inline-block;

  background-color: white;
}
.le-message-bar-info-time{
  font-size: 10px;
  color: grey;
}
.le-message-bar-info-content{
  width: auto;
}
</style>