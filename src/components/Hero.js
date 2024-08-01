import "./Hero.css";
import restaurantFood from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="display-container">
        <h1 className="display-title">Little Lemon</h1>
        <h3 className="display-subtitle">Chicago</h3>
        <h4 className="display-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </h4>
        {/* <Link to="/bookings" className="reserve-button">
          Reserve a Table
        </Link> */}
      </div>
      <div className="image-container">
        <img
          src={restaurantFood}
          alt="restaurant food"
          className="display-image"
        />
      </div>
    </section>
  );
}

export default Hero;
