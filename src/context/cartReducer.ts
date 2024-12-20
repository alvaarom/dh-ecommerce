export const initialState = {
    cartItems: [],
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.tail !== action.payload.tail),
            }
        default:
            return state
    }
})