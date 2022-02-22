<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="le-center">48小时热榜</div>
        <hot48-hours-card class="le-center" time-type="48"></hot48-hours-card>
      </el-col>
      <el-col :span="12">
        <div class="le-center">10天热榜</div>
        <hot48-hours-card class="le-center" time-type="10"></hot48-hours-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Hot48HoursCard from "../../components/article/Hot48HoursCard";
export default {
  name: "HotArticle",
  components:{
    Hot48HoursCard
  }
}
</script>

<style scoped>
.le-center{
  margin: auto;
}

</style>