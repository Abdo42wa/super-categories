
// action is just function that we dispatch
// we add type/name to action and data we want  to dispatch
export const setProducts = (products)=>{//provide products array
    return {
        type: 'SET_PRODUCTS',
        payload: products
    }
}