<template>
  <div>
    <el-row>
      <el-col :span="7">
        <contact-box class="le-center"></contact-box>
      </el-col>
      <el-col :span="17">
        <message-box v-if="leftUserId!='-1'" class="le-center" :leftUid="leftUserId" :rightUid="this.$store.state.id"></message-box>
        <div v-else class="le-center le-select-user">
          请选择聊天用户
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MessageBox from "../../components/chat/MessageBox";
import ContactBox from "../../components/chat/ContactBox";
export default {
  name: "Chat",
  components:{
    MessageBox,
    ContactBox
  },
  data(){
    return {
      leftUserId:this.$route.params.leftUserId,
    }
  },
  watch:{
    '$route' (to, from) {
      console.log(to)
      console.log(from)
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.le-center{
  margin: auto;
}
.le-select-user{
  font-size: 50px;
  color: #d7d7d7;

  height: 500px;
  vertical-align: middle;
}

</style>