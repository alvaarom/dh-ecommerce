import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import styles from "./CardCredit.module.css";

export const CardCredit = () => {
  return (
    <div className={styles.container}>
      <div>
        <Cards
          cvc="123"
          expiry="12/23"
          focused="name"
          name="John Doe"
          number="1234 5678 123 4567"
        />
      </div>
      <form>
        <div className={styles.formControl}>
          <label htmlFor="number">Card Number</label>
          <input type="text" id="number" name="number" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="name">Card Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.formInputGroup}>
          <div className={styles.formControl}>
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" name="expiry" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" name="cvc" />
          </div>
        </div>
      </form>
    </div>
  );
};
