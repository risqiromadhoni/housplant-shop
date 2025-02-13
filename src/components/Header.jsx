import "./Header.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
      <h1>Houseplant Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}