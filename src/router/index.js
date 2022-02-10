import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
// import ArticleList from "../pages/HomePageChildrenComponents/ArticleList";
import ArticleEditor from "../pages/HomePageChildrenComponents/ArticleEditor";
import Categories from "../pages/HomePageChildrenComponents/Categories";
import Tags from "../pages/HomePageChildrenComponents/Tags";
import HotArticle from "../pages/HomePageChildrenComponents/HotArticle";
import Chat from "../pages/HomePageChildrenComponents/Chat";
import UserInfo from "../pages/UserInfoPage";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import ArticleScrollPage from "../pages/HomePageChildrenComponents/ArticleScrollPage";

export default new VueRouter({
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
                    path:'chat',
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