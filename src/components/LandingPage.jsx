import "./LandingPage.css";
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <section className="landing-page">
      <h1>Welcome to Houseplant Shop</h1>
      <p>We offer a wide variety of houseplants to brighten up your home!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </section>
  );
}
