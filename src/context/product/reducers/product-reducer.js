export const ProductReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "add_product":
            return {...state, products: payload }
        case "update_login_status":
            return {...state, isLoggedIn: payload }
        case "add_user":
            return {...state, userId: payload }
        case "update_cards":
            return {...state, carts: payload.carts }
        default:
            return state;
    }

}

export const initialState = {
    products: [],
    carts: [],
    isLoggedIn: false,
    userId: ''
}