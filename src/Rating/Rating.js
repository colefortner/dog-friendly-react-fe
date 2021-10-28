import styles from "./Rating.module.css";

const Rating = (props) => {
  let rating;

  if (props.rating % 1 !== 0) {
    rating = (props.rating / 5) * 100 + 1;
  } else {
    rating = (props.rating / 5) * 100;
  }

  console.log(rating);

  return (
    <span className={styles["paw-rating-wrapper"]}>
      <span className={styles.paws} style={{ width: rating + "%" }}></span>
    </span>
  );
};

export default Rating;
