import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const defaultState={
    cartItem:[],
    numItemInCart:0,
    cartTotal:0,
    shipping:0,
    tax:0,
    orderTotal:0
}
const getCartFromLocalstorage=()=>{
    return JSON.parse(localStorage.getItem('cart')) || defaultState
}
const cartSlice=createSlice({
    name:'cart',
    initialState:getCartFromLocalstorage(),
    reducers:{
        addItem:(state,action)=>{
            const { product } = action.payload

			const item = state.cartItem.find((i) => i.cartID === product.cartID)

			if (item) {
				item.amount = +product.amount
			} else {
				state.cartItem.push(product)
			}
			state.numItemInCart += product.amount
            state.cartTotal += product.price * product.amount
			state.tax=0.1*state.cartTotal
            state.orderTotal=state.cartTotal+state.shipping+state.tax
            localStorage.setItem('cart',JSON.stringify(state))
			toast.success('Item added to cart') 
        },
        clearCart:(state)=>{},
        removeItem:(state,action)=>{},
        editItem:(state,axtion)=>{}
    }
})
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions

export default cartSlice.reducer