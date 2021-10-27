import styles from "./Rating.module.css";

const Rating = (props) => {
  const rating = (props.rating / 5) * 100;

  return (
    <span className={styles["paw-rating-wrapper"]}>
      <span className={styles.paws} style={{ width: rating + "%" }}></span>
    </span>
  );
};

export default Rating;
