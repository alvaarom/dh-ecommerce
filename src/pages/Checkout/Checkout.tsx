import { CardCredit } from "../../components/ui/CardCredit/CardCredit";
import { Table } from "../../components/ui/Table/Table";
import styles from "./Checkout.module.css";

export const Checkout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table />
        </div>
        <div>
          <CardCredit />
        </div>
      </div>
      <button>Buy now</button>
    </div>
  );
};

export default Checkout;
