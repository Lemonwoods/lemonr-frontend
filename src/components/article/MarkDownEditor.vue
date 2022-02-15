<template>
  <div>
    <div>
      <el-button round @click="wakePublishArticleForm">发布</el-button>
    </div>
    <mavon-editor
        class="mavon le-mavon-editor"
        codeStyle="atom-one-dark"
        v-model="webDataString"
        :ishljs="true"
        ref="md"
        @save="savaArticle"
    />
    <el-dialog :visible.sync="formVisible">
      <publish-article-form @submit="publish" @cancel="cancelForm"></publish-article-form>
    </el-dialog>
  </div>
</template>

<script>
import {publishArticle} from "../../api/article";
import PublishArticleForm from "./PublishArticleForm";
export default {
  name: "MarkDownEditor",
  components:{
    PublishArticleForm
  },
  data(){
    return {
      webDataString: '',

      title:'',
      summary:'',
      categoryId:'',
      tagIdList: [],

      formVisible:false
    }
  },
  methods:{
    wakePublishArticleForm(){
      this.formVisible = true
    },
    cancelForm(){
      this.formVisible = false
    },
    publish(form){
      let article = {}
      article.title = form.title
      article.summary = form.summary
      article.categoryId = form.categoryId
      article.tagIdList = form.tagIdList

      article.content = this.$refs.md.d_value
      article.contentHtml = this.$refs.md.d_render
      publishArticle(article).then(data=>{
        this.$router.push(`/articles/detail/${data.data.id}`)
      })
    }
  }

}
</script>

<style scoped>
.le-mavon-editor{
  height: 800px;
}
</style>