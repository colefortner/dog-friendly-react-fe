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
          address1={card.businessAddress1}
          address2={card.businessAddress2}
        />
      ))}
    </ul>
  );
};

export default BusinessList;
