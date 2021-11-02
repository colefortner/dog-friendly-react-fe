import styles from "./BusinessShowPage.module.css";
import { useParams, useLocation } from "react-router-dom";
import Rating from "../Rating/Rating";

const BusinessShowPage = (props) => {
  const params = useParams();
  const location = useLocation();
  const cardData = location.state;
  console.log(location.state);
  console.log(cardData.name);

  return (
    <section className={styles.showy}>
      <p>hello</p>
      <h1>{params.businessId}</h1>
      <p>{cardData.cardData.name}</p>
      <img src={cardData.cardData.picture} alt="business" />
      <p>Rating: {cardData.cardData.rating}</p>
      <p>{cardData.cardData.phone}</p>
      <Rating rating={cardData.cardData.rating} />
    </section>
  );
};

export default BusinessShowPage;
