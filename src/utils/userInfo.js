import {getUserInfoById} from "../api/user";

export function transferToUserNickName(id){
    getUserInfoById(id).then(data=>{
        return data.data.nickname
    }).catch(()=>{
        return id
    })
}