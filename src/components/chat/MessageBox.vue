<template>
  <div>
    <h1>message box</h1>
    <div v-for="message in messages" :key="message.id">
      <message-bar v-if="message.toUserId==toUserInfo.id"
        :avatar-url="toUserInfo.avatar"
        :message="message.content"
        :nick-name="toUserInfo.nickName"
        :time="message.createDate"></message-bar>
      <opsite-message-bar v-else
        :avatar-url="fromUserInfo.avatar"
        :message="message.content"
        :nick-name="fromUserInfo.nickName"
        :time="message.createDate"></opsite-message-bar>
    </div>
  </div>
</template>

<script>
import {getUserInfoById} from "../../api/user";
import {getChatRecords} from "../../api/chat";
import MessageBar from "./MessageBar";
import OpsiteMessageBar from "./OpsiteMessageBar";
export default {
  name: "MessageBox",
  components:{
    MessageBar,
    OpsiteMessageBar
  },
  props:{
    fromUid:{
      type:String
    },
    toUid:{
      type:String
    }
  },
  data(){
    return{
      messages:[],
      pageParam:{
        page:0,
        pageSize:100,
      },

      fromUserInfo:{},
      toUserInfo:{}
    }
  },
  methods:{
    getUserInfo(){
      getUserInfoById(this.fromUid).then(data=>{
        this.fromUserInfo = data.data
      })
      getUserInfoById(this.toUid).then(data=>{
        this.toUserInfo = data.data
      })
    },
    loadMessage(){
      this.pageParam.page +=1
      getChatRecords(this.fromUid,this.pageParam).then(data=>{
        if(data.data.length===0){
          this.pageParam.page-=1
          return
        }

        for(let i=0;i<data.data.length;i++){
          this.messages.push(data.data[i])
        }
      })
    }
  },
  mounted() {
    this.getUserInfo()
    this.loadMessage()
  }
}
</script>

<style scoped>

</style>