<template>
  <div>
    <h1>Chat</h1>
    <message-box :from-uid="2" :to-uid="1"></message-box>
  </div>
</template>

<script>
import MessageBox from "../../components/chat/MessageBox";
export default {
  name: "Chat",
  components:{
    MessageBox
  }
}
</script>

<style scoped>

</style>