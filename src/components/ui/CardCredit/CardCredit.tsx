import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import styles from "./CardCredit.module.css";
import { useState } from "react";
import { toast } from "sonner";
import useCartContext from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";

export const CardCredit = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const { dispatch } = useCartContext();
  const { number, name, expiry, cvc } = cardData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus: e.target.name,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([number, name, expiry, cvc].includes("")) {
      toast.error("Please fill all the fields");
      return;
    }
    setCardData({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focus: "",
    });
    dispatch({ type: "CLEAR_CART", payload: {} as CartProduct });
  };

  return (
    <div className={styles.container}>
      <div>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={cardData.focus as any}
          name={name}
          number={number}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="number">Card Number</label>
          <input
            type="text"
            id="number"
            name="number"
            onChange={handleInputChange}
            value={number}
            onFocus={handleInputFocus}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="name">Card Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={name}
            onFocus={handleInputFocus}
          />
        </div>
        <div className={styles.formInputGroup}>
          <div className={styles.formControl}>
            <label htmlFor="expiry">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              onChange={handleInputChange}
              value={expiry}
              onFocus={handleInputFocus}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              onChange={handleInputChange}
              value={cvc}
              onFocus={handleInputFocus}
            />
          </div>
        </div>

        <button type="submit" className={styles.buyButton}>
          Buy now
        </button>
      </form>
    </div>
  );
};
