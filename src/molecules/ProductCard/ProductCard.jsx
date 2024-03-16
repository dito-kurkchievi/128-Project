import classes from "./ProductCard.module.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { cartActions } from "../../app/store/model/slices/cartSlice";
import { useCallback, useMemo } from "react";


// useMemo, useCallback, memo

const ProductCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const header = useMemo(() => {
    return (
      <img className={classes.img} alt="Card" src={product.images[0]} />
    );
  }, [product])

  const onCartAdd = useCallback(() => {
    dispatch(cartActions.addToCart(product))
  }, [dispatch, product])


  const footer = useMemo(() => {
    return (
      <div className={classes.actions}>
        <h3>{product.price}₾</h3>
        <Button onClick={onCartAdd} icon="pi pi-shopping-cart" className={classes.rounded} />
      </div>
    );
  }, [product, onCartAdd])

  return (
    <div className={classes.ProductCard}>
      <Card
        title={product.title}
        subTitle={product.category.join(', ')}
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