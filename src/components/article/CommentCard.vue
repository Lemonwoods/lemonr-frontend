<template>
  <div class="le-comment-card">
    <el-row>
      <el-col span="3" >
        <avatar-button :user-id="comment.fromUid"></avatar-button>
      </el-col>

      <el-col span="17">
        <div class="le-comment-card-user-nickname">
          {{commentUserNickName}}
        </div>

        <div class="le-comment-card-create-date">
          {{formatTime}}
        </div>

        <div class="le-comment-card-content">
          {{comment.content}}
        </div>

        <div class="le-comment-card-second-comment-card-list">
          <second-comment-card-list :comments="comment.children" v-if="comment.children!==[]"></second-comment-card-list>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import SecondCommentCardList from "./SecondCommentCardList";
import AvatarButton from "../users/AvatarButton";
import {getUserInfoById} from "../../api/user";
import {formatDate} from "../../utils/time";
export default {
  name: "CommentCard",
  components:{
    AvatarButton,
    SecondCommentCardList
  },
  props:{
    comment:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      commentUserNickName: String,
      formatTime: formatDate(this.comment.createDate)
    }
  },
  methods:{
    transferToUserNickName(){
      getUserInfoById(this.comment.fromUid).then(data=>{
        this.commentUserNickName = data.data.nickname
      })
    }
  },
  created() {
    // 加载评论用户的名称
    this.transferToUserNickName()
  }
}
</script>

<style scoped>
.le-comment-card{
  border-radius: 15px;
  box-shadow: 7px 7px 15px #bdbdbd;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top:10px;
  padding-bottom: 10px;
}

.le-comment-card-user-nickname{
  font-weight: 600;
}

.le-comment-card-create-date{
  font-size: 12px;
  color: grey;
}

</style>