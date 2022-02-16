<template>
  <div class="le-message-bar">
    <img :src="avatarUrl">
    <div class="le-message-bar-info">
      <p class="time">{{nickName}}  {{formatTime}}</p>
      <div class="info-content">{{message}}</div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "../../utils/time";
export default {
  name: "MessageBar",
  props:{
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
    }
  },
  data(){
    return {
      formatTime:formatDate(this.time)
    }
  }
}
</script>

<style scoped>

</style>