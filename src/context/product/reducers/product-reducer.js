export const ProductReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "add_product":
            return {...state, products: payload }
        case "update_login_status":
            return {...state, isLoggedIn: payload }
        default:
            return state;
    }

}

export const initialState = {
    products: [{ id: 1, name: 'anand' }],
    isLoggedIn: false
}