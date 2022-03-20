<template>
  <div class="le-message-box">
    <div class="le-message-box-display">
      <div @scroll="handleScroll" class="le-message-box-scroll" id="le-message-box-scroll">
        <div v-for="message in messages" :key="message.id">
          <message-bar v-if="message.fromUserId==rightUid" class="le-right-message-bar"
                       :user-id="rightUid"
                       :avatar-url="rightUserInfo.avatar"
                       :message="message.content"
                       :nick-name="rightUserInfo.nickName"
                       :time="message.createDate"></message-bar>
          <opsite-message-bar v-else class="le-left-message-bar"
                              :user-id="leftUid"
                              :avatar-url="leftUserInfo.avatar"
                              :message="message.content"
                              :nick-name="leftUserInfo.nickName"
                              :time="message.createDate"></opsite-message-bar>
        </div>
      </div>
    </div>
    <div class="le-message-box-input">
      <el-input
          class="le-message-box-input-bar"
          type="textarea"
          :row="10"
          placeholder="请输入内容"
          v-model="inputText">
      </el-input>
      <el-button round type="primary" @click="submitMessage">发送</el-button>
    </div>
  </div>
</template>

<script>
import {getUserInfoById} from "../../api/user";
import {getChatRecords, getServerIP} from "../../api/chat";
import MessageBar from "./MessageBar";
import OpsiteMessageBar from "./OpsiteMessageBar";
export default {
  name: "MessageBox",
  components:{
    MessageBar,
    OpsiteMessageBar
  },
  props:{
    leftUid:{
      type:String  //用户聊天的对象
    },
    rightUid:{
      type:String  //用户方
    }
  },
  data(){
    return{
      messages:[],
      pageParam:{
        page:0,
        pageSize:100,
      },

      rightUserInfo:{},
      leftUserInfo:{},

      inputText:'',

      webSocketUrl:'',
      webSocket:null,
    }
  },
  methods:{
    getUserInfo(){
      getUserInfoById(this.leftUid).then(data=>{
        this.leftUserInfo = data.data
      })
      getUserInfoById(this.rightUid).then(data=>{
        this.rightUserInfo = data.data
      })
    },
    loadMessage(){
      this.pageParam.page +=1
      getChatRecords(this.leftUid,this.pageParam).then(data=>{
        if(data.data.length===0){
          this.pageParam.page-=1
          return
        }

        for(let i=0;i<data.data.length;i++){
          this.messages.unshift(data.data[i])
        }
      })
    },
    handleScroll(e){
      // 触顶 加载新消息
      if(e.target.scrollTop<=0){
        this.loadMessage()
      }
    },
    scrollToBottom() {
      this.$nextTick(()=>{
        let div = document.getElementById("le-message-box-scroll")
        div.scrollTop = div.scrollHeight
      })
    },

    submitMessage(){
      this.webSocketSendMessage(this.inputText)
      let newMessage = {}
      newMessage.fromUserId = this.rightUid
      newMessage.toUserId = this.leftUid
      newMessage.content = this.inputText
      newMessage.createDate = Date.parse(new Date())

      this.messages.push(newMessage)

      this.inputText = ''

      this.scrollToBottom()
    },

    initWebSocket(){
      this.webSocket = new WebSocket(this.webSocketUrl)
      this.webSocket.onopen = this.webSocketOnOpen
      this.webSocket.onerror = this.webSocketOnError
      this.webSocket.onmessage = this.webSocketOnMessage
      this.webSocket.onclose = this.webSocketOnClose
    },
    webSocketOnOpen(){
      console.log('link success')
    },
    webSocketOnError(e){
      console.log(e)
    },
    webSocketOnMessage(e){
      let messageString = e.data
      let message = JSON.parse(messageString)
      console.log('get message:' + message)
      this.messages.push(message)
    },
    webSocketOnClose(e){
      console.log(e)
    },
    webSocketSend(data){
      this.webSocket.send(JSON.stringify(data));
    },
    webSocketSendMessage(content){
      let message = {}
      message.content = content
      message.toUserId = this.leftUid
      message.createDate = Date.parse(new Date())

      this.webSocketSend(message);
    }
  },
  watch:{
    webSocketUrl(val){
      if(val!==null){
        this.initWebSocket()
      }
    },
    rightUid(val){
      getUserInfoById(val).then(data=>{
        this.rightUserInfo = data.data
      })
    }
  },
  mounted() {
    this.getUserInfo()
    this.scrollToBottom()

    // 获取websocket地址
    let serverIP = getServerIP()
    this.webSocketUrl=` WS://${serverIP}/chat/websocket/${this.rightUid}`

    this.messages=[]
    this.pageParam.page = 0;
    this.loadMessage()
  },
  destroyed() {
    this.webSocketOnClose()
  }
}
</script>

<style scoped>
.le-message-box-display{
  width: 900px;
  height: 400px;

  background-color: #fcfcfc;
  border-radius: 25px;
  padding: 20px;

  border-color: #cbcbcb;
  border-style: solid;
  border-width: 1px;

  margin-left: auto;
  margin-right: auto;
}

.le-message-box-scroll{
  height: 400px;
  overflow: auto;
}
.le-message-box-scroll::-webkit-scrollbar{
  display: none;
}
.le-left-message-bar{
  float: left;
}
.le-right-message-bar{
  float: right;
}

.le-message-box-input{
  width: 900px;

  margin-left: auto;
  margin-right: auto;

  margin-top: 20px;
  margin-bottom: 20px;
}
.le-message-box-input-bar{

}
</style>