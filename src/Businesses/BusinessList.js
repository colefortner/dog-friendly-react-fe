import BusinessCard from "./BusinessCard";
import styles from "./BusinessList.module.css";

const BusinessList = (props) => {
  const cards = [...props.cards];

  return (
    <ul className={styles.businesses}>
      {cards.map((card) => (
        <BusinessCard
          key={card.id}
          businessId={card.businessId}
          name={card.businessName}
          picture={card.businessPicture}
          rating={card.businessRating}
          phone={card.businessPhone}
          address={card.businessAddress}
        />
      ))}
    </ul>
  );
};

export default BusinessList;
