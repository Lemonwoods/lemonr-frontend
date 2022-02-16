<template>
  <div>
    <el-row>
      <el-col>
        <hot48-hours-card></hot48-hours-card>
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

</style>