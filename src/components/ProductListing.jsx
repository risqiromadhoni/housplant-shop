import "./ProductListing.css";
import { PLANTS_IMG } from '../assets/plants'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Monstera', price: 25, category: 'Indoor', image: PLANTS_IMG.monstrea },
  { id: 2, name: 'Snake Plant', price: 20, category: 'Low Maintenance', image: PLANTS_IMG.snake },
  { id: 3, name: 'Fiddle Leaf Fig', price: 35, category: 'Indoor', image: PLANTS_IMG.fiddle },
  { id: 4, name: 'Pothos', price: 15, category: 'Low Maintenance', image: PLANTS_IMG.pothos },
  { id: 5, name: 'ZZ Plant', price: 30, category: 'Low Maintenance', image: PLANTS_IMG.zz },
  { id: 6, name: 'Rubber Plant', price: 40, category: 'Indoor', image: PLANTS_IMG.rubber },
  { id: 7, name: 'Aloe Vera', price: 10, category: 'Succulents', image: PLANTS_IMG.aloe },
  { id: 8, name: 'Peace Lily', price: 22, category: 'Indoor', image: PLANTS_IMG.lily },
  { id: 9, name: 'Spider Plant', price: 18, category: 'Low Maintenance', image: PLANTS_IMG.spider },
  { id: 10, name: 'Bird of Paradise', price: 50, category: 'Outdoor', image: PLANTS_IMG.bird },
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