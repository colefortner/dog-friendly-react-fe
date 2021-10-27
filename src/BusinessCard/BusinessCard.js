import styles from "./BusinessCard.module.css";

const BusinessCard = (props) => {
  const card = {
    ...props.businessCard,
  };

  return (
    <div class={styles.card}>
      <h1>{card.businessName}</h1>
      <img src={card.businessPicture} alt="Business" />
      <h2>Rating: {card.businessRating}</h2>
      <h3>{card.businessPhone}</h3>
      <p>{card.businessAddress}</p>
    </div>
  );
};

export default BusinessCard;
