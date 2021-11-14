import styles from "./BusinessCard.module.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import Card from "../UI/Card";

const BusinessCard = (props) => {
  return (
    <li class={styles["card-container"]}>
      <Card>
        <div>
          <div class={styles["image-container"]}>
            <img src={props.picture} alt="Business" />
          </div>
          <h2 class={styles.name}>{props.name}</h2>
          <Rating rating={props.rating} />
          <div class={styles.phone}>{props.phone}</div>
          {/* <div class={styles.rating}>Rating: {props.rating}</div> */}
          <div class={styles.address}>{props.address1}</div>
          <div class={styles.address}>{props.address2}</div>
          <div></div>
          <Link
            to={{
              pathname: `/showpage/${props.businessId}`,
              state: {
                cardData: props
              }
            }}
          >
            {/* {props.name}  */}
            More
          </Link>
        </div>
      </Card>
    </li>
  );
};

export default BusinessCard;
