import { GET_USERS , ADD_USERS} from "../actionType/actionType";
import SampleData from "../../data.json";

const initialState ={
    users : SampleData,
    error : '',
}


const userReducer = (state = initialState , actions)=>{

    switch(actions.type){
        case GET_USERS :  return {
            data: actions.payload
        }

        case ADD_USERS : {
            let updateData = [...state.users , actions.payload];
            return {
                error :'',
                users : updateData
            };
        }

        default : return state
    }
}

export default userReducer;