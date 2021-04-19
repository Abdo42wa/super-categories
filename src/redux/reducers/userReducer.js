
//reducer is just function that takes care of all dispatched reducers related to userReducer
//we define state, and action we catch

export const userReducer = (state = {loggedUser: null}, action)=>{
    switch(action.type){//depeding on dispatched action type/name return different state
        case 'SET_USER':
            return {
                loggedUser: action.payload
            }
        default :
            return state;
    }
}