import request from "../request";
import {getToken} from "../request/token";

export function addComment(comment) {
    return request({
        url: '/comments/add',
        method: 'post',
        headers:{
            'Authorization':getToken()
        },
        data:{
            content:comment.content,
            articleId:comment.articleId,
            parentId:comment.parentId,
            toUid:comment.toUid,
            level:comment.level
        }

    })
}

export function deleteComment(commentId) {
    return request({
        url: `/comments/${commentId}/remove`,
        method: 'post',
        headers:{
            'Authorization':getToken()
        }

    })
}

export function getComments(articleId, pageParam) {
    return request({
        url: `/comments/articles/${articleId}`,
        method: 'post',
        data:{
            page:pageParam.page,
            pageSize:pageParam.pageSize
        }

    })
}