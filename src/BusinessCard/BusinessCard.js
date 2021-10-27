import styles from "./BusinessCard.module.css";

import Rating from "../Rating/Rating";

const BusinessCard = (props) => {
  const cards = [...props.businessCard];

  return (
    <div class={styles["card-container"]}>
      <ul class={styles.card}>
        {cards.map((card) => (
          <li>
            <h1>{card.businessName}</h1>
            <img src={card.businessPicture} alt="Business" />
            <h2>Rating: {card.businessRating}</h2>
            <h3>{card.businessPhone}</h3>
            <p>{card.businessAddress}</p>
            <Rating rating={card.businessRating} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessCard;
