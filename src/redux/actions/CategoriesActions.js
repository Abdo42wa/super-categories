
// action is just function that we dispatch
// we add type/name to action and data we want  to dispatch
export const setCategories = (categories)=>{//provide categories
    return {
        type: 'SET_CATEGORIES',
        payload: categories
    }
}