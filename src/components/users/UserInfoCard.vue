<template>
  <div class="le-user-info-card">
    <el-row>
      <el-col span="5" offset="2">
        <avatar-button :user-id="userId" class="le-user-info-avatar"></avatar-button>
      </el-col>

      <el-col span="17">

        <div class="le-user-info-text">
          <div class="le-user-info-nickname">
            {{nickname}}
          </div>

          <div class="le-user-info-description">
            {{description}}
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getUserInfoById} from "../../api/user";
import AvatarButton from "./AvatarButton";
export default {
  name: "UserInfoCard",
  components:{
    AvatarButton,
  },
  props:{
    userId:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      nickname: String,
      description: String,
    }
  },
  methods:{
    getUserInfo(){
      getUserInfoById(this.userId).then(data=>{
        this.nickname = data.data.nickname
        this.description = data.data.userDescription

        if(this.description.length>20){
          this.description = this.description.slice(0,20)+'...'
        }
      })
    }
  },
  watch:{
    userId(){
      this.getUserInfo()
    }
  },
  mounted() {
    this.getUserInfo()
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