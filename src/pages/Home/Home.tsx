import { Hero } from "../../components/ui/Hero/Hero";
import styles from "./Home.module.css";
import { CardProduct } from "../../components/ui/CardProduct/CardProduct";
import { getProducts } from "../../service";
import { Toaster } from "sonner";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error</p>}
      <div className={styles.container}>
        {data?.data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={styles.paginationButton}
        >
          Prev page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className={styles.paginationButton}
        >
          Next page
        </button>
      </div>
    </>
  );
};

export default Home;
