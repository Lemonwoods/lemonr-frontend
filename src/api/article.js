import request from "../request";
import {getToken} from "../request/token";

export function getArticleList(pageParam, query) {
    return request({
        url: '/articles',
        method: 'post',
        headers:{
            'Authorization':getToken()
        },
        data:{
            pageParam:{
                page:pageParam.page,
                pageSize:pageParam.pageSize
            },
            articleQueryCondition:{
                categoryId:query.categoryId,
                tagId:query.tagId,
                authorId:query.authorId,
                year:query.year,
                month:query.month
            }
        }
    })
}

export function getArticleById(articleId){
    return request({
        url: `/articles/${articleId}`,
        method: 'get',
        headers:{
            'Authorization':getToken()
        },
    })
}

export function getArticleTotalCount(query) {
    return request({
        url: '/articles/totalCount',
        method: 'post',
        data:{
            categoryId:query.categoryId,
            tagId:query.tagId,
            authorId:query.authorId,
            year:query.year,
            month:query.month
        }
    })
}

export function getCategories() {
    return request({
        url: '/categories',
        method: 'get'
    })
}

export function getTags() {
    return request({
        url: '/tags',
        method: 'get',

    })
}

export function publishArticle(article) {
    return request({
        url: '/articles/publish',
        method: 'post',
        headers:{
            'Authorization':getToken()
        },
        data:{
            summary:article.summary,
            title:article.title,
            categoryId:article.categoryId,
            tagIdList:article.tagIdList,
            content:article.content,
            contentHtml:article.contentHtml
        }

    })
}

export function likeArticle(id) {
    return request({
        url: `/articles/${id}/like/add`,
        method: 'post',
        headers:{
            'Authorization':getToken()
        }
    })
}

export function cancelLikeArticle(id) {
    return request({
        url:`/articles/${id}/like/remove`,
        method: 'post',
        headers:{
            'Authorization':getToken()
        }
    })
}

export function addArticleViewCount(id) {
    return request({
        url: `/articles${id}/viewCount/add`,
        method: 'post',

    })
}

export function getUserLikedArticles(userId, pageParam) {
    return request({
        url: `/articles/users/${userId}/liked`,
        method: 'post',
        data:{
            page:pageParam.page,
            pageSize:pageParam.pageSize
        }
    })
}

export function getUserPublishedArticles(userId, pageParam) {
    return request({
        url: `/articles/users/${userId}/published`,
        method: 'post',
        data:{
            page:pageParam.page,
            pageSize:pageParam.pageSize
        }
    })
}

export function getUserCommentedArticles(userId, pageParam) {
    return request({
        url: `/articles/users/${userId}/commented`,
        method: 'post',
        data:{
            page:pageParam.page,
            pageSize:pageParam.pageSize
        }
    })
}

export function getUserArticles(userId, articleType, pageParam) {
    return request({
        url: `/articles/users/${userId}/${articleType}`,
        method: 'post',
        data:{
            page:pageParam.page,
            pageSize:pageParam.pageSize
        }
    })
}

export function deleteArticle(articleId) {
    return request({
        url: `/articles/${articleId}/remove`,
        method: 'post',
        headers:{
            'Authorization':getToken()
        }
    })
}

export function getIsLiked(articleId){
    return request({
        url:`/articles/${articleId}/isLiked`,
        method:'post',
        headers:{
            'Authorization':getToken()
        }
    })
}


