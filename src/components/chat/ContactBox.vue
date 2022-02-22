<template>
  <div class="le-contact-box">
    <contact-card class="le-contact-card" v-for="contact in contacts" :key="contact.userId" :contact="contact"></contact-card>
  </div>
</template>

<script>
import {getContacts} from "../../api/chat";
import ContactCard from "./ContactCard";
export default {
  name: "ContactBox",
  components:{
    ContactCard
  },
  data(){
    return {
      contacts:[]
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