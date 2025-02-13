import "./ShoppingCart.css";
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { addItem, removeItem, deleteItem } from '../redux/cartSlice';

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Price: ${cart.totalPrice.toFixed(2)}</p>
      {cart.items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(removeItem(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(addItem(item))}>+</button>
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
        </div>
      ))}
      <div className="cart-summary">
        <button>Checkout (Coming Soon)</button>
        <Link to="/products">Continue Shopping</Link>
      </div>
    </section>
  );
}
