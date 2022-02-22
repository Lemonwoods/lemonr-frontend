<template>
  <div class="le-user-info-card" @click="chatWithCurrentUser">
    <el-row>
      <el-col :span="5" :offset="2">
        <avatar-button-with-url :user-id="contact.userId" :avatar-url="contact.avatar" class="le-user-info-avatar"></avatar-button-with-url>
      </el-col>

      <el-col :span="17">

        <div class="le-user-info-text">
          <div class="le-user-info-nickname">
            {{contact.nickName}}
          </div>

          <div class="le-user-info-description">
            {{contact.lastMessage.content}}
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import AvatarButtonWithUrl from "../users/AvatarButtonWithUrl";
export default {
  name: "ContactCard",
  props:{
    contact:{
      type:Object
    }
  },
  components:{
    AvatarButtonWithUrl
  },
  methods:{
    chatWithCurrentUser() {
      this.$router.push({path:`/home/chat/${this.contact.userId}`})
    }
  }
}
</script>

<style scoped>
.le-user-info-card{
  width: 300px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 7px 7px 15px #bdbdbd;
  margin-top: 10px;
  margin-bottom: 10px;

  background-color: white;
}

.le-user-info-avatar{
  margin-top: 3px;
}

.le-user-info-text{
  padding-top: 5px;
}

.le-user-info-nickname{
  font-size: 17px;
  font-weight: 550;
}

.le-user-info-description{
  font-size: 15px;
  height: 20px;
  color: grey;

  overflow: hidden;
}
</style>