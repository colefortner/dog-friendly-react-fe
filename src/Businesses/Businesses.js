import styles from "./Businesses.module.css";
import BusinessList from "./BusinessList";

const Businesses = (props) => {
  return (
    <div className={styles["business-cards-container"]}>
      <BusinessList cards={props.businessCard}></BusinessList>
    </div>
  );
};

export default Businesses;
