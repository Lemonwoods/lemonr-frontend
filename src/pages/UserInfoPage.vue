<template>
  <div>
    <div>
      <user-info-table :user-id="userId"></user-info-table>
    </div>
    <div>
      <user-article-list-menu :user-id="userId"/>
    </div>
  </div>
</template>

<script>
import UserInfoTable from "../components/users/UserInfoTable";
import UserArticleListMenu from "../components/users/UserArticleListMenu";
export default {
  name: "UserInfo",
  components:{
    UserInfoTable,
    UserArticleListMenu,
  },
  data(){
    return {
      userId : this.$route.params.id
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

</style>