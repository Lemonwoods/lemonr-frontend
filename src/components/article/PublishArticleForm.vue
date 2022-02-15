<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.categoryId" placeholder="请选择活动区域">
          <el-option v-for="category in categories" :key="category.id" :label="category.categoryName" :value="category.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-checkbox-group v-model="form.tagIdList">
          <el-checkbox v-for="tag in tags" :key="tag.id" :label="tag.id">{{tag.tagName}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="form.summary"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getCategories, getTags} from "../../api/article";
export default {
  name: "PublishArticleForm",
  data(){
    return {
      form:{
        title:'',
        summary:'',

        categoryId:'',
        tagIdList:[]
      },
      categories:[],
      tags:[]
    }
  },
  methods:{
    getCategoryList(){
      getCategories().then(data=>{
        this.categories = data.data
      })
    },
    getTagList(){
      getTags().then(data=>{
        this.tags = data.data
      })
    },
    onSubmit(){
      this.$emit('submit', this.form)
    },
    onCancel(){
      this.$emit('cancel')
    }
  },
  created() {
    this.getCategoryList()
    this.getTagList()
  }
}
</script>

<style scoped>

</style>