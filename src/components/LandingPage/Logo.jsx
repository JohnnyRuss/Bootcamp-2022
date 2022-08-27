import styles from "./styles/logo.module.scss"

function Logo() {
  return (
    <figure className={styles.logo}>
      <img src='./assets/logo.svg' alt='logo' />
    </figure>
  );
}

export default Logo;
