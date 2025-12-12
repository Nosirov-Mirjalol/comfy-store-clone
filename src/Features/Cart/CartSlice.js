import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0
}

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart')
  if (!cart) return defaultState
  try {
    return JSON.parse(cart)
  } catch {
    return defaultState
  }
}

const saveToLocalStorage = (state) => {
  localStorage.setItem(
    'cart',
    JSON.stringify({
      cartItems: state.cartItems,
      numItemsInCart: state.numItemsInCart,
      cartTotal: state.cartTotal,
      shipping: state.shipping,
      tax: state.tax,
      orderTotal: state.orderTotal
    })
  )
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload

      const item = state.cartItems.find((i) => i.cartID === product.cartID)

      if (item) {
        item.amount += product.amount
      } else {
        state.cartItems.push(product)
      }

      state.numItemsInCart += product.amount
      state.cartTotal += product.price * product.amount

      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Item added to cart')
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload
      const item = state.cartItems.find((i) => i.cartID === cartID)

      if (!item) return

      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)
      state.numItemsInCart -= item.amount
      state.cartTotal -= item.price * item.amount

      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Item removed from cart')
    },

    editItem: (state, action) => {
      const { cartID, amount } = action.payload
      const item = state.cartItems.find((i) => i.cartID === cartID)

      if (!item) return

      state.numItemsInCart += amount - item.amount
      state.cartTotal += item.price * (amount - item.amount)

      item.amount = amount

      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Cart updated')
    },

    clearCart: (state) => {
      localStorage.removeItem('cart')
      return { ...defaultState }
    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      saveToLocalStorage(state)
    }
  }
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
