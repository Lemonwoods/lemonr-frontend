<template>
  <div>
    <div class="le_select_date_box">
      <span class="le_select_date_box_text">请选择文章发表日期</span>
      <el-date-picker
          v-model="date_value"
          value-format="yyyy-MM-dd"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
      </el-date-picker>
      <el-button class="le_query_button" round @click="queryButton">
        查询
      </el-button>
    </div>

    <div v-infinite-scroll="loadMore"
         class="le-article-scroll-page">
      <article-card v-for="(article, index) in articles" :key="index" :article="article" class="le-article-card"></article-card>
    </div>
  </div>
</template>

<script>
import ArticleCard from "../../components/article/ArticleCard";
import {getArticleList} from "../../api/article";
import {getYear, getMonth, getDay} from "../../utils/time";

export default {
  name: "ArticleScrollPage",
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
    return{
      articles:[],

      query:{
        categoryId:String,
        tagId:String,
        authorId:String,
        year:String,
        month:String,
        day:String
      },
      pageParam:{
        page:0,
        pageSize:10
      },

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
    loadMore(){
      console.log('loadmore')
      this.pageParam.page +=1
      getArticleList(this.pageParam, this.query).then(data=>{
        if(data.data.length===0){
          this.pageParam.page-=1
          return
        }

        for(let i=0;i<data.data.length;i++){
          this.articles.push(data.data[i])
        }
      })
    },
    queryButton(){
      this.pageParam.page = 0
      this.articles = []

      if(getYear(this.date_value)!= '1970'){
        this.query.year = getYear(this.date_value);
        this.query.month = getMonth(this.date_value);
        this.query.day = getDay(this.date_value);
      }else{
        this.query.year = null
        this.query.month = null
        this.query.day = null
      }

      this.loadMore()

    }
  },
  created() {
    //判断是否有传入查询条件
    if(this.queryCondition===null){
      console.log('no query condition')
    }else{
      this.query = this.queryCondition
    }
  },
  watch:{
    queryCondition(newVal){
      this.query = newVal
      this.pageParam.page = 1
      this.articles = []
      this.loadMore()
    }
  }
}
</script>

<style scoped>
.le_select_date_box{
  margin: auto;

  width: 530px;
}
.le_select_date_box_text{
  color: grey;
  margin:10px;
}
.le_query_button{
  margin: 10px;
}
.le-article-scroll-page{
  width: 780px;
  height: 840px;

  overflow: auto;
  margin: auto;
}
.le-article-scroll-page::-webkit-scrollbar{
  display: none;
}
.le-article-card{
  margin:25px auto auto;
}

</style>