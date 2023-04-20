
import styles from './ProductDescription.module.scss';


const shippingBlock = (delivery :Array<string>) => {
  if (delivery?.includes('hd') && delivery?.includes('cnc')) {
    return (
      <div>
        <p className={styles["delivery__info"]}><span className={styles.available}></span>Pristatymas</p>
        <p className={styles["delivery__info"]}><span className={styles.available}></span>Atsiėmimas</p>
      </div>
    )
  } else if (delivery?.includes('hd')) {
    return (
      <div>
        <p className={styles["delivery__info"]}><span className={styles.available}></span>Pristatymas</p>
        <p className={styles["delivery__info"]}><span className={styles.not_available}></span>Atsiėmimas</p>
      </div>
    )
  } else if (delivery?.includes('cnc')) {
    return (
      <div>
        <p className={styles["delivery__info"]}><span className={styles.not_available}></span>Pristatymas</p>
        <p className={styles["delivery__info"]}><span className={styles.available}></span>Atsiėmimas</p>
      </div>
    )
  } else {
    return (
      <div>
        <p className={styles["delivery__info"]}><span className={styles.not_available}></span>Pristatymas</p>
        <p className={styles["delivery__info"]}><span className={styles.not_available}></span>Atsiėmimas</p>
      </div>
    )
  }
}

interface ProductDescriptionProps {
  title: string;
  highlights: {
    title: string;
    value: string;
  }[];
  delivery: string[];
}

const ProductDescription = ( {title, highlights, delivery} :ProductDescriptionProps  ) => {

  const infoBlock = highlights?.map((highlight) => (
    <ul key={highlight.title} className={styles["items-info"]}>
      <li className={styles.options}>
        <span className={styles["options--left"]}>{highlight.title}</span>: <span className={styles["options--black"]}>{highlight.value}</span></li>
    </ul>
  ))

  const shippingStatuses = shippingBlock(delivery);

  return (
    <div className={styles.description}>
      <p className={styles.title}>{title}</p>
      <div className={styles["info-block"]}>
        {infoBlock}
      </div>
      <div className={styles.delivery}>
        {shippingStatuses}
        </div>
    </div>
  );
};

export default ProductDescription;