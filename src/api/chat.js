import request from "../request";
import {getToken} from "../request/token";

export function getChatRecords(fromUserId, pageParam) {
    return request({
        url: `/chat/records/fromUser/${fromUserId}`,
        method: 'post',
        headers:{
            'Authorization':getToken()
        },
        data:{
            page:pageParam.page,
            pageSize:pageParam.pageSize
        }
    })
}