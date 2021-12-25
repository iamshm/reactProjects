import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    name: "My First Second",
    description: "This is describing first",
  },
  {
    id: "p2",
    price: 19,
    name: "My Second Bath",
    description: "This is describing second",
  },
  {
    id: "p3",
    price: 16,
    name: "My Soap Second",
    description: "This is describing third",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
