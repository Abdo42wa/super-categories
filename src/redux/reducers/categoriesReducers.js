
//reducer is just function that takes care of all dispatched reducers related to categoriesReducer
//we define state, and action we catch
export const categoriesReducer = (state = {categories: []}, action)=>{
    switch(action.type){
        case 'SET_CATEGORIES':
            return {
                categories: action.payload
            }
        default :
            return state;
    }
}