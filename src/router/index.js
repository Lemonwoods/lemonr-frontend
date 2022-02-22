import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ArticleEditor from "../pages/HomePageChildrenComponents/ArticleEditor";
import Categories from "../pages/HomePageChildrenComponents/Categories";
import Tags from "../pages/HomePageChildrenComponents/Tags";
import HotArticle from "../pages/HomePageChildrenComponents/HotArticle";
import Chat from "../pages/HomePageChildrenComponents/Chat";
import UserInfo from "../pages/UserInfoPage";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import ArticleScrollPage from "../pages/HomePageChildrenComponents/ArticleScrollPage";
import Router from 'vue-router'
import Vue from "vue";


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:HomePage,
            redirect:'/home/articles',
            children:[
                {
                    path:'articles',
                    component:ArticleScrollPage
                },
                {
                    path:'articleEditor',
                    component:ArticleEditor
                },
                {
                    path:'categories/:id',
                    component:Categories
                },
                {
                    path:'tags/:id',
                    component:Tags
                },
                {
                    path:'hotArticles',
                    component:HotArticle
                },
                {
                    path:'chat/:leftUserId',
                    component:Chat
                }
            ]
        },
        {
            path:'/login',
            component:LoginPage
        },
        {
            path:'/register',
            component:RegisterPage
        },
        {
            path:'/users/info/:id',
            component:UserInfo
        },
        {
            path:'/articles/detail/:articleId',
            component:ArticleDetailPage
        }
    ]
})