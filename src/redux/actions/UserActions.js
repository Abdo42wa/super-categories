// action is just function that we dispatch
// we add type/name to action and data we want  to dispatch
export const setUser = (user)=>{//provide user object
    return {
        type: 'SET_USER',
        payload: user
    }

}

export const userLogout = ()=>{
    return {
        type: 'LOGOUT_USER'
    }
}
