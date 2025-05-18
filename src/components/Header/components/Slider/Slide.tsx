
import styles from "./Slider.module.scss";

interface SliderProps {
  image: { [key: string]: string };
  title: string;
  discount: string;
  description_discount: string;
  buttonText: string;
}

export default function Slide({
  image,
  title,
  discount,
  description_discount,
  buttonText,
}: SliderProps) {
  const imageUrl = image.BlackFriday;
  return (
    <div
      className={styles.slider}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={`${styles.slide} ${styles.active}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.discount}>
            {discount} <span>{description_discount}</span>
          </div>
          <a href="#" className={styles.button}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
