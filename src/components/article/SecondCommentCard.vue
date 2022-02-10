<template>
  <div class="le-second-comment-card">
    <span class="le-user-nicknem-span">
      <span class="le-user-nickname">
      {{fromUserNickName}}
      </span>
      <span>
        回复
      </span>
      <span class="le-user-nickname">
        @{{toUserNickName}}
      </span>
      <span>
        :
      </span>
    </span>

    <span>
      {{secondComment.content}}
    </span>
  </div>
</template>

<script>
import {getUserInfoById} from "../../api/user";
export default {
  name: "SecondCommentCard",
  props:{
    secondComment:{
      type:Object
    }
  },
  data(){
    return{
      fromUserNickName:String,
      toUserNickName:String,
    }
  },
  methods:{
    transferToFromNickName() {
      getUserInfoById(this.secondComment.fromUid).then(data=>{
        this.fromUserNickName = data.data.nickname
      })
    },
    transferToToNickName() {
      getUserInfoById(this.secondComment.toUid).then(data=>{
        this.toUserNickName = data.data.nickname
      })
    },
  },
  created() {
    //获取用户名称
    this.transferToFromNickName()
    this.transferToToNickName()
  }
}
</script>

<style scoped>
.le-second-comment-card{
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;

  margin-top: 10px;
  margin-bottom: 10px;

  background-color: #406882;
  color: white;

  border-radius: 15px;
}

.le-user-nickname{
  color: #c4f3ff;
}

</style>