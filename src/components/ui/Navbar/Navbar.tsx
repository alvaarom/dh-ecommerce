import Logo from "../../../assets/logo.svg";
import Cart from "../../../assets/cart.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail}>
        <img src={Logo} alt="Logo DH eCommerce" width={50} height={50} />
        <div>
          <span>DH eCommerce</span>
        </div>
      </div>
      <div className={styles.navbarCartContainer}>
        <p className={styles.navbarTextAmount}>2</p>
        <img src={Cart} alt="Cart" />
      </div>
    </div>
  );
};
