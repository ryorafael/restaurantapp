import React from "react";
import styles from "../styles/Giftcertificate.module.css";
import giftCardImage from "../assets/giftcard.webp";

const GiftCertificate = () => {
  const giftCardOptions = [
    { price: "$50" },
    { price: "$100" },
    { price: "$200" },
    { price: "$500" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Gift Certificates</h1>
      <div className={styles.giftCards}>
        {giftCardOptions.map((option, index) => (
          <div className={styles.card} key={index}>
            {/* Front side of the card */}
            <div className={styles.cardFront}>
              <img
                src={giftCardImage}
                alt="Le Fou Frog Gift Card"
                className={styles.image}
              />
              <div className={styles.priceTag}>Gift Card {option.price}</div>
            </div>

            {/* Back side of the card */}
            <div className={styles.cardBack}>
              <button className={styles.button}>Purchase {option.price}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCertificate;
