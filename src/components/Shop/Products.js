import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_product =[
  {
    id:'p1', 
    price:6, 
    title:'my First Book', 
    description:"The first book I ever wrote"
  },
  {
    id:'p2', 
    price:5, 
    title:'my second Book', 
    description:"The second book I ever wrote"
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_product.map(product =>
         <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        /> )}
       
      </ul>
    </section>
  );
};

export default Products;
