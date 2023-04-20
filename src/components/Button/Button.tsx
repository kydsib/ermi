import styles from './Button.module.scss';

const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;