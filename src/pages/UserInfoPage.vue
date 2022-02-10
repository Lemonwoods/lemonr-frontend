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
  }
}
</script>

<style scoped>

</style>