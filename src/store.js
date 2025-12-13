import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/Features/Cart/CartSlice'
import userReducer from './Features/user/userSlice'

export const store = configureStore({
	reducer: {
		cartState:cartReducer,
		userState:userReducer
	}
})