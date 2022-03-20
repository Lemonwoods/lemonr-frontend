<template>
  <div class="le-contact-box">
    <contact-card class="le-contact-card" v-for="contact in contacts" :key="contact.userId" :contact="contact"></contact-card>
  </div>
</template>

<script>
import {getContacts} from "../../api/chat";
import ContactCard from "./ContactCard";
import {getUserInfoById} from "../../api/user";

export default {
  name: "ContactBox",
  props:{
    curChatUser:{
      type:Number
    }
  },
  components:{
    ContactCard
  },
  data(){
    return {
      contacts:[],

      curChatUserInfo:Object
    }
  },
  methods:{
    loadContacts(){
      getContacts().then(data=>{
        this.contacts = data.data;
      })
    }
  },
  mounted() {
    getUserInfoById(this.curChatUser).then(data=>{
      this.contacts.unshift({
        userId:this.curChatUser,
        avatar:data.data.avatar,
        nickName:data.data.nickname
      })
    })

    this.loadContacts()
  }
}
</script>

<style scoped>
.le-contact-box{
  width: 340px;
  height: 500px;
  overflow: auto;

  padding: 20px;
  border-radius: 20px;
  background-color: #406882;
}
.le-contact-box::-webkit-scrollbar{
  display: none;
}
.le-contact-card{
  margin: auto;
}
</style>