<template>
  <div>
    <div class="le_select_date_box">
      <span class="le_select_date_box_text">请选择文章发表日期</span>
      <el-date-picker
          v-model="date_value"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
      </el-date-picker>
    </div>
    <article-card v-for="(article, index) in articles" :key="index" :article="article"></article-card>
    <el-pagination
        :total="total"
        @current-change="currentChange"
        @prev-click="prevClick"
        @next-click="nextClick">

    </el-pagination>
  </div>
</template>

<script>
import {getArticleList, getArticleTotalCount} from "../../api/article";
import ArticleCard from "../../components/article/ArticleCard";
export default {
  name: "ArticleList",
  components:{
    ArticleCard
  },
  props:{
    queryCondition:{
      type:Object,
      default:null,
    }
  },
  data(){
    return {
      total:Number,

      pageParam:{
        page:Number,
        pageSize:Number
      },
      query:{
        categoryId:String,
        tagId:String,
        authorId:String,
        year:String,
        month:String
      },
      articles:Array,

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      date_value: '',
    }
  },
  methods:{
    getArticles(){
      getArticleList(this.pageParam, this.query).then(data=>{
        this.articles = data.data
      })
    },
    getTotalCount(){
      getArticleTotalCount(this.query).then(data=>{
        this.total = data.data
      })
    },
    currentChange(currentPage){
      this.pageParam.page = currentPage
      this.getArticles()
    },
    prevClick(){
      this.pageParam.page = this.pageParam.page-1
      this.currentChange(this.pageParam.page)
    },
    nextClick(){
      this.pageParam.page = this.pageParam.page+1
      this.currentChange(this.pageParam.page)
    }
  },
  mounted() {
    //判断是否有传入查询条件
    if(this.queryCondition===null){

    }else{
      this.query = this.queryCondition
    }

    //每次挂载就获取所有的文章
    this.getArticles()
    this.getTotalCount()
  }
}
</script>

<style scoped>

</style>