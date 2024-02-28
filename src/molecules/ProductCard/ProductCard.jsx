import classes from "./ProductCard.module.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import PropTypes from "prop-types";


const ProductCard = (props) => {
  const { product } = props;

  const header = (
    <img className={classes.img} alt="Card" src={product.images[0]} />
  );


  const footer = (
    <>
      <Button label="Save" icon="pi pi-check" />
      <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
    </>
  );

  return (
    <div className={classes.ProductCard}>
      <Card
        title={product.title}
        subTitle={`${product.price} ₾`}
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">
          {product.description}
        </p>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
}

export { ProductCard };