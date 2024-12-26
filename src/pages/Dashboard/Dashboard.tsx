import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Product } from "../../interface";
import { createProduct } from "../../service";

export const Dashboard = () => {
  const [product, setProduct] = useState<Product>({
    amiiboSeries: "",
    character: "",
    gameSeries: "",
    head: "",
    image: "",
    name: "",
    release: {
      au: "",
      eu: "",
      jp: "",
      na: "",
    },
    tail: "",
    type: "",
    price: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage?.getItem("userLogin")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage?.removeItem("userLogin");
    navigate("/login");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const mutation = useMutation({
    mutationFn: (newProduct: Product) => {
      return createProduct(newProduct);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(product);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Dashobard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControlLogin}>
          <label htmlFor="amiiboSeries" className={styles.label}>
            Amiibo Series
          </label>
          <input
            type="text"
            id="amiiboSeries"
            name="amiiboSeries"
            value={product.amiiboSeries}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="character" className={styles.label}>
            Character
          </label>
          <input
            type="text"
            id="character"
            name="character"
            value={product.character}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="gameSeries" className={styles.label}>
            Game Series
          </label>
          <input
            type="text"
            id="gameSeries"
            name="gameSeries"
            value={product.gameSeries}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="head" className={styles.label}>
            Head
          </label>
          <input
            type="text"
            id="head"
            name="head"
            value={product.head}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="image" className={styles.label}>
            Image
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={product.image}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="release" className={styles.label}>
            Release
          </label>
          <input
            type="date"
            id="release"
            name="release"
            value={product.release}
            onChange={handleOnChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="tail" className={styles.label}>
            Tail
          </label>
          <input
            type="text"
            id="tail"
            name="tail"
            value={product.tail}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="type" className={styles.label}>
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={product.type}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="price" className={styles.label}>
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleOnChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formControlLogin}>
          <button type="submit" className={styles.button}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};
