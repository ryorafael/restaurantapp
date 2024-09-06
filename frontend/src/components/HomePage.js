import "../styles/index.css";
import headerImage from "../assets/header2.png";
import { Link } from "react-router-dom";
import Carousel from "./Carousel.js";

const HomePage = () => {
  return (
    <div>
      <div className="imageheader2" style={{ textAlign: "center" }}>
        <img
          src={headerImage}
          alt="inside of Le Fou Frog"
          width="60%"
          height="auto"
        />
      </div>
      <h4>established in 1996</h4>
      <h2>Bienvenue à Le Fou Frog</h2>
      <br />
      <div className="intro">
        <p>
          Since 1996, Le Fou Frog has been a bit of France and New York City
          tucked away on the corner of 5th and Oak in Kansas City's River
          Market. Chef/Proprietor Mano Rafael and wife, Barbara, invite you to
          experience fresh and elegant food, soft lighting, cozy tables,
          charming servers and an atmosphere that is relaxing, fun and totally
          unpretentious. We invite you to <q>be our guest!</q>
        </p>
      </div>
      <br />

      <Carousel />
      <div className="footer-padding">
        <div className="open-hours">
          <h5>Our Hours</h5>
          <span className="days">Tuesday to Sunday</span>
          <br />
          <span className="hours">5 pm to 9 pm</span>
        </div>
        <div className="address">
          <h5>400 E. 5th Street Kansas City, Missouri 64114</h5>
        </div>
        <div className="contact">
          Contact us (816)-474-6060, lefoufrog@yahoo.com
        </div>
        <div className="links">
          <Link to="/menu">Dinner Menu</Link>
          <Link to="/cocktail">Cocktail Menu</Link>
          <Link to="/wine">Wine List</Link>
          <Link to="/dessert">Dessert Menu</Link>
          <Link to="events">Events</Link>
          <Link to="giftcertificates">Gift Certificates</Link>
          <Link to="aboutus">About Us</Link>
        </div>
        <div className="reserve-button"></div>
        <div className="social-media"></div>
      </div>
    </div>
  );
};

export default HomePage;
