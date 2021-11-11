import styles from "./BusinessCard.module.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import Card from "../UI/Card";

const BusinessCard = (props) => {
  return (
    <li class={styles["card-container"]}>
      <Card>
        <div>
          <h2 class={styles.name}>{props.name}</h2>
          <div class={styles["image-container"]}>
            <img src={props.picture} alt="Business" />
          </div>
          <div class={styles.rating}>Rating: {props.rating}</div>
          <div class={styles.address}>{props.address}</div>
          <div class={styles.phone}>{props.phone}</div>
          <Rating rating={props.rating} />
          <div></div>
          <Link
            to={{
              pathname: `/showpage/${props.businessId}`,
              state: {
                cardData: props
              }
            }}
          >
            {props.name} info
          </Link>
        </div>
      </Card>
    </li>
  );
};

export default BusinessCard;
