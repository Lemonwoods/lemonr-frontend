<template>
  <div class="le-message-box">
    <div @scroll="handleScroll" class="le-message-box-scroll" id="le-message-box-scroll">
      <div v-for="message in messages" :key="message.id">
        <message-bar v-if="message.toUserId==toUserInfo.id" class="le-right-message-bar"
                     :user-id="toUid"
                     :avatar-url="toUserInfo.avatar"
                     :message="message.content"
                     :nick-name="toUserInfo.nickName"
                     :time="message.createDate"></message-bar>
        <opsite-message-bar v-else class="le-left-message-bar"
                            :user-id="fromUid"
                            :avatar-url="fromUserInfo.avatar"
                            :message="message.content"
                            :nick-name="fromUserInfo.nickName"
                            :time="message.createDate"></opsite-message-bar>
      </div>
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
      messages:[ //todo: test data
        {
          fromUserId:1,
          toUserId:2,
          content:'hello',
          createDate:123
        },
        {
          fromUserId:2,
          toUserId:1,
          content:'回到错误本身。我们每天早上都会做一次日志轮转，这样每天都用新的日志。因此要重启服务器。似乎Apache已经成功重启，但由于libgomp错误又宕机了。\n' +
              '\n' +
              '在网上搜索到的大量结果中寻找答案无异于大海捞针，于是我们开始阅读libgomp的源代码，看看究竟发生了什么。首先，libgomp是什么？根据其主页的描述：\n' +
              '\n' +
              '“GOMP项目是C、C++和Fortran编译器OpenMP的一个实现……GOMP能简化所有GNU系统上的并行编程。”\n' +
              '所以它是OpenMP的实现。它怎么会出问题？\n' +
              '\n' +
              '搜索了一下源代码， 我们发现错误消息的唯一出处是这里：',
          createDate:1234
        },
        {
          fromUserId:1,
          toUserId:2,
          content:'hello',
          createDate:123
        },
        {
          fromUserId:2,
          toUserId:1,
          content:'回到错误本身。我们每天早上都会做一次日志轮转，这样每天都用新的日志。因此要重启服务器。似乎Apache已经成功重启，但由于libgomp错误又宕机了。\n' +
              '\n' +
              '在网上搜索到的大量结果中寻找答案无异于大海捞针，于是我们开始阅读libgomp的源代码，看看究竟发生了什么。首先，libgomp是什么？根据其主页的描述：\n' +
              '\n' +
              '“GOMP项目是C、C++和Fortran编译器OpenMP的一个实现……GOMP能简化所有GNU系统上的并行编程。”\n' +
              '所以它是OpenMP的实现。它怎么会出问题？\n' +
              '\n' +
              '搜索了一下源代码， 我们发现错误消息的唯一出处是这里：',
          createDate:1234
        },
        {
          fromUserId:1,
          toUserId:2,
          content:'hello',
          createDate:123
        },
        {
          fromUserId:2,
          toUserId:1,
          content:'回到错误本身。我们每天早上都会做一次日志轮转，这样每天都用新的日志。因此要重启服务器。似乎Apache已经成功重启，但由于libgomp错误又宕机了。\n' +
              '\n' +
              '在网上搜索到的大量结果中寻找答案无异于大海捞针，于是我们开始阅读libgomp的源代码，看看究竟发生了什么。首先，libgomp是什么？根据其主页的描述：\n' +
              '\n' +
              '“GOMP项目是C、C++和Fortran编译器OpenMP的一个实现……GOMP能简化所有GNU系统上的并行编程。”\n' +
              '所以它是OpenMP的实现。它怎么会出问题？\n' +
              '\n' +
              '搜索了一下源代码， 我们发现错误消息的唯一出处是这里：',
          createDate:1234
        },
        {
          fromUserId:1,
          toUserId:2,
          content:'hello',
          createDate:123
        },
        {
          fromUserId:2,
          toUserId:1,
          content:'回到错误本身。我们每天早上都会做一次日志轮转，这样每天都用新的日志。因此要重启服务器。似乎Apache已经成功重启，但由于libgomp错误又宕机了。\n' +
              '\n' +
              '在网上搜索到的大量结果中寻找答案无异于大海捞针，于是我们开始阅读libgomp的源代码，看看究竟发生了什么。首先，libgomp是什么？根据其主页的描述：\n' +
              '\n' +
              '“GOMP项目是C、C++和Fortran编译器OpenMP的一个实现……GOMP能简化所有GNU系统上的并行编程。”\n' +
              '所以它是OpenMP的实现。它怎么会出问题？\n' +
              '\n' +
              '搜索了一下源代码， 我们发现错误消息的唯一出处是这里：',
          createDate:1234
        },
        {
          fromUserId:1,
          toUserId:2,
          content:'hello',
          createDate:123
        },
        {
          fromUserId:2,
          toUserId:1,
          content:'回到错误本身。我们每天早上都会做一次日志轮转，这样每天都用新的日志。因此要重启服务器。似乎Apache已经成功重启，但由于libgomp错误又宕机了。\n' +
              '\n' +
              '在网上搜索到的大量结果中寻找答案无异于大海捞针，于是我们开始阅读libgomp的源代码，看看究竟发生了什么。首先，libgomp是什么？根据其主页的描述：\n' +
              '\n' +
              '“GOMP项目是C、C++和Fortran编译器OpenMP的一个实现……GOMP能简化所有GNU系统上的并行编程。”\n' +
              '所以它是OpenMP的实现。它怎么会出问题？\n' +
              '\n' +
              '搜索了一下源代码， 我们发现错误消息的唯一出处是这里：',
          createDate:1234
        }
      ],
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
    }
  },
  mounted() {
    this.getUserInfo()
    this.scrollToBottom()
  }
}
</script>

<style scoped>
.le-message-box{
  width: 900px;
  height: 600px;

  background-color: #fcfcfc;
  border-radius: 25px;
  padding: 20px;

  border-color: #cbcbcb;
  border-style: solid;
  border-width: 1px;
}

.le-message-box-scroll{
  height: 600px;
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
</style>