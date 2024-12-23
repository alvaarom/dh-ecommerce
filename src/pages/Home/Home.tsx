import { useEffect, useState } from "react";
import { Hero } from "../../components/ui/Hero/Hero";
import styles from "./Home.module.css";
import { CardProduct } from "../../components/ui/CardProduct/CardProduct";
import { getProducts } from "../../service";
import { Product } from "../../interface";
import { Toaster } from "sonner";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error</p>}
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
