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
        @imgAdd="$imgAdd"
        @imgDel="$imgDel"
    />
    <el-dialog :visible.sync="formVisible">
      <publish-article-form @submit="publish" @cancel="cancelForm"></publish-article-form>
    </el-dialog>
  </div>
</template>

<script>
import {publishArticle} from "../../api/article";
import PublishArticleForm from "./PublishArticleForm";
import {uploadImage} from "../../api/article";
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
    },
    $imgAdd(pos, $file) {

      console.log('image add')

      console.log($file)
      console.log(pos)

      // 第一步.将图片上传到服务器.
      let formData = new FormData();
      formData.append('image', $file);
      uploadImage(formData).then(data => {

        this.$refs.md.$img2Url(pos, data.data);
      })
    },
    $imgDel(pos) {
      delete this.img_file[pos];
    }
  }

}
</script>

<style scoped>
.le-mavon-editor{
  height: 800px;
}
</style>