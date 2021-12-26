import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const Products = (props) => {
  const [availableItems, setAvailableItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getproducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://react-http-bd594-default-rtdb.firebaseio.com/products.json"
        );
        if (!response.ok) {
          throw new Error("Request Failed");
        }
        const resData = await response.json();

        const items = [];
        for (const i in resData) {
          let newItem = {
            id: i,
            price: resData[i].price,
            name: resData[i].name,
            description: resData[i].description,
          };
          items.push(newItem);
        }
        setAvailableItems(items);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getproducts();
  }, []);

  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>

      {error && <p className={styles.error}>Something went wrong!</p>}
      {loading && !error && (
        <p className={styles.loading}>Getting awesome books..</p>
      )}
      {!loading && !error && (
        <ul>
          {availableItems.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Products;
