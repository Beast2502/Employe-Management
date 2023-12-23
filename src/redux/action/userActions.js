import { GET_USERS ,ADD_USERS} from "../actionType/actionType"



export const getUser =(data)=>{
    return {
        type:GET_USERS,
        payload : data
    }
}


export const addUser = (data) =>{
    return {
        type : ADD_USERS,
        payload : data
    }
}