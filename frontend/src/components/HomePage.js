import "../styles/index.css";
import headerImage from "../assets/header2.png";
// import { Link } from "react-router-dom";
import Carousel from "./Carousel.js";
import Reservation from "./Reservation.js";

const HomePage = () => {
  return (
    <main role="main">
      <div>
        <div className="imageheader2" style={{ textAlign: "center" }}>
          <img src={headerImage} alt="" width="60%" height="auto" />
        </div>
        <div className="homepage">
          <h2 className="homepage-header">Bienvenue à Le Fou Frog</h2>
          <h3 className="est">established in 1996</h3>
          <br />
          <div className="intro.div">
            <p className="intro">
              Since 1996, Le Fou Frog has been a bit of France and New York City
              tucked away on the corner of 5th and Oak in Kansas City's River
              Market. Chef/Proprietor Mano Rafael and wife, Barbara, invite you
              to experience fresh and elegant food, soft lighting, cozy tables,
              charming servers and an atmosphere that is relaxing, fun and
              totally unpretentious. We invite you to <q>be our guest!</q>
            </p>
          </div>
        </div>

        <Carousel />
        <div id="reservation-section">
          <Reservation />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
