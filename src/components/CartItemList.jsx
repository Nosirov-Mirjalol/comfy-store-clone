import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItemList = () => {
	const cartItems = useSelector((state) => state.cartState.cartItem)
	
	return (
		<>
			{cartItems.map((item) => {
				return <CartItem key={item.cartID} cartItem={item} />
			})}
		</>
	)
}
export default CartItemList
