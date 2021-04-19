//reducer is just function that takes care of all dispatched reducers related to categoriesReducer
//we define state, and action we catch

export const productsReducer = (state = {products: []}, action)=>{
    switch(action.type){//depending on dispatched action type/name return different state
        case 'SET_PRODUCTS':
            return {
                products: action.payload
            }
        default: 
            return state;
    }
}