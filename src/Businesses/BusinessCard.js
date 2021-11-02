import styles from "./BusinessCard.module.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import Card from "../UI/Card";

const BusinessCard = (props) => {
  return (
    <li class={styles["card-container"]}>
      <Card>
        <div>
          <h2>{props.name}</h2>
          <img src={props.picture} alt="Business" />
          <div>Rating: {props.rating}</div>
          <div>{props.address}</div>
          <div>{props.phone}</div>
          <Rating rating={props.rating} />
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
