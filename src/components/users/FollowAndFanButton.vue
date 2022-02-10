<template>
  <div>
    <el-row>
      <el-col span="4">
        <el-button round @click="openFollowList">关注</el-button>
      </el-col>
      <el-col span="4">
        <el-button round @click="openFanList">粉丝</el-button>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="followDialogVisible" class="le-user-list-dialog">
      <div class="le-scroll-list" v-infinite-scroll="loadFollow">
        <user-info-card v-for="userId in followList" :key="userId" :user-id="userId"></user-info-card>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="fanDialogVisible" class="le-user-list-dialog">
      <div class="le-scroll-list" v-infinite-scroll="loadFan">
        <user-info-card v-for="userId in fanList" :key="userId" :user-id="userId"></user-info-card>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UserInfoCard from "./UserInfoCard";
import {getFollowList, getFanList} from "../../api/user";
export default {
  name: "FollowAndFanButton",
  components:{
    UserInfoCard
  },
  props:{
    userId:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      followDialogVisible:false,
      fanDialogVisible:false,

      followList:[],
      fanList:[],

      followPageParam:{
        page:0,
        pageSize:20,
      },
      fanPageParam:{
        page:0,
        pageSize:20,
      }
    }
  },
  methods:{
    openFollowList(){
      this.followDialogVisible = true
    },
    openFanList(){
      this.fanDialogVisible = true
    },
    loadFollow(){
      this.followPageParam.page+=1;
      getFollowList(this.userId, this.followPageParam).then(data=>{
        if(data.data.length===0){
          this.followPageParam.page-=1
          return
        }

        for(let i = 0;i<data.data.length;i++){
          this.followList.push(data.data[i])
        }
      }).catch(()=>{
        this.followPageParam.page-=1
      })
    },
    loadFan(){
      this.followPageParam.page+=1;
      getFanList(this.userId, this.fanPageParam).then(data=>{
        if(data.data.length ===0){
          this.fanPageParam.page-=1
          return
        }

        for(let i = 0;i<data.data.length;i++){
          this.fanList.push(data.data[i])
        }
      }).catch(()=>{
        this.fanPageParam.page-=1;
      })
    }
  }
}
</script>

<style scoped>
.le-user-list-dialog{
  height: 700px;
  width: 700px;
}
</style>