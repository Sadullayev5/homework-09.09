import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state , action) => {
            const productExist = state.products.findIndex(product => product.id === action.payload.id)
            if(productExist === -1){
                state.products.push(action.payload)
            }
            else if(state.products[productExist].quantity >= state.products[productExist].stock){
                return state
            }
            else{
                state.products[productExist].quantity = state.products[productExist].quantity  + 1
            }
            
        },
        removeFromCart : (state , action) => {
            const productExist = state.products.findIndex(product => product.id === action.payload.id)
            if(productExist !== -1){
                state.products[productExist].quantity = state.products[productExist].quantity  - 1
            }

            if(state.products[productExist].quantity === 0){
                state.products.splice(productExist , 1)
            }
        },
        deleteFromCart: (state , action) => {
            state.products.splice(action.payload , 1)
        }

    }
})

export const {addToCart , removeFromCart , deleteFromCart} = cartSlice.actions
export default cartSlice.reducer