import styles from "./CartModal.module.css";
import Close from "../../../assets/close.svg";

export const CartModal = ({ handleShowCartModal }) => {
  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={Close} alt="Close" />
      </button>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>
              <button>-1</button>
            </td>
            <td>12</td>
            <td>
              <button>+1</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3>Total: 400,00</h3>
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};
