import { END_LOADNG, START_LOADING } from "../../constants/constants"

export const loaderReducer=(state={isLoading:false}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading:true}
        case END_LOADNG:
            return {...state, isLoading:false}
        default:
            return state;    
    }
}