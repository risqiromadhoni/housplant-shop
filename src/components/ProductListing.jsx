import "./ProductListing.css";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Monstera', price: 25, category: 'Indoor', image: 'https://www.shelmerdine.com/wp-content/uploads/2023/08/swisscheese-600x600.jpg' },
  { id: 2, name: 'Snake Plant', price: 20, category: 'Low Maintenance', image: 'https://www.thespruce.com/thmb/CpEP-cPmDmz6kwdmVKbhcrdCJuY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/snake-plant-care-overview-1902772-04-d3990a1d0e1d4202a824e929abb12fc1-349b52d646f04f31962707a703b94298.jpeg' },
  // Add more products...
];

export default function ProductListing() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <section>
      <h2 className="container">Products</h2>
      <div className="product-listing">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}