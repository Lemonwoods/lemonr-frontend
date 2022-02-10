<template>
  <div class="le-second-comment-list">
    <second-comment-card v-for="comment in comments" :key='comment.id' :second-comment="comment"></second-comment-card>
  </div>
</template>

<script>
import SecondCommentCard from "./SecondCommentCard";
export default {
  name: "SecondCommentCardList",
  components:{
    SecondCommentCard,
  },
  props:{
    comments:{
      type:Array,
      required:true
    }
  },
  data(){

  }
}
</script>

<style scoped>

</style>