import { useSelector } from "react-redux";
import classes from "./CartProductList.module.css";
import { getCart } from "../../app/store/model/selectors/cart/cartSelectors";

const CartProductList = (props) => {
  const cartData = useSelector(getCart)

  return (
    <div className={classes.CartProductList}>
      {cartData.map(prod => {
        return (
          <div key={prod.id} className={classes.productCard}>
            <img src={prod.images[0]} alt="prod" />
            <p>{prod.name}</p>
            <p>{prod.price}</p>
          </div>
        )
      })}
    </div>
  );
};

export { CartProductList };