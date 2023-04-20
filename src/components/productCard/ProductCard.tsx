import Image from 'next/image';
import Loader from '@components/Loader/Loader';
import useCallApi from '@hooks/useCallAPI';
import DiscountIcon from '@components/DiscountIcon/DiscountIcon';
import ProductDescription from '@components/ProductDescription/ProductDescription';
import Button from '@components/Button/Button';
import HeartIcon from '@icons/Heart/Heart';

import styles from './ProductCard.module.scss';


const ProductCard = () => { 

  const { response, isLoading } = useCallApi();

  const { availableShipping, price, title, highlights, mainImage } = response || {};
  const { discountPrice, mainPrice } = price || {};
  const priceInPercent = Math.ceil(discountPrice! * 100 / mainPrice!);
  
  const currentMinutes = new Date().getMinutes();
  const isMinuteEven = currentMinutes % 2 === 0;

  const priceBlock = price?.discountPrice ? (
    <div className={styles["price-block"]}>
      <p>
        <span className={`${styles.black} ${styles.default}`}><span className={styles.bold}>ERMI klubo</span> nariamas </span>
        <span className={`${styles["orange-bold"]} ${styles.bigger}`}> ~{100 - priceInPercent}% </span>
      </p>
      <div className={styles["price-block__container"]}>
      <div className={styles.discount}>
        <DiscountIcon />
      <p className={`${styles["orange-bold"]} ${styles.biggest}`}>{price.discountPrice} &euro;</p>
      <p className={ `${styles.gray} ${styles.pl}`}>/pak</p>
      </div>
      <div>
        <span className={`${styles.bold} ${styles.biggest}`}>{price?.mainPrice} &euro; </span><span className={`${styles.gray} ${styles.pl}`}>/pak</span>
        </div>
      </div>
      <p className={styles.gray}>{price.pricePerSquare} &euro; / m<sup>2</sup></p> 
    </div>
  ) : (
    <>
      <span className={`${styles.bold} ${styles.biggest}`}>{price?.mainPrice} &euro; </span><span className={`${styles.gray} ${styles.pl}`}>/pak</span>
      <p className={styles.gray}>{price?.pricePerSquare} &euro; / m<sup>2</sup></p>
    </>
  )

  return (
    <>
    {!isLoading && title ?
    <div className={styles["product-card"]}>
      <div className={styles["product-card__image"]}>
        <Image src={mainImage!} alt={title} fill />
        <div className={styles["heart"]}>
          <HeartIcon />
          </div>
      </div>
      <div className={styles["product-card__content"]}>
        <div className="product-card__content__price">
        {priceBlock}
        </div>
        {isMinuteEven ? 
          <Button onClick={() => console.log('A varaintas, lygine minute')}>Į krepšelį</Button> 
          : null
        }
        <div className="delivery">
          <ProductDescription title={title} highlights={highlights!} delivery={availableShipping!} />
        </div>
        {!isMinuteEven ?
          <Button onClick={() => console.log('B varaintas, nelygine minute')}>Į krepšelį</Button> 
          : null
        }
      </div>
    </div>
      : <Loader /> }
    </>
  );
};

export default ProductCard;