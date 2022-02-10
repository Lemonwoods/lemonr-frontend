<template>
  <div class="le-home-page">
    <el-container>
      <el-header>
        <home-header></home-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from "../components/home/HomeHeader";
export default {
  name: "HomePage",
  components: {
    HomeHeader,
  }
}
</script>

<style scoped>
.le-home-page{
}

</style>